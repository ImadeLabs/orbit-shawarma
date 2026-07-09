import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getWhatsAppOrderLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Orbit Shawarma via phone, WhatsApp or email. Find our opening hours and location.",
};

const hours = [
  { day: "Monday - Thursday", time: "10:00 AM - 10:30 PM" },
  { day: "Friday - Saturday", time: "10:00 AM - 11:30 PM" },
  { day: "Sunday", time: "12:00 PM - 10:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-16">
      <div className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">Contact Us</span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          We'd love to hear from you
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Questions, feedback or catering requests? Reach us any way that's convenient.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Card className="border-none shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-bold">Call Us</h3>
            <a href="tel:+2348000000000" className="mt-1 text-sm text-muted-foreground hover:text-primary">
              +234 800 000 0000
            </a>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
              <MessageCircle className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-bold">WhatsApp</h3>
            <a
              href={getWhatsAppOrderLink("Hi Orbit Shawarma, I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-sm text-muted-foreground hover:text-primary"
            >
              Chat with us
            </a>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-bold">Email</h3>
            <a href="mailto:hello@orbitshawarma.com" className="mt-1 text-sm text-muted-foreground hover:text-primary">
              hello@orbitshawarma.com
            </a>
          </CardContent>
        </Card>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Card className="shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-lg font-bold">Send Us a Message</h2>
            <form className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more..." rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="overflow-hidden shadow-lg">
            <iframe
              title="Orbit Shawarma location map"
              src="https://www.google.com/maps?q=Victoria%20Island%20Lagos&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <CardContent className="flex items-start gap-3 p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                12 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Opening Hours</h3>
              </div>
              <div className="mt-4 space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
