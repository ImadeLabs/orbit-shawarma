import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Flame } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-ink text-white/90">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orbit-gradient text-white">
                <Flame className="h-5 w-5" fill="white" strokeWidth={0} />
              </span>
              <span className="text-lg font-extrabold">Orbit Shawarma</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Modern fast food, made fresh daily. Char-grilled shawarma, juicy burgers and crispy fries delivered fast across the city.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/50">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/account", label: "My Orders" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 transition-colors hover:text-primary-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/50">Categories</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Shawarma", "Burgers", "Fries", "Drinks", "Extras"].map((c) => (
                <li key={c}>
                  <Link href={`/menu?category=${c.toLowerCase()}`} className="text-white/70 transition-colors hover:text-primary-400">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white/50">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                12 Adeola Odeku Street, Victoria Island, Lagos
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                +234 800 000 0000
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" />
                hello@orbitshawarma.com
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-primary-400" />
                Daily: 10:00 AM - 11:00 PM
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Orbit Shawarma. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
