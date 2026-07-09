"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { CategoryFilter } from "@/components/menu/category-filter";
import { MenuSearchBar } from "@/components/menu/search-bar";
import { MenuCard } from "@/components/menu/menu-card";
import { MenuCardSkeleton } from "@/components/menu/menu-card-skeleton";
import { menuItems } from "@/lib/data/menu-data";
import type { CategorySlug } from "@/lib/types";

export function MenuClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = (searchParams.get("category") as CategorySlug) || "all";
  const initialQuery = searchParams.get("q") || "";

  const [category, setCategory] = React.useState<CategorySlug | "all">(initialCategory);
  const [query, setQuery] = React.useState(initialQuery);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (query) params.set("q", query);
    router.replace(`/menu${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  }, [category, query, router]);

  const filtered = React.useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter value={category} onChange={setCategory} />
        <MenuSearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
        <SlidersHorizontal className="h-3.5 w-3.5" />
        {filtered.length} item{filtered.length === 1 ? "" : "s"} found
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <MenuCardSkeleton key={i} />)
        ) : filtered.length > 0 ? (
          <AnimatePresence>
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed py-20 text-center"
          >
            <p className="text-lg font-bold">No items found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
