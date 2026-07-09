import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flame, Leaf, ShieldCheck, Truck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Orbit Shawarma's story, mission, hygiene standards and commitment to fresh ingredients.",
};

const pillars = [
  { icon: ShieldCheck, title: "Hygiene Standards", description: "Our kitchen is inspected regularly, staff wear gloves and hairnets, and all surfaces are sanitized between orders." },
  { icon: Leaf, title: "Fresh Ingredients", description: "Vegetables, meats and sauces are sourced daily from trusted local suppliers - nothing sits in storage for long." },
  { icon: Truck, title: "Fast Delivery", description: "A dedicated rider fleet and optimized routing gets your food to you hot, usually within 30 minutes." },
  { icon: Flame, title: "Made to Order", description: "Every shawarma is rolled and grilled fresh when you order - never pre-made or reheated." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1800&auto=format&fit=crop&q=80"
            alt="Chef preparing shawarma"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        </div>
        <div className="container-px relative mx-auto max-w-4xl py-24 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary-400">Our Story</span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Bringing bold flavor to every orbit of the city
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            Orbit Shawarma started with a simple idea: fast food doesn't have to mean
            compromised quality. What began as a single grill stand has grown into a
            beloved neighborhood favorite, serving thousands of happy customers.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-3xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1000&auto=format&fit=crop&q=80"
              alt="Fresh shawarma preparation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Mission</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Fresh food, fair prices, honest service.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe great shawarma should be accessible to everyone. That means
              never cutting corners on ingredients, treating every customer like family,
              and constantly improving how quickly we can get hot food to your door.
              Every order is a chance to earn your trust again.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-primary/10 p-4">
              <Target className="h-6 w-6 shrink-0 text-primary" />
              <p className="text-sm font-semibold">
                Our goal: become the most trusted fast-casual brand in the city by 2027.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">What We Stand For</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Hygiene, freshness & speed</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-none shadow-md">
                <CardContent className="p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orbit-gradient text-white">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-4xl py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Ready to taste the difference?</h2>
        <p className="mt-3 text-muted-foreground">Order now and see why Orbit Shawarma is worth the orbit.</p>
        <Button asChild size="lg" className="mt-6">
          <Link href="/menu">Order Now</Link>
        </Button>
      </section>
    </div>
  );
}
