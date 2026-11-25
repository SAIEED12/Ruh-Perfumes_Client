import Hero from "@/components/Hero";
import ScentFamilies from "@/components/home/ScentFamilies";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HouseOfRuh from "@/components/home/HouseOfRuh";
import CraftStrip from "@/components/home/CraftStrip";
import GiftingCTA from "@/components/home/GiftingCTA";

const SERVER_URL = process.env.SERVER_URL;

async function getProducts() {
  if (!SERVER_URL) return [];
  try {
    const res = await fetch(`${SERVER_URL}/products`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Hero />
      <ScentFamilies />
      <FeaturedProducts products={products} />
      <HouseOfRuh />
      <CraftStrip />
      <GiftingCTA />
    </div>
  );
}
