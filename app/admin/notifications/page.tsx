"use client";

import { ShoppingBag, PackageX, MessageSquare } from "lucide-react";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { adminNotifications } from "@/lib/data/mock-admin-data";

const iconMap = {
  order: ShoppingBag,
  stock: PackageX,
  message: MessageSquare,
};

export default function AdminNotificationsPage() {
  return (
    <div>
      <AdminTopbar title="Notifications" />
      <div className="space-y-3 p-4 sm:p-8">
        {adminNotifications.map((n) => {
          const Icon = iconMap[n.type];
          return (
            <Card key={n.id} className={cn("border-none shadow-md", !n.read && "ring-2 ring-primary/20")}>
              <CardContent className="flex items-start gap-4 p-5">
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                    n.type === "order" && "bg-primary/10 text-primary",
                    n.type === "stock" && "bg-amber-100 text-amber-700 dark:bg-amber-900/30",
                    n.type === "message" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">{n.title}</p>
                    {!n.read && <span className="h-2 w-2 rounded-full bg-secondary" />}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{n.description}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{n.time}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
