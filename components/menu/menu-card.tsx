"use client";

import Image from "next/image";
import { Star, Plus, Flame, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cart-store";
import { formatNaira } from "@/lib/utils";
import type { MenuItem } from "@/lib/types";

export function MenuCard({ item }: { item: MenuItem }) {
  const addItem = useCartStore((s) => s.addItem);

  function handleAdd() {
    addItem(item, 1);
    toast.success(`${item.name} added to cart`, {
      description: formatNaira(item.price),
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="group h-full overflow-hidden border-none shadow-md transition-all hover:-translate-y-1.5 hover:shadow-2xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {item.isBestSeller && (
              <Badge className="bg-secondary text-white shadow">
                <Flame className="mr-1 h-3 w-3" /> Best Seller
              </Badge>
            )}
            {item.isNew && (
              <Badge className="bg-green-600 text-white shadow">
                <Sparkles className="mr-1 h-3 w-3" /> New
              </Badge>
            )}
          </div>
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
            <Star className="h-3 w-3 fill-primary text-primary" />
            {item.rating.toFixed(1)}
            <span className="font-normal text-white/70">({item.reviewCount})</span>
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-bold leading-tight">{item.name}</h3>
          <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted-foreground">
            {item.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-extrabold text-primary">
              {formatNaira(item.price)}
            </span>
            <Button size="sm" onClick={handleAdd} className="gap-1.5">
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
