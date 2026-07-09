import { Truck, PercentCircle, Timer } from "lucide-react";

const items = [
  { icon: Truck, text: "Free delivery on orders over ₦15,000" },
  { icon: PercentCircle, text: "10% off your first order - code WELCOME10" },
  { icon: Timer, text: "Average delivery time: 30 minutes" },
];

export function PromoBanner() {
  return (
    <div className="bg-orbit-gradient text-white">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 py-3 text-sm font-semibold sm:flex-row sm:gap-10">
        {items.map(({ icon: Icon, text }, i) => (
          <span key={i} className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
