"use client";

import { Plus, Pencil, Trash2, Tags } from "lucide-react";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { adminCategories } from "@/lib/data/mock-admin-data";

export default function AdminCategoriesPage() {
  return (
    <div>
      <AdminTopbar title="Categories" />
      <div className="space-y-6 p-4 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{adminCategories.length} categories</p>
          <Button className="gap-1.5">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {adminCategories.map((cat) => (
            <Card key={cat.id} className="border-none shadow-md">
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Tags className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">{cat.name}</p>
                    <p className="text-xs text-muted-foreground">{cat.products} products</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
