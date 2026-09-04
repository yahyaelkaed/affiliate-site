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
    price: "$9.99",
    originalPrice: "$15.99",
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
  },
  {
    id: "fullstar-pro-vegetable-chopper",
    slug: "fullstar-pro-original-vegetable-chopper-spiralizer",
    category: "Kitchen Finds",
    rank: "Best Seller Pick",
    badgeText: "All-in-1 Prep Tool",
    score: "4.8",
    ratingText: "4.8 out of 5",
    reviewCount: "115,400",
    price: "$49.99",
    originalPrice: "$59.99",
    name: "Fullstar Pro Original Vegetable Chopper & Spiralizer",
    fullName: "Fullstar Pro Original Vegetable Chopper & Spiralizer, All-in-1 Kitchen Tool - Heavy Duty Onion Chopper, Dicer & Slicer Container",
    capacity: "1.2 L Catch Tray Container",
    material: "Rust-Resistant 420 Stainless Steel Blades & BPA-Free ABS",
    functionality: "Dicing, Chopping, Julianne Slicing & Spiralizing",
    compatibility: "Onions, Tomatoes, Peppers, Carrots, Potatoes, Zucchini",
    cleaning: "Includes Cleaning Brush & Top-Rack Dishwasher Safe",
    affiliateUrl: "https://amzn.to/4dn0Ylk",
    summary: "The ultimate meal prep time saver. Chop, dice, slice, and spiralize onions, vegetables, and fruits in seconds with ultra-sharp 420 stainless steel interchangeable blades and a large 1.2L catch tray container.",
    descriptionParagraphs: [
      "Simplify your kitchen prep work with the Fullstar Pro Original Vegetable Chopper & Spiralizer. Featuring 4 interchangeable heavy-duty stainless steel blades, this all-in-1 tool effortlessly transforms whole onions, peppers, cucumbers, and potatoes into perfectly uniform diced cubes or spiral ribbons in one swift motion.",
      "The integrated 1.2-liter catch tray keeps your kitchen counter clean and organized while catching chopped ingredients directly below the blades. A soft-grip TPU handle offers comfortable leverage, while the non-skid rubber base prevents slipping during vigorous chopping.",
      "Cleaning up is quick and safe thanks to the included cleaning scrapers and finger guard safety holder. All components are constructed from 100% BPA-free food-grade plastic and are top-rack dishwasher safe."
    ],
    highlights: [
      "4 Interchangeable Blades: Small dice, large dice, julienne spiralizer, and ribbon blade",
      "Razor-Sharp 420 Stainless Steel: Heavy duty blades slice through tough vegetables effortlessly",
      "Catch Container Tray (1.2L): Holds prepped vegetables directly to minimize countertop mess",
      "Safety Finger Guard & Scraper: Comes with protective hand guard and specialized cleaning tools",
      "Compact Space Saver: All blades store neatly inside the container when not in use"
    ],
    specs: [
      { label: "Capacity", value: "1.2 Liters" },
      { label: "Blade Material", value: "420 German Grade Stainless Steel" },
      { label: "Body Material", value: "Heavy-Duty BPA-Free ABS Plastic" },
      { label: "Included Attachments", value: "4 Blades, Finger Guard, Cleaning Brush, Scraper" },
      { label: "Care Instructions", value: "Top-rack dishwasher safe" }
    ],
    images: [
      "/images/products/fullstar-vegetable-chopper/WhatsApp Image 2026-09-04 at 11.00.05 PM.jpeg",
      "/images/products/fullstar-vegetable-chopper/Gemini_Generated_Image_ju1rkoju1rkoju1r.jfif",
      "/images/products/fullstar-vegetable-chopper/Gemini_Generated_Image_nylsxenylsxenyls.jfif",
      "/images/products/fullstar-vegetable-chopper/Gemini_Generated_Image_unkv1eunkv1eunkv.jfif"
    ],
    isTop: false
  },
  {
    id: "jar-opener-weak-hands",
    slug: "jar-opener-for-weak-hands-seniors-arthritic",
    category: "Kitchen Finds",
    rank: "Essential Accessibility Pick",
    badgeText: "Effortless Lid Opener",
    score: "4.9",
    ratingText: "4.9 out of 5",
    reviewCount: "18,920",
    price: "$9.99",
    originalPrice: "$14.99",
    name: "Under Cabinet Jar Opener for Weak Hands & Seniors",
    fullName: "Jar Opener for Weak Hands & Seniors with Arthritis - Easy Under Cabinet Jar & Bottle Opener Tool for Any Lid Size",
    capacity: "Fits Any Size Lid (0.5 to 4 inches)",
    material: "Heavy-Duty Dual Steel Teeth & Durable ABS Frame",
    functionality: "V-Shape Leverage Grip for One-Handed Opening",
    compatibility: "Mason Jars, Pickle Jars, Water Bottles, Medicine Caps, Vacuum Seals",
    cleaning: "Maintenance Free & Concealed Installation",
    affiliateUrl: "https://amzn.to/4xzAyox",
    summary: "Say goodbye to stubborn jar lids! Mounts discreetly under cabinets to easily pop open vacuum seals and twisted caps of any size with a simple turn, perfect for seniors, weak hands, or arthritic wrists.",
    descriptionParagraphs: [
      "Opening stubborn pickle jars, vacuum-sealed sauces, and tight bottle caps is completely effortless with this under-cabinet jar opener. Designed specifically for individuals with weak hands, seniors, and anyone living with arthritis or wrist strain.",
      "Featuring a unique V-shaped design lined with heavy-duty dual steel grip teeth, it locks securely onto any lid size from small nail polish caps to large 4-inch pickle jars. Simply insert the lid, press lightly, and twist using basic lever force.",
      "Installs in minutes out of sight beneath your kitchen cabinet or shelf with the included peel-and-stick adhesive tape and sturdy mounting screws, preserving your clean countertop space."
    ],
    highlights: [
      "Effortless Leverage: Opens vacuum sealed jars and stubborn caps with a simple twist",
      "Designed for Weak Hands: Ideal for seniors, arthritis sufferers, and children",
      "Universal Size Fit: V-groove grips lid diameters from 0.5 inches up to 4 inches",
      "Under-Cabinet Mounting: Keeps countertops clutter-free while staying immediately accessible",
      "Heavy-Duty Steel Teeth: Durable grip teeth bite into metal and plastic lids without slipping"
    ],
    specs: [
      { label: "Grip Range", value: "0.5 in - 4.0 in (Universal fit)" },
      { label: "Teeth Material", value: "Hardened Carbon Steel" },
      { label: "Installation Method", value: "Under-cabinet mounting (Screws & Adhesive included)" },
      { label: "Weight", value: "5.3 oz" },
      { label: "Color Options", value: "Clean Modern White" }
    ],
    images: [
      "/images/products/jar-opener-weak-hands/Gemini_Generated_Image_t9uwhvt9uwhvt9uw.jfif",
      "/images/products/jar-opener-weak-hands/Gemini_Generated_Image_2udojb2udojb2udo.jfif",
      "/images/products/jar-opener-weak-hands/Gemini_Generated_Image_nqaw0jnqaw0jnqaw.jfif"
    ],
    isTop: false
  }
];
