import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://orbitshawarma.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orbit Shawarma | Fresh Shawarma, Burgers & Fries Delivered Fast",
    template: "%s | Orbit Shawarma",
  },
  description:
    "Orbit Shawarma serves char-grilled shawarma, juicy burgers, crispy fries and ice-cold drinks. Order online for fast delivery or pickup.",
  keywords: [
    "shawarma",
    "fast food",
    "burgers",
    "food delivery",
    "Orbit Shawarma",
    "order shawarma online",
  ],
  authors: [{ name: "Orbit Shawarma" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Orbit Shawarma | Fresh Shawarma, Burgers & Fries Delivered Fast",
    description:
      "Char-grilled shawarma, juicy burgers, crispy fries and ice-cold drinks. Order online for fast delivery or pickup.",
    siteName: "Orbit Shawarma",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Orbit Shawarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit Shawarma | Fresh Shawarma, Burgers & Fries Delivered Fast",
    description:
      "Char-grilled shawarma, juicy burgers, crispy fries and ice-cold drinks. Order online for fast delivery or pickup.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff7ed" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0f0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
