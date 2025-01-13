import type { Metadata } from "next";
import Link from "next/link";
import {
  SparklesIcon,
  MailIcon,
  PhoneIcon,
  GithubIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact — Suleman | Software Engineer",
  description:
    "Get in touch with Suleman, a full-stack software engineer available for freelance work and collaborations.",
};

const channels = [
  {
    icon: MailIcon,
    label: "Email",
    value: "sulemanthestammer@gmail.com",
    href: "mailto:sulemanthestammer@gmail.com",
    hint: "Best for project inquiries",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+92 302 9026786",
    href: "tel:+923029026786",
    hint: "Call or WhatsApp",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "suleman-the-stammer",
    href: "https://github.com/suleman-the-stammer",
    hint: "See my code & projects",
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
            Let&apos;s work together
          </span>
          <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
            Let&apos;s build something{" "}
            <span className="text-primary">great together</span>.
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl">
            Have a project in mind, or want to see what I can build for you?
            I&apos;m <span className="font-medium text-foreground">Suleman</span>, a
            full-stack software engineer available for freelance work and
            collaborations. Reach out through any channel below — I reply fast.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
            className="group rounded-2xl border border-border bg-card p-6 card-soft hover-lift flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <channel.icon className="size-5" />
              </div>
              <ArrowUpRightIcon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {channel.label}
              </p>
              <p className="text-lg font-semibold text-foreground break-words group-hover:text-primary transition-colors">
                {channel.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{channel.hint}</p>
            </div>
          </a>
        ))}
      </section>

      {/* Portfolio note */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold text-foreground">
            About this project
          </h2>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4 text-muted-foreground leading-relaxed">
          <p>
            This Funroad marketplace is a portfolio project I built end to end —
            a real multi-tenant e-commerce platform with seller storefronts,
            product management, reviews, carts, and checkout. It&apos;s here to
            demonstrate how I design and ship modern, production-grade software.
          </p>
          <p>
            If you like what you see, imagine what I could build for{" "}
            <span className="font-medium text-foreground">your</span> business.
            Let&apos;s talk.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild size="lg" className="font-semibold">
              <a href="mailto:sulemanthestammer@gmail.com">
                Email me
                <ArrowRightIcon className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link href="/about">Learn more about me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
