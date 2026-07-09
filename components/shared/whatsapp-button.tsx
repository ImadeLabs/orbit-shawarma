"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppOrderLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const link = getWhatsAppOrderLink("Hi Orbit Shawarma! I'd like to place an order.");
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-transform hover:scale-110 md:bottom-8 md:right-8 animate-pulse-ring"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </Link>
  );
}
