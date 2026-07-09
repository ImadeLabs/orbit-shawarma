"use client";

import Image from "next/image";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { adminProducts } from "@/lib/data/mock-admin-data";
import { formatNaira } from "@/lib/utils";

export default function AdminProductsPage() {
  return (
    <div>
      <AdminTopbar title="Products" />
      <div className="space-y-6 p-4 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{adminProducts.length} products</p>
          <Button className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        <Card className="border-none shadow-md">
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase text-muted-foreground">
                  <th className="p-4 font-semibold">Product</th>
                  <th className="p-4 font-semibold">Category</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Stock</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminProducts.map((product) => (
                  <tr key={product.id} className="border-b last:border-0">
                    <td className="flex items-center gap-3 p-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="48px" />
                      </div>
                      <span className="font-semibold">{product.name}</span>
                    </td>
                    <td className="p-4 text-muted-foreground">{product.category}</td>
                    <td className="p-4 font-semibold">{formatNaira(product.price)}</td>
                    <td className="p-4">
                      <span
                        className={
                          product.stock === 0
                            ? "font-bold text-destructive"
                            : product.stock <= product.lowStockThreshold
                            ? "font-bold text-amber-600"
                            : ""
                        }
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge variant={product.status === "active" ? "success" : "muted"} className="capitalize">
                        {product.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
