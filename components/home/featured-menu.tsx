import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/menu/menu-card";
import { getPopularItems } from "@/lib/data/menu-data";

export function FeaturedMenu() {
  const items = getPopularItems().slice(0, 8);

  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Featured Menu</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Fan favorites, fresh off the grill
          </h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/menu" className="gap-1.5">
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
