import Link from "next/link";
import { BRAND } from "@/lib/brand";

export default function AnnouncementBar() {
  return (
    <div className="bg-bordeaux text-ivory">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2.5 text-center text-[11px] tracking-[0.16em] uppercase">
        <span className="font-bengali normal-case tracking-normal text-champagne">
          {BRAND.taglineBn}
        </span>
        <span className="hidden text-champagne/60 sm:inline">·</span>
        <span>{BRAND.tagline}</span>
        <span className="hidden text-champagne/60 sm:inline">·</span>
        <Link
          href="/shipping"
          className="text-champagne underline decoration-champagne/40 underline-offset-4 transition-colors hover:text-white"
        >
          Free delivery inside Dhaka on orders ৳2000+
        </Link>
      </div>
    </div>
  );
}
