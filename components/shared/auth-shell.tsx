import Link from "next/link";
import { Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-16">
      <div className="absolute inset-0 -z-10 bg-orbit-radial" />
      <div className="container-px mx-auto w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orbit-gradient text-white shadow-lg shadow-primary/30">
              <Flame className="h-5 w-5" fill="white" strokeWidth={0} />
            </span>
            <span className="text-xl font-extrabold">
              Orbit <span className="text-gradient">Shawarma</span>
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-extrabold">{title}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <Card className="mt-8 shadow-xl">
          <CardContent className="p-6 sm:p-8">{children}</CardContent>
        </Card>

        {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
      </div>
    </div>
  );
}
