import type { CategorySlug, MenuItem } from "@/lib/types";

export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  description: string;
  emoji: string;
}

export const categories: CategoryInfo[] = [
  { slug: "shawarma", name: "Shawarma", description: "Hand-rolled, char-grilled, wrapped fresh", emoji: "\u{1F32F}" },
  { slug: "burgers", name: "Burgers", description: "Juicy patties, toasted buns", emoji: "\u{1F354}" },
  { slug: "fries", name: "Fries", description: "Golden, crispy, loaded", emoji: "\u{1F35F}" },
  { slug: "drinks", name: "Drinks", description: "Ice cold refreshments", emoji: "\u{1F964}" },
  { slug: "extras", name: "Extras", description: "Add-ons to complete your meal", emoji: "\u{2795}" },
];

const img = {
  shawarma1: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&auto=format&fit=crop&q=80",
  shawarma2: "https://images.unsplash.com/photo-1633436375153-d7045cb93e38?w=800&auto=format&fit=crop&q=80",
  shawarma3: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&auto=format&fit=crop&q=80",
  shawarma4: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&auto=format&fit=crop&q=80",
  shawarma5: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&auto=format&fit=crop&q=80",
  burger1: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
  burger2: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
  burger3: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop&q=80",
  fries1: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=80",
  fries2: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=80",
  friesLoaded: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=80",
  cola: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=80",
  sodaCans: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop&q=80",
  juice: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&auto=format&fit=crop&q=80",
  water: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop&q=80",
  cheese: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&auto=format&fit=crop&q=80",
  sausage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
  chickenRaw: "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?w=800&auto=format&fit=crop&q=80",
  beefRaw: "https://images.unsplash.com/photo-1607116667981-27b1f6a4c8c6?w=800&auto=format&fit=crop&q=80",
  sauce: "https://images.unsplash.com/photo-1613564834361-9436948817d1?w=800&auto=format&fit=crop&q=80",
};

export const menuItems: MenuItem[] = [
  // Shawarma
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    description: "Char-grilled marinated chicken, garlic sauce, pickles & fresh veggies in a warm wrap.",
    price: 3500,
    category: "shawarma",
    image: img.shawarma1,
    rating: 4.8,
    reviewCount: 214,
    isBestSeller: true,
    isPopular: true,
    calories: 520,
  },
  {
    id: "beef-shawarma",
    name: "Beef Shawarma",
    description: "Slow-roasted spiced beef shavings with tahini sauce, onions and crunchy slaw.",
    price: 3800,
    category: "shawarma",
    image: img.shawarma2,
    rating: 4.7,
    reviewCount: 178,
    isPopular: true,
    calories: 560,
  },
  {
    id: "double-chicken",
    name: "Double Chicken Shawarma",
    description: "Extra portion of grilled chicken for the truly hungry, loaded with sauces and veggies.",
    price: 4800,
    category: "shawarma",
    image: img.shawarma3,
    rating: 4.9,
    reviewCount: 96,
    isBestSeller: true,
    calories: 780,
  },
  {
    id: "double-beef",
    name: "Double Beef Shawarma",
    description: "Double the spiced beef, double the flavor, wrapped in soft flatbread.",
    price: 5200,
    category: "shawarma",
    image: img.shawarma4,
    rating: 4.8,
    reviewCount: 84,
    calories: 820,
  },
  {
    id: "mixed-shawarma",
    name: "Mixed Shawarma",
    description: "The best of both worlds - chicken and beef combined with our signature sauces.",
    price: 4500,
    category: "shawarma",
    image: img.shawarma5,
    rating: 4.9,
    reviewCount: 152,
    isNew: true,
    isPopular: true,
    calories: 680,
  },
  // Burgers
  {
    id: "classic-burger",
    name: "Classic Burger",
    description: "Grilled beef patty, lettuce, tomato, onion and house sauce in a toasted bun.",
    price: 3200,
    category: "burgers",
    image: img.burger1,
    rating: 4.6,
    reviewCount: 140,
    calories: 620,
  },
  {
    id: "cheese-burger",
    name: "Cheese Burger",
    description: "Classic burger topped with melted cheddar cheese and tangy pickles.",
    price: 3600,
    category: "burgers",
    image: img.burger2,
    rating: 4.7,
    reviewCount: 163,
    isPopular: true,
    calories: 690,
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description: "Crispy fried chicken fillet, mayo, lettuce and pickles in a soft bun.",
    price: 3400,
    category: "burgers",
    image: img.burger3,
    rating: 4.7,
    reviewCount: 121,
    calories: 610,
  },
  // Fries
  {
    id: "small-fries",
    name: "Small Fries",
    description: "Crispy golden fries, lightly salted. Perfect side portion.",
    price: 1000,
    category: "fries",
    image: img.fries1,
    rating: 4.5,
    reviewCount: 98,
    calories: 280,
  },
  {
    id: "medium-fries",
    name: "Medium Fries",
    description: "Our signature crispy fries in a shareable medium portion.",
    price: 1500,
    category: "fries",
    image: img.fries1,
    rating: 4.5,
    reviewCount: 110,
    calories: 420,
  },
  {
    id: "large-fries",
    name: "Large Fries",
    description: "Extra large golden fries - great for sharing with friends and family.",
    price: 2000,
    category: "fries",
    image: img.fries2,
    rating: 4.6,
    reviewCount: 87,
    calories: 560,
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Crispy fries topped with melted cheese, grilled chicken bits and our special sauce.",
    price: 3200,
    category: "fries",
    image: img.friesLoaded,
    rating: 4.9,
    reviewCount: 205,
    isBestSeller: true,
    isPopular: true,
    calories: 780,
  },
  // Drinks
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Ice-cold classic Coca-Cola, 50cl bottle.",
    price: 700,
    category: "drinks",
    image: img.cola,
    rating: 4.8,
    reviewCount: 240,
  },
  {
    id: "fanta",
    name: "Fanta",
    description: "Refreshing orange-flavored Fanta, 50cl bottle.",
    price: 700,
    category: "drinks",
    image: img.sodaCans,
    rating: 4.6,
    reviewCount: 132,
  },
  {
    id: "sprite",
    name: "Sprite",
    description: "Crisp lemon-lime Sprite, 50cl bottle.",
    price: 700,
    category: "drinks",
    image: img.sodaCans,
    rating: 4.6,
    reviewCount: 118,
  },
  {
    id: "pepsi",
    name: "Pepsi",
    description: "Ice-cold Pepsi, 50cl bottle.",
    price: 700,
    category: "drinks",
    image: img.cola,
    rating: 4.5,
    reviewCount: 96,
  },
  {
    id: "water",
    name: "Water",
    description: "Chilled bottled water, 75cl.",
    price: 400,
    category: "drinks",
    image: img.water,
    rating: 4.7,
    reviewCount: 74,
  },
  {
    id: "malt",
    name: "Malt",
    description: "Rich, non-alcoholic malt drink, 50cl can.",
    price: 900,
    category: "drinks",
    image: img.sodaCans,
    rating: 4.6,
    reviewCount: 61,
  },
  {
    id: "juice",
    name: "Juice",
    description: "Freshly blended fruit juice, 35cl.",
    price: 1200,
    category: "drinks",
    image: img.juice,
    rating: 4.7,
    reviewCount: 88,
    isNew: true,
  },
  // Extras
  {
    id: "extra-cheese",
    name: "Cheese",
    description: "Add a generous layer of melted cheese to any order.",
    price: 500,
    category: "extras",
    image: img.cheese,
    rating: 4.6,
    reviewCount: 55,
  },
  {
    id: "extra-sausage",
    name: "Sausage",
    description: "Grilled sausage link, add to any shawarma or burger.",
    price: 700,
    category: "extras",
    image: img.sausage,
    rating: 4.5,
    reviewCount: 41,
  },
  {
    id: "extra-chicken",
    name: "Extra Chicken",
    description: "An extra portion of our char-grilled marinated chicken.",
    price: 900,
    category: "extras",
    image: img.chickenRaw,
    rating: 4.7,
    reviewCount: 67,
  },
  {
    id: "extra-beef",
    name: "Extra Beef",
    description: "An extra portion of our slow-roasted spiced beef.",
    price: 1000,
    category: "extras",
    image: img.beefRaw,
    rating: 4.7,
    reviewCount: 52,
  },
  {
    id: "mayonnaise",
    name: "Mayonnaise",
    description: "Creamy house-made mayonnaise, served on the side.",
    price: 300,
    category: "extras",
    image: img.sauce,
    rating: 4.4,
    reviewCount: 33,
  },
  {
    id: "ketchup",
    name: "Ketchup",
    description: "Classic tomato ketchup, served on the side.",
    price: 300,
    category: "extras",
    image: img.sauce,
    rating: 4.3,
    reviewCount: 29,
  },
];

export function getItemsByCategory(category: CategorySlug) {
  return menuItems.filter((item) => item.category === category);
}

export function getPopularItems() {
  return menuItems.filter((item) => item.isPopular);
}

export function getBestSellers() {
  return menuItems.filter((item) => item.isBestSeller);
}

export function searchMenuItems(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return menuItems;
  return menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );
}

export function getItemById(id: string) {
  return menuItems.find((item) => item.id === id);
}
