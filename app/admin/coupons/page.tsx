"use client";

import { Plus, Percent, Banknote, Pencil, Trash2 } from "lucide-react";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { adminCoupons } from "@/lib/data/mock-admin-data";

export default function AdminCouponsPage() {
  return (
    <div>
      <AdminTopbar title="Coupons" />
      <div className="space-y-6 p-4 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{adminCoupons.length} coupons</p>
          <Button className="gap-1.5">
            <Plus className="h-4 w-4" />
            Create Coupon
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {adminCoupons.map((coupon) => (
            <Card key={coupon.id} className="border-none shadow-md">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {coupon.type === "percentage" ? <Percent className="h-5 w-5" /> : <Banknote className="h-5 w-5" />}
                  </span>
                  <Switch checked={coupon.active} />
                </div>
                <p className="mt-4 font-mono text-lg font-extrabold">{coupon.code}</p>
                <p className="text-sm text-muted-foreground">
                  {coupon.type === "percentage" ? `${coupon.value}% off` : `₦${coupon.value.toLocaleString()} off`}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{coupon.uses} uses</span>
                  <span>Expires {coupon.expiresAt}</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <Badge variant={coupon.active ? "success" : "muted"}>
                    {coupon.active ? "Active" : "Expired"}
                  </Badge>
                  <div className="flex gap-1.5">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
