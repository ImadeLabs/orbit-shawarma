"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Truck, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Flame,
    title: "Char-Grilled Fresh",
    description: "Every order is grilled fresh to perfection, never microwaved or pre-made.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source quality produce and meats daily for maximum freshness and flavor.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Hot food at your door in 30 minutes or less, powered by our dedicated riders.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description: "Our kitchen follows strict hygiene standards so every bite is safe and clean.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Why Orbit Shawarma</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Made fresh. Delivered fast. Loved by everyone.
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-xl"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orbit-gradient text-white shadow-lg shadow-primary/25 transition-transform group-hover:scale-110">
              <reason.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{reason.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
