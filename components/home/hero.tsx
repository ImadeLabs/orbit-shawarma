"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Truck, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1800&auto=format&fit=crop&q=80"
          alt="Delicious char-grilled shawarma wrap"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-orbit-radial" />
      </div>

      <div className="container-px relative mx-auto flex max-w-7xl flex-col items-start py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
        >
          <Star className="h-4 w-4 fill-primary text-primary" />
          Rated 4.8/5 by 1,200+ happy customers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          Shawarma so good, it's worth the{" "}
          <span className="text-gradient">orbit.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-lg text-base text-white/75 sm:text-lg"
        >
          Char-grilled, hand-rolled and packed with fresh ingredients. Order online
          for lightning-fast delivery or swing by for pickup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/menu">Order Now</Link>
          </Button>
          <Button asChild size="lg" variant="white">
            <Link href="/menu">View Menu</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:flex sm:gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <Truck className="h-5 w-5 text-primary-400" />
            </span>
            <div>
              <p className="text-sm font-bold">Free Delivery</p>
              <p className="text-xs text-white/60">Orders over &#8358;15,000</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <Clock3 className="h-5 w-5 text-primary-400" />
            </span>
            <div>
              <p className="text-sm font-bold">30 Min Delivery</p>
              <p className="text-xs text-white/60">Hot &amp; fresh, always</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
