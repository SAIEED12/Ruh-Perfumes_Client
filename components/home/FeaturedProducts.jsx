import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import BrandArt from "@/components/BrandArt";

export default function FeaturedProducts({ products = [] }) {
  const items = Array.isArray(products) ? [...products] : [];
  items.sort((a, b) => String(b?._id ?? "").localeCompare(String(a?._id ?? "")));
  const visible = items.slice(0, 8);

  return (
    <section aria-label="Signature collection" className="w-full border-y border-line bg-sand-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The signature collection</p>
            <h2 className="mt-3 font-serif text-3xl text-bordeaux sm:text-4xl md:text-5xl">
              Worn by those who remember
            </h2>
            <div className="gold-rule mt-5 w-24" />
          </div>
          <Link href="/products" className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-bordeaux uppercase no-underline hover:text-rose">
            Shop all fragrances
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {visible.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {visible.map((product) => (
              <ProductCard key={product._id} product={product} showCategory />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid items-center gap-6 rounded-sm border border-line bg-paper md:grid-cols-[1fr_1.2fr]">
            <div className="relative h-56 overflow-hidden md:h-full md:min-h-72">
              <BrandArt variant="floral" className="absolute inset-0 h-full w-full" alt="" />
            </div>
            <div className="p-6 sm:p-10">
              <p className="font-bengali text-sm text-rose">সংগ্রহ আসছে</p>
              <h3 className="mt-2 font-serif text-2xl text-bordeaux sm:text-3xl">
                Our first bottles are being composed.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-smoke">
                The signature collection will appear here as soon as fragrances are
                added. Until then, explore the scent families or speak with us about
                a custom blend.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/categories" className="btn-gold">Explore scent families</Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-bordeaux px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-bordeaux uppercase no-underline transition-colors hover:bg-bordeaux hover:text-ivory">
                  Ask about a blend
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
