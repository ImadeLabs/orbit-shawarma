import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orbit Shawarma",
    short_name: "Orbit Shawarma",
    description: "Fresh shawarma, burgers and fries delivered fast.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff7ed",
    theme_color: "#ff6b1a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
