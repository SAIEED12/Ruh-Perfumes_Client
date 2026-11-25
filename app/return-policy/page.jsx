import Link from "next/link";
import { PackageOpen, ShieldAlert, XCircle } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/brand";

export const metadata = {
  title: "Return Policy",
  description: `How returns work at ${BRAND.name}: inspect sealed bottles at delivery, report damage immediately, and why opened fragrances cannot be returned.`,
};

const steps = [
  {
    title: "Check the parcel at delivery",
    text: "Open the package in front of the delivery person. Look for a broken seal, leakage or a damaged bottle.",
  },
  {
    title: "Tell us straight away",
    text: "If something is wrong, message us the same day with your order number and a photo. Delay makes it harder for us to help.",
  },
  {
    title: "We arrange the replacement",
    text: "For damage or a wrong item, we arrange a replacement or refund once the parcel is returned to us.",
  },
];

const exceptions = [
  {
    title: "Opened bottles",
    text: "For hygiene and safety, a fragrance whose seal has been broken cannot be returned for a change of mind.",
  },
  {
    title: "Changed your mind",
    text: "Please read the notes and choose your volume carefully. We are happy to advise before you order.",
  },
  {
    title: "Gift orders",
    text: "If a gift is not right and the bottle remains sealed, contact us within three days and we will discuss options.",
  },
];

export default function ReturnPolicyPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <header className="border-b border-line bg-sand-soft">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="eyebrow font-bengali">রিটার্ন নীতি</p>
          <h1 className="mt-3 font-serif text-4xl text-bordeaux sm:text-5xl">Return policy</h1>
          <div className="gold-rule mt-6 w-32" />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-smoke">
            Fragrance is personal, and sealed bottles are final sale. If something
            arrives damaged or wrong, we will put it right.
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <section>
            <div className="flex items-center gap-3">
              <PackageOpen size={22} className="text-rose" />
              <h2 className="font-serif text-2xl text-bordeaux">If your order is damaged</h2>
            </div>
            <ol className="mt-6 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-champagne font-serif text-bordeaux">{index + 1}</span>
                  <div>
                    <h3 className="font-serif text-lg text-bordeaux">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-smoke">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <div className="flex items-center gap-3">
              <XCircle size={22} className="text-rose" />
              <h2 className="font-serif text-2xl text-bordeaux">What we cannot accept</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {exceptions.map((item) => (
                <li key={item.title} className="rounded-sm border border-line bg-paper p-5">
                  <h3 className="font-serif text-lg text-bordeaux">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-sm border border-champagne/40 bg-sand-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <ShieldAlert size={22} className="mt-0.5 shrink-0 text-rose" />
            <div>
              <h2 className="font-serif text-xl text-bordeaux">Not sure before you buy?</h2>
              <p className="mt-1 text-sm text-smoke">
                Ask us about the notes and how a fragrance wears. We would rather
                help you choose well than process a return.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-gold shrink-0">Contact us</Link>
        </div>
        <p className="mt-6 text-xs text-smoke">
          Questions about delivery charges? See <Link href="/shipping" className="text-bordeaux underline decoration-champagne underline-offset-4">shipping & delivery</Link> or email {CONTACT.email}.
        </p>
      </div>
    </main>
  );
}
