import { MapPin, Clock, Wallet, Bike } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const info = [
  { icon: MapPin, title: "Delivery Zones", description: "We deliver across Victoria Island, Lekki, Ikoyi & Ajah." },
  { icon: Clock, title: "Delivery Time", description: "Orders arrive hot in 25-40 minutes on average." },
  { icon: Wallet, title: "Delivery Fee", description: "Flat ₦1,500 fee, FREE on orders above ₦15,000." },
  { icon: Bike, title: "Live Tracking", description: "Track your rider in real-time from kitchen to door." },
];

export function DeliveryInfo() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Delivery Information</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hot food, fast hands, right on time.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Our riders are trained to get your order to you quickly while keeping it hot and fresh. Track everything from checkout to your doorstep.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {info.map((item) => (
              <Card key={item.title} className="border-none bg-card shadow-md">
                <CardContent className="p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
