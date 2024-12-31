import { TRPCError } from "@trpc/server";
import { headers as getHeaders } from "next/headers";

import { stripe } from "@/lib/stripe";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

import { generateAuthCookie } from "../utils";
import { loginSchema, registerSchema } from "../schemas";

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders();

    const session = await ctx.db.auth({ headers });

    return session;
  }),
  register: baseProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const existingData = await ctx.db.find({
        collection: "users",
        limit: 1,
        where: {
          username: {
            equals: input.username,
          },
        },
      });

      const existingUser = existingData.docs[0];

      if (existingUser) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Username already taken",
        });
      }

      // Create a real Stripe connected account when a valid key is configured.
      // Otherwise (local/demo without Stripe) fall back to a placeholder id so
      // sign-up still works end-to-end. Add a real STRIPE_SECRET_KEY to enable
      // actual Stripe Connect onboarding and payments.
      const hasStripeKey =
        !!process.env.STRIPE_SECRET_KEY &&
        !process.env.STRIPE_SECRET_KEY.includes("placeholder");

      let stripeAccountId = `acct_local_${input.username}`;

      if (hasStripeKey) {
        const account = await stripe.accounts.create({});

        if (!account) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Failed to create Stripe account",
          });
        }

        stripeAccountId = account.id;
      }

      const tenant = await ctx.db.create({
        collection: "tenants",
        data: {
          name: input.username,
          slug: input.username,
          stripeAccountId,
        }
      })

      await ctx.db.create({
        collection: "users",
        data: {
          email: input.email,
          username: input.username,
          password: input.password, // This will be hashed
          tenants: [
            {
              tenant: tenant.id,
            },
          ],
        },
      });

      const data = await ctx.db.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        },
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Failed to login",
        });
      }

      await generateAuthCookie({
        prefix: ctx.db.config.cookiePrefix,
        value: data.token,
      });
    }),
    login: baseProcedure
    .input(loginSchema)
    .mutation(async ({ input, ctx }) => {
      const data = await ctx.db.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        },
      });

      if (!data.token) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Failed to login",
        });
      }

      await generateAuthCookie({
        prefix: ctx.db.config.cookiePrefix,
        value: data.token,
      });

      return data;
    }),
});
