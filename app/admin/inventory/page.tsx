"use client";

import { AlertTriangle } from "lucide-react";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { adminProducts } from "@/lib/data/mock-admin-data";

export default function AdminInventoryPage() {
  const lowStock = adminProducts.filter((p) => p.stock <= p.lowStockThreshold);

  return (
    <div>
      <AdminTopbar title="Inventory" />
      <div className="space-y-6 p-4 sm:p-8">
        {lowStock.length > 0 && (
          <Card className="border-none bg-amber-50 shadow-md dark:bg-amber-950/30">
            <CardContent className="flex items-start gap-3 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <p className="font-bold text-amber-800 dark:text-amber-300">Low Stock Alerts</p>
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  {lowStock.map((p) => p.name).join(", ")} {lowStock.length === 1 ? "is" : "are"} running low.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-none shadow-md">
          <CardContent className="space-y-5 p-6">
            {adminProducts.map((product) => {
              const max = Math.max(product.lowStockThreshold * 4, product.stock);
              const percent = Math.min(100, Math.round((product.stock / max) * 100));
              const isLow = product.stock <= product.lowStockThreshold;
              return (
                <div key={product.id}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{product.name}</span>
                    <span className="flex items-center gap-2">
                      {isLow && <Badge variant={product.stock === 0 ? "destructive" : "warning"}>
                        {product.stock === 0 ? "Out of stock" : "Low stock"}
                      </Badge>}
                      <span className="font-bold">{product.stock} units</span>
                    </span>
                  </div>
                  <Progress value={percent} className="mt-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
