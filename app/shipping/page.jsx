import Link from "next/link";
import { Mail, MessageCircle, Phone, Truck } from "lucide-react";
import { BRAND, CONTACT, DELIVERY_CHARGES } from "@/lib/brand";

export const metadata = {
  title: "Shipping & Delivery",
  description: `How delivery works at ${BRAND.name}: cash on delivery, ৳${DELIVERY_CHARGES.insideDhaka} inside Dhaka and ৳${DELIVERY_CHARGES.outsideDhaka} outside Dhaka.`,
};

const steps = [
  {
    title: "Choose your bottle and volume",
    text: "Pick a fragrance and, where offered, a 30ml, 50ml or 100ml bottle. Check the notes before you order.",
  },
  {
    title: "Place your order with cash on delivery",
    text: "No advance payment is needed. We confirm your order and prepare it for dispatch.",
  },
  {
    title: "We pack and seal your fragrance",
    text: "Bottles are wrapped and sealed, then packed discreetly so the parcel arrives exactly as it should.",
  },
  {
    title: "Pay the courier when it arrives",
    text: "Inspect the parcel in front of the delivery person, then pay the total including delivery.",
  },
];

export default function ShippingPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <header className="border-b border-line bg-sand-soft">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow font-bengali">ডেলিভারি</p>
          <h1 className="mt-3 font-serif text-4xl text-bordeaux sm:text-5xl">Shipping & delivery</h1>
          <div className="gold-rule mt-6 w-32" />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-smoke">
            We deliver across Bangladesh with cash on delivery. Here is exactly how
            it works, so there are no surprises at your door.
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-sm border border-line bg-paper p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-rose uppercase">Inside Dhaka</p>
            <p className="mt-3 font-serif text-4xl text-bordeaux">৳{DELIVERY_CHARGES.insideDhaka}</p>
            <p className="mt-2 text-sm text-smoke">Delivery charge per order</p>
          </div>
          <div className="rounded-sm border border-line bg-paper p-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-rose uppercase">Outside Dhaka</p>
            <p className="mt-3 font-serif text-4xl text-bordeaux">৳{DELIVERY_CHARGES.outsideDhaka}</p>
            <p className="mt-2 text-sm text-smoke">Delivery charge per order</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="eyebrow">The journey</p>
          <h2 className="mt-3 font-serif text-3xl text-bordeaux">From our table to yours</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne font-serif text-lg text-bordeaux">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-bordeaux">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-smoke">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-8 rounded-sm border border-line bg-sand-soft p-6 sm:p-8 md:grid-cols-2">
          <div>
            <Truck size={22} className="text-rose" />
            <h2 className="mt-4 font-serif text-2xl text-bordeaux">Questions about your parcel?</h2>
            <p className="mt-3 text-sm leading-relaxed text-smoke">
              Share your order number and we will tell you where it is. For a change
              of address, message us as soon as you can — we will do our best to
              redirect it before dispatch.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MessageCircle size={17} className="text-rose" />
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-bordeaux no-underline hover:text-rose">WhatsApp {CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={17} className="text-rose" />
              <a href={CONTACT.phoneHref} className="text-bordeaux no-underline hover:text-rose">Call {CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={17} className="text-rose" />
              <a href={`mailto:${CONTACT.email}`} className="text-bordeaux no-underline hover:text-rose">{CONTACT.email}</a>
            </li>
            <li className="pt-2 text-xs text-smoke">
              See also: <Link href="/return-policy" className="text-bordeaux underline decoration-champagne underline-offset-4">returns</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
