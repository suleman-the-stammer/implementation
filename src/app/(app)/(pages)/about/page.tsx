import type { Metadata } from "next";
import Link from "next/link";
import {
  SparklesIcon,
  ArrowRightIcon,
  Building2Icon,
  Code2Icon,
  ZapIcon,
  ShieldCheckIcon,
  LayersIcon,
  PackageIcon,
  ServerIcon,
  GithubIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About — Suleman | Software Engineer",
  description:
    "Suleman is a full-stack software engineer (MERN, MEAN, Next.js) who builds fast, reliable, production-ready web applications. Funroad is a multi-tenant e-commerce platform built to showcase his work.",
};

const stack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Payload CMS",
  "MongoDB",
  "tRPC",
  "Tailwind CSS",
  "Stripe Connect",
];

const values = [
  {
    icon: Building2Icon,
    title: "Multi-tenant architecture",
    description:
      "Funroad is a true multi-tenant platform: every seller gets an isolated storefront on their own sub-domain, with tenant-scoped data, role-based access control (RBAC), and a shared yet securely partitioned database layer — the same pattern used by modern SaaS products.",
  },
  {
    icon: Code2Icon,
    title: "Type-safe, end-to-end",
    description:
      "Full end-to-end type safety with TypeScript, tRPC, and Zod schema validation — from the MongoDB/Mongoose models through the API layer to React Server Components, so entire classes of bugs are caught at compile time.",
  },
  {
    icon: ZapIcon,
    title: "Performance by default",
    description:
      "Server-Side Rendering and React Server Components (RSC), data prefetching and caching with TanStack Query, optimistic UI, and optimized image delivery — fast first paint and smooth interactions out of the box.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure auth & payments",
    description:
      "Cookie-based authentication, granular permissions per tenant, and real payment flows powered by Stripe Connect — production-grade security handled, not just the happy path.",
  },
];

const skills = [
  {
    icon: LayersIcon,
    title: "MERN Stack",
    items: "MongoDB · Express.js · React · Node.js",
    description:
      "Dynamic, data-driven single-page apps and REST APIs end to end.",
  },
  {
    icon: PackageIcon,
    title: "MEAN Stack",
    items: "MongoDB · Express.js · Angular · Node.js",
    description:
      "Structured, enterprise-grade applications from front to back.",
  },
  {
    icon: Code2Icon,
    title: "Next.js & Modern Web",
    items: "Next.js · React · TypeScript · tRPC · Tailwind",
    description:
      "SSR, RSC, and type-safe full-stack apps — exactly like this one.",
  },
  {
    icon: ServerIcon,
    title: "DevOps & Cloud",
    items: "Docker · CI/CD · Git · AWS · Vercel",
    description:
      "Automated builds, deployments, and scaling in production.",
  },
];

const Page = () => {
  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col gap-10 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card card-soft animate-fade-in-up">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_88%_-10%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_60%),radial-gradient(620px_320px_at_-6%_110%,color-mix(in_oklab,oklch(0.6_0.13_200)_14%,transparent),transparent_55%)]" />
        <div className="relative px-6 py-12 lg:px-14 lg:py-16 flex flex-col gap-6 max-w-3xl">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent text-accent-foreground px-3.5 py-1.5 text-sm font-medium ring-1 ring-primary/15">
            <SparklesIcon className="size-4" />
            Full-Stack Software Engineer · Portfolio
          </span>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
            Hi, I&apos;m Suleman — I build fast,{" "}
            <span className="text-primary">reliable web products</span>.
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl">
            I&apos;m a full-stack software engineer who turns complex ideas into
            polished, production-ready applications. This marketplace,{" "}
            <span className="font-medium text-foreground">Funroad</span>, is a
            multi-tenant e-commerce platform I built from the ground up — crafted
            to show exactly how I design, architect, and ship modern software.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">
                Work with me
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <a
                href="https://github.com/suleman-the-stammer"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="size-4" />
                View my GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* The craft */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold text-foreground">The craft</h2>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            Great software is invisible — it just works. My focus is on building
            experiences that feel effortless to use and a joy to maintain. I care
            deeply about clean architecture, thoughtful UX, and the small details
            that separate a good product from a great one.
          </p>
          <p>
            Funroad is a real, full-stack{" "}
            <span className="font-medium text-foreground">
              multi-tenant e-commerce platform
            </span>
            : multiple sellers, each with their own storefront, product
            management, reviews, carts, and checkout — backed by a type-safe API
            and a modern, responsive interface. It&apos;s the kind of system I
            love to build for clients who want something that scales.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-foreground">
            What I bring to the table
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Funroad follows a genuine{" "}
            <span className="font-medium text-foreground">
              multi-tenant architecture
            </span>{" "}
            — here&apos;s the engineering that powers it, and the standards I
            bring to every build.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-border bg-card p-6 card-soft hover-lift"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <value.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1.5">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & expertise */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Skills &amp; expertise
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            I&apos;m a full-stack developer, fluent across the{" "}
            <span className="font-medium text-foreground">MERN</span> and{" "}
            <span className="font-medium text-foreground">MEAN</span> stacks,{" "}
            <span className="font-medium text-foreground">Next.js</span>, and other
            modern frameworks — with hands-on{" "}
            <span className="font-medium text-foreground">DevOps</span> experience
            to ship and scale what I build.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-border bg-card p-6 card-soft hover-lift"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <skill.icon className="size-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {skill.title}
              </h3>
              <p className="text-sm font-medium text-primary mt-1">
                {skill.items}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground card-soft">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_85%_-20%,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative px-6 py-12 lg:px-14 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-semibold">Have a project in mind?</h2>
          <p className="text-primary-foreground/85 max-w-xl">
            I&apos;m available for freelance work and collaborations. Let&apos;s
            turn your idea into something your users will love.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-card text-primary border-transparent hover:bg-card/90 font-semibold"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;
