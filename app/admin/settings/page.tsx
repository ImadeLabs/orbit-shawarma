"use client";

import { AdminTopbar } from "@/components/admin/admin-topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingsPage() {
  return (
    <div>
      <AdminTopbar title="Settings" />
      <div className="grid grid-cols-1 gap-6 p-4 sm:p-8 lg:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-base">Delivery Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="deliveryFee">Delivery Fee (₦)</Label>
              <Input id="deliveryFee" type="number" defaultValue={1500} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="freeDeliveryThreshold">Free Delivery Threshold (₦)</Label>
              <Input id="freeDeliveryThreshold" type="number" defaultValue={15000} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="deliveryRadius">Delivery Radius (km)</Label>
              <Input id="deliveryRadius" type="number" defaultValue={12} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-base">Restaurant Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="openTime">Opening Time</Label>
                <Input id="openTime" type="time" defaultValue="10:00" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="closeTime">Closing Time</Label>
                <Input id="closeTime" type="time" defaultValue="22:30" />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border p-3.5">
              <span className="text-sm font-semibold">Accept orders outside hours</span>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-base">Tax Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="taxRate">VAT Rate (%)</Label>
              <Input id="taxRate" type="number" defaultValue={7.5} />
            </div>
            <div className="flex items-center justify-between rounded-xl border p-3.5">
              <span className="text-sm font-semibold">Include tax in displayed prices</span>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle className="text-base">Payment Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border p-3.5">
              <span className="text-sm font-semibold">Pay on Delivery</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-xl border p-3.5">
              <span className="text-sm font-semibold">Bank Transfer</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-xl border p-3.5">
              <span className="text-sm font-semibold">Online Payment (Paystack)</span>
              <Switch />
            </div>
            <Separator />
            <div className="space-y-1.5">
              <Label htmlFor="paystackKey">Paystack Public Key</Label>
              <Input id="paystackKey" placeholder="pk_test_xxxxxxxxxxxxx" />
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <Button size="lg">Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
