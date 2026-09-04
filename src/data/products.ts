export interface Product {
  id: string;
  slug: string;
  category: string;
  rank: string;
  badgeText: string;
  score: string;
  ratingText: string;
  reviewCount: string;
  price: string;
  originalPrice?: string;
  name: string;
  fullName: string;
  capacity: string;
  material: string;
  functionality: string;
  compatibility: string;
  cleaning: string;
  affiliateUrl: string;
  summary: string;
  descriptionParagraphs: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  images: string[];
  isTop?: boolean;
}

export const kitchenProducts: Product[] = [
  {
    id: "trendplain-oil-sprayer",
    slug: "trendplain-16oz-glass-olive-oil-sprayer",
    category: "Kitchen Finds",
    rank: "Must-Have Pick",
    badgeText: "2-in-1 Dual Function",
    score: "4.9",
    ratingText: "4.9 out of 5",
    reviewCount: "2,480",
    price: "$15.99",
    originalPrice: "$22.99",
    name: "TrendPlain 16oz (470ml) Glass Olive Oil Sprayer & Dispenser",
    fullName: "TrendPlain 16oz/470ml Glass Olive Oil Sprayer for Cooking – 2 in 1 Olive Oil Dispenser Bottle for Kitchen Gadgets and Air Fryer Accessories, Salad, BBQ - Black",
    capacity: "16 oz / 470 ml",
    material: "Food-Grade High Borosilicate Glass & BPA-Free PP",
    functionality: "Continuous Fine Mist Spray & Smooth Pouring Spout",
    compatibility: "Air Fryer, BBQ Grilling, Salad Dressing, Skillet Cooking",
    cleaning: "Wide Neck Opening for Easy Refilling & Hand Washing",
    affiliateUrl: "https://amzn.to/468YJy8",
    summary: "The ultimate 2-in-1 kitchen tool for health-conscious cooks. Effortlessly switch between a delicate oil mist spray for air fryers and salad tossing, or a controlled stream pour for pan frying and marinades. Durable glass build keeps oil fresh with zero clogged nozzles.",
    descriptionParagraphs: [
      "Upgrade your cooking experience with the TrendPlain 2-in-1 Glass Olive Oil Sprayer and Dispenser. Designed for modern home cooks, this versatile 16oz bottle lets you switch seamlessly between a ultra-fine oil mist spray and a smooth pouring spout without changing bottles.",
      "Crafted from premium food-grade borosilicate glass, it ensures non-toxic, chemical-free oil storage while maintaining maximum freshness. The clear liquid measurement markings on the side allow you to easily monitor your oil intake and remaining volume.",
      "Whether you are crisping wings in an air fryer, dressing a fresh salad, or searing steaks on the grill, the ergonomic non-drip handle gives you complete control over every drop, reducing oil consumption by up to 75%."
    ],
    highlights: [
      "Dual Mist & Pour Nozzle: Spray a micro-fine oil mist or pour liquid oil accurately",
      "Generous 16oz (470ml) Glass Reservoir: Less refilling, completely BPA-free & odor-neutral",
      "Air Fryer Essential: Cuts oil consumption by up to 75% for crispier, healthier meals",
      "Ergonomic Non-Drip Handle: Prevents messy oil drips on countertops and cooktops",
      "Multiple Stylish Color Options: Available in sleek Black, Deep Navy, and Pastel Pink"
    ],
    specs: [
      { label: "Capacity", value: "16 oz / 470 ml" },
      { label: "Material", value: "High Borosilicate Glass & Food-Grade PP" },
      { label: "Dimensions", value: "7.3 x 4.1 x 3.2 inches" },
      { label: "Nozzle Type", value: "2-in-1 Spray & Stream Spout" },
      { label: "Dishwasher Safe", value: "Hand wash recommended for glass longevity" }
    ],
    images: [
      "/images/products/trendplain-oil-sprayer/colors.jpg",
      "/images/products/trendplain-oil-sprayer/Gemini_Generated_Image_80xrlk80xrlk80xr.jfif",
      "/images/products/trendplain-oil-sprayer/Gemini_Generated_Image_hz5np9hz5np9hz5n.jfif",
      "/images/products/trendplain-oil-sprayer/Gemini_Generated_Image_oxenm8oxenm8oxen.jfif"
    ],
    isTop: true
  }
];
