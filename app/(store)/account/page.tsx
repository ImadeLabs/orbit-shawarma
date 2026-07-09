"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Package, Star, Plus, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { orderHistory, savedAddresses } from "@/lib/data/account-data";
import { formatNaira } from "@/lib/utils";
import type { OrderStatus } from "@/lib/types";

const statusVariant: Record<OrderStatus, "success" | "warning" | "destructive" | "muted"> = {
  received: "warning",
  preparing: "warning",
  cooking: "warning",
  ready: "warning",
  "rider-assigned": "warning",
  "on-the-way": "warning",
  delivered: "success",
  cancelled: "destructive",
};

export default function AccountPage() {
  return (
    <div className="container-px mx-auto max-w-4xl py-12">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-orbit-gradient text-lg text-white">IM</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-extrabold">My Account</h1>
          <p className="text-sm text-muted-foreground">Welcome back, Imade</p>
        </div>
      </div>

      <Tabs defaultValue="orders" className="mt-8">
        <TabsList>
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="addresses">Saved Addresses</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <div className="space-y-4">
            {orderHistory.map((order) => (
              <Card key={order.id} className="shadow-sm">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Package className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-sm font-bold">{order.orderNumber}</p>
                        <p className="text-xs text-muted-foreground">{order.createdAt}</p>
                      </div>
                    </div>
                    <Badge variant={statusVariant[order.status]} className="capitalize">
                      {order.status.replace(/-/g, " ")}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                    {order.items.map((line) => (
                      <p key={line.id}>
                        {line.quantity} x {line.menuItem.name}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t pt-4">
                    <span className="text-sm font-bold">Total: {formatNaira(order.total)}</span>
                    <Button variant="outline" size="sm" className="gap-1">
                      Reorder <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="addresses">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {savedAddresses.map((addr) => (
              <Card key={addr.id} className="shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 font-bold">
                      <MapPin className="h-4 w-4 text-primary" />
                      {addr.label}
                    </div>
                    {addr.isDefault && <Badge variant="secondary">Default</Badge>}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{addr.address}</p>
                  {addr.landmark && <p className="text-xs text-muted-foreground">{addr.landmark}</p>}
                </CardContent>
              </Card>
            ))}
            <button className="flex min-h-[120px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Plus className="h-5 w-5" />
              <span className="text-sm font-semibold">Add New Address</span>
            </button>
          </div>
        </TabsContent>

        <TabsContent value="favorites">
          <div className="flex flex-col items-center rounded-2xl border border-dashed py-16 text-center">
            <Star className="h-8 w-8 text-muted-foreground" />
            <p className="mt-3 font-semibold">No favorites yet</p>
            <p className="mt-1 text-sm text-muted-foreground">Tap the heart on any menu item to save it here.</p>
            <Button asChild className="mt-5">
              <Link href="/menu">Browse Menu</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
