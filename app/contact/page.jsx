import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/brand";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${BRAND.name} by email, phone or WhatsApp about perfumes, orders, delivery or returns.`,
};

const tips = [
  "The name of the fragrance you are asking about",
  "Your order number and name, if you have already ordered",
  "A photo, if a bottle arrived damaged or leaking",
  "Whether you are shopping for yourself or for a gift",
];

const channelClass =
  "flex items-start gap-4 rounded-sm border border-line bg-paper p-5 no-underline transition-colors hover:border-champagne";

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <header className="border-b border-line bg-sand-soft">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow font-bengali">যোগাযোগ</p>
          <h1 className="mt-3 font-serif text-4xl text-bordeaux sm:text-5xl">Talk to the house</h1>
          <div className="gold-rule mt-6 w-32" />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-smoke">
            Choosing a scent is personal. Tell us what you like, what you are
            looking for, or what went wrong with an order — a real person will reply.
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className={channelClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-rose">
              <MessageCircle size={20} />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.18em] text-bordeaux uppercase">WhatsApp</span>
              <span className="mt-1 block text-sm text-smoke">{CONTACT.phoneDisplay}</span>
              <span className="mt-2 block text-xs text-rose">Fastest reply, usually within a day</span>
            </span>
          </a>

          <a href={`mailto:${CONTACT.email}`} className={channelClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-rose">
              <Mail size={20} />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.18em] text-bordeaux uppercase">Email</span>
              <span className="mt-1 block text-sm text-smoke">{CONTACT.email}</span>
              <span className="mt-2 block text-xs text-rose">Good for order details and photos</span>
            </span>
          </a>

          <a href={CONTACT.phoneHref} className={channelClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-rose">
              <Phone size={20} />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.18em] text-bordeaux uppercase">Phone</span>
              <span className="mt-1 block text-sm text-smoke">{CONTACT.phoneDisplay}</span>
              <span className="mt-2 block text-xs text-rose">Saturday to Thursday</span>
            </span>
          </a>

          <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className={channelClass}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-rose">
              <MapPin size={20} />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.18em] text-bordeaux uppercase">Address</span>
              <span className="mt-1 block text-sm text-smoke">{CONTACT.addressLines.join(", ")}</span>
              <span className="mt-2 block text-xs text-rose">Online orders, packed and dispatched from here</span>
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-8 rounded-sm border border-line bg-sand-soft p-6 sm:p-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">Help us help you</p>
            <h2 className="mt-3 font-serif text-2xl text-bordeaux">What to include in your message</h2>
            <ul className="mt-5 space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm text-smoke">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Common questions</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/shipping" className="text-bordeaux underline decoration-champagne underline-offset-4 no-underline hover:text-rose">
                  Delivery charges and timing
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-bordeaux no-underline hover:text-rose">
                  Returns and damaged bottles
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-bordeaux no-underline hover:text-rose">
                  Choosing a fragrance
                </Link>
              </li>
            </ul>
            <p className="font-bengali mt-8 text-sm text-rose">আমরা শুনতে ভালোবাসি।</p>
          </div>
        </div>
      </div>
    </main>
  );
}
