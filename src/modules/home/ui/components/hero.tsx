import Link from "next/link";
import { SparklesIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  { value: "2,000+", label: "Digital products" },
  { value: "1,580", label: "Independent creators" },
  { value: "98%", label: "Happy customers" },
];

export const Hero = () => {
  return (
    <section className="px-4 lg:px-12 pt-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card card-soft animate-fade-in-up">
        {/* soft accent wash */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_88%_-10%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_60%),radial-gradient(620px_320px_at_-6%_110%,color-mix(in_oklab,oklch(0.6_0.13_200)_14%,transparent),transparent_55%)]" />

        <div className="relative px-6 py-12 lg:px-14 lg:py-16 flex flex-col gap-6 max-w-3xl">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent text-accent-foreground px-3.5 py-1.5 text-sm font-medium ring-1 ring-primary/15">
            <SparklesIcon className="size-4" />
            New drops every day
          </span>

          <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
            Discover digital products from{" "}
            <span className="text-primary">independent creators</span>.
          </h1>

          <p className="text-base lg:text-lg text-muted-foreground max-w-xl">
            Courses, templates, presets, ebooks and more — curated for you.
            Buy what you love, or open your own store in minutes.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/sign-up">
                Start selling
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link href="#products">Browse products</Link>
            </Button>
          </div>

          <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-2xl lg:text-3xl font-semibold text-foreground">{stat.value}</dt>
                <dd className="text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
