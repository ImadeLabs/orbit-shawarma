"use client";

import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { adminCustomers } from "@/lib/data/mock-admin-data";
import { formatNaira } from "@/lib/utils";

export default function AdminCustomersPage() {
  return (
    <div>
      <AdminTopbar title="Customers" />
      <div className="space-y-6 p-4 sm:p-8">
        <p className="text-sm text-muted-foreground">{adminCustomers.length} customers</p>
        <Card className="border-none shadow-md">
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase text-muted-foreground">
                  <th className="p-4 font-semibold">Customer</th>
                  <th className="p-4 font-semibold">Contact</th>
                  <th className="p-4 font-semibold">Orders</th>
                  <th className="p-4 font-semibold">Total Spent</th>
                  <th className="p-4 font-semibold">Joined</th>
                </tr>
              </thead>
              <tbody>
                {adminCustomers.map((c) => (
                  <tr key={c.id} className="border-b last:border-0">
                    <td className="flex items-center gap-3 p-4">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-orbit-gradient text-xs text-white">
                          {c.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-semibold">{c.name}</span>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      <div>{c.email}</div>
                      <div className="text-xs">{c.phone}</div>
                    </td>
                    <td className="p-4">{c.orders}</td>
                    <td className="p-4 font-semibold">{formatNaira(c.totalSpent)}</td>
                    <td className="p-4 text-muted-foreground">{c.joined}</td>
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
