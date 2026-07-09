"use client";

import {
  Wallet,
  CalendarDays,
  CalendarRange,
  ShoppingCart,
  Clock,
  TrendingUp,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { AdminTopbar } from "@/components/admin/admin-topbar";
import { StatCard } from "@/components/admin/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  salesOverview,
  revenueChart,
  bestSellingProducts,
  adminOrders,
} from "@/lib/data/mock-admin-data";
import { formatNaira } from "@/lib/utils";

export default function AdminOverviewPage() {
  return (
    <div>
      <AdminTopbar title="Overview" />
      <div className="space-y-6 p-4 sm:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard icon={CalendarDays} label="Daily Sales" value={formatNaira(salesOverview.daily)} trend="+8.2%" />
          <StatCard icon={CalendarRange} label="Weekly Sales" value={formatNaira(salesOverview.weekly)} trend="+12.4%" />
          <StatCard icon={Wallet} label="Monthly Sales" value={formatNaira(salesOverview.monthly)} trend="+5.1%" />
          <StatCard icon={ShoppingCart} label="Total Orders" value={salesOverview.totalOrders.toLocaleString()} trend="+3.6%" />
          <StatCard icon={Clock} label="Pending Orders" value={String(salesOverview.pendingOrders)} trend="-2" trendUp={false} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="border-none shadow-md lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4 text-primary" />
                Revenue This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueChart}>
                  <defs>
                    <linearGradient id="revenueColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff6b1a" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#ff6b1a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₦${v / 1000}k`} />
                  <Tooltip formatter={(v: number) => formatNaira(v)} />
                  <Area type="monotone" dataKey="revenue" stroke="#ff6b1a" strokeWidth={3} fill="url(#revenueColor)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-base">Best Sellers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bestSellingProducts.map((p, i) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.sold} sold</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold">{formatNaira(p.revenue)}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-base">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase text-muted-foreground">
                  <th className="pb-3 font-semibold">Order</th>
                  <th className="pb-3 font-semibold">Customer</th>
                  <th className="pb-3 font-semibold">Items</th>
                  <th className="pb-3 font-semibold">Total</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {adminOrders.slice(0, 5).map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-3 font-mono text-xs font-semibold">{order.orderNumber}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.items}</td>
                    <td className="py-3 font-semibold">{formatNaira(order.total)}</td>
                    <td className="py-3">
                      <Badge variant="outline" className="capitalize">
                        {order.status.replace(/-/g, " ")}
                      </Badge>
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
