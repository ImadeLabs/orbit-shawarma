import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { PromoBanner } from "@/components/home/promo-banner";
import { FeaturedMenu } from "@/components/home/featured-menu";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Reviews } from "@/components/home/reviews";
import { DeliveryInfo } from "@/components/home/delivery-info";

export const metadata: Metadata = {
  title: "Orbit Shawarma | Fresh Shawarma, Burgers & Fries Delivered Fast",
  description:
    "Order char-grilled shawarma, juicy burgers, crispy fries and ice-cold drinks online. Fast delivery or pickup across Lagos.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromoBanner />
      <FeaturedMenu />
      <WhyChooseUs />
      <Reviews />
      <DeliveryInfo />
    </>
  );
}
