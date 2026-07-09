import type { Metadata } from "next";
import { Suspense } from "react";
import { MenuClient } from "./menu-client";
import { MenuCardSkeleton } from "@/components/menu/menu-card-skeleton";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse our full menu of shawarma, burgers, fries, drinks and extras. Order online for fast delivery or pickup.",
};

export default function MenuPage() {
  return (
    <div className="container-px mx-auto max-w-7xl py-12">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Menu</span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Everything on the menu, made fresh
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          From char-grilled shawarma to loaded fries - browse our full menu and order in seconds.
        </p>
      </div>

      <div className="mt-10">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <MenuCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <MenuClient />
        </Suspense>
      </div>
    </div>
  );
}
