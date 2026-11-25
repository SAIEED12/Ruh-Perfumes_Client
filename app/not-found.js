import Link from "next/link";
import BrandArt from "@/components/BrandArt";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Page Not Found",
  description: `The page you requested could not be found on ${BRAND.name}.`,
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-ivory px-4 py-16">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-sm border border-champagne/30">
        <BrandArt variant="bakhoor" className="absolute inset-0 h-full w-full opacity-60" alt="" />
        <div className="absolute inset-0 bg-bordeaux/75" />
        <div className="relative px-6 py-14 text-center sm:px-12">
          <p className="eyebrow">404 — Page not found</p>
          <h1 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">
            This trail has gone cold.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-blush/80">
            The link may be broken or the page may have moved. Let us take you back
            to something that lasts a little longer.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-gold">Back to the house</Link>
            <Link href="/products" className="inline-flex items-center justify-center rounded-full border border-champagne/60 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-ivory uppercase no-underline transition-colors hover:bg-champagne hover:text-bordeaux">
              Explore fragrances
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
