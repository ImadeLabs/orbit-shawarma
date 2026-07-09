"use client";

import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { adminOrders, orderStatusColumns } from "@/lib/data/mock-admin-data";
import { formatNaira } from "@/lib/utils";
import type { OrderStatus } from "@/lib/types";

const badgeVariant: Record<OrderStatus, "success" | "warning" | "destructive" | "muted"> = {
  received: "warning",
  preparing: "warning",
  cooking: "warning",
  ready: "warning",
  "rider-assigned": "warning",
  "on-the-way": "warning",
  delivered: "success",
  cancelled: "destructive",
};

export default function AdminOrdersPage() {
  return (
    <div>
      <AdminTopbar title="Orders" />
      <div className="space-y-6 p-4 sm:p-8">
        <div className="grid grid-cols-1 gap-4 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {orderStatusColumns.map((col) => {
            const orders = adminOrders.filter((o) => o.status === col.status);
            return (
              <div key={col.status} className="min-w-[240px]">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold">{col.label}</h3>
                  <Badge variant="muted">{orders.length}</Badge>
                </div>
                <div className="space-y-3">
                  {orders.length === 0 && (
                    <p className="rounded-xl border border-dashed p-4 text-center text-xs text-muted-foreground">
                      No orders
                    </p>
                  )}
                  {orders.map((order) => (
                    <Card key={order.id} className="border-none shadow-md">
                      <CardContent className="p-4">
                        <p className="font-mono text-xs font-bold">{order.orderNumber}</p>
                        <p className="mt-1 text-sm font-semibold">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.phone}</p>
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">{order.items} items</span>
                          <span className="font-bold">{formatNaira(order.total)}</span>
                        </div>
                        <p className="mt-2 text-[11px] text-muted-foreground">{order.createdAt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
