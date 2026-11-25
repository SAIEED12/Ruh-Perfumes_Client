import Link from "next/link";
import { BRAND } from "@/lib/brand";

export const metadata = {
  title: "Terms of Service",
  description: `The terms for shopping with ${BRAND.name}: cash on delivery, sealed bottles and careful packing.`,
};

const sections = [
  {
    title: "Placing an order",
    text: "Your order is confirmed when we receive it and accept it. Please check the fragrance, bottle volume and delivery address before you submit — we begin packing quickly.",
  },
  {
    title: "Pricing and availability",
    text: "Prices are shown in Bangladeshi taka. If an item becomes unavailable after you order, we will contact you before dispatch and offer an alternative or a cancellation.",
  },
  {
    title: "Delivery and payment",
    text: "We deliver by courier across Bangladesh. Payment is cash on delivery: ৳70 inside Dhaka and ৳120 outside Dhaka, added at checkout. Inspect the parcel before paying.",
  },
  {
    title: "Sealed fragrances",
    text: "Fragrances are sealed before dispatch. Opened bottles cannot be returned unless the item is damaged or wrong. See our return policy for details.",
  },
  {
    title: "Gift orders",
    text: "Gift sets are packed to be given as they are. Let us know in the order note if you would like the invoice kept discreet.",
  },
];

export default function TermsPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <header className="border-b border-line bg-sand-soft">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow">Terms</p>
          <h1 className="mt-3 font-serif text-4xl text-bordeaux sm:text-5xl">Terms of service</h1>
          <div className="gold-rule mt-6 w-32" />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-smoke">
            By ordering from {BRAND.name}, you agree to the terms below.
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={section.title} className="flex gap-5">
              <span className="font-serif text-2xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-serif text-xl text-bordeaux">{section.title}</h2>
                <p className="mt-2 text-sm leading-7 text-smoke">{section.text}</p>
              </div>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-smoke">
          For delivery details see <Link href="/shipping" className="text-bordeaux underline decoration-champagne underline-offset-4">shipping & delivery</Link>, and for damaged bottles see our <Link href="/return-policy" className="text-bordeaux underline decoration-champagne underline-offset-4">return policy</Link>.
        </p>
      </div>
    </main>
  );
}
