"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/lib/data/menu-data";
import type { CategorySlug } from "@/lib/types";

interface Props {
  value: CategorySlug | "all";
  onChange: (value: CategorySlug | "all") => void;
}

export function CategoryFilter({ value, onChange }: Props) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as CategorySlug | "all")}>
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        {categories.map((cat) => (
          <TabsTrigger key={cat.slug} value={cat.slug}>
            {cat.emoji} {cat.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
