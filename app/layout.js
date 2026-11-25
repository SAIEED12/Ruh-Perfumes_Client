const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import {
  Cormorant_Garamond,
  Hind_Siliguri,
  Jost,
} from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import FloatingMessenger from "@/components/FloatingMessenger";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { WishlistProvider } from "@/components/wishlist/WishlistProvider";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import MetaPixelPageView from "@/components/MetaPixelPageView";
import { BRAND, SITE_URL } from "@/lib/brand";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const META_PIXEL_SNIPPET = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  '/fp/fbevents.js');
  fbq('init', '${META_PIXEL_ID}');
  fbq('track', 'PageView');
`;

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const hind = Hind_Siliguri({
  variable: "--font-hind",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BRAND.name,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  openGraph: {
    siteName: BRAND.name,
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${hind.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        {META_PIXEL_ID ? (
          <>
            {/* Meta Pixel base code — loads once for all routes; client-side
                navigations re-fire PageView via MetaPixelPageView. */}
            <Script id="meta-pixel" strategy="afterInteractive">
              {META_PIXEL_SNIPPET}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
            <MetaPixelPageView />
          </>
        ) : null}
        <CartProvider>
          <WishlistProvider>
            <AnnouncementBar />
            <Navbar />
            {children}
            <FloatingMessenger />
          </WishlistProvider>
        </CartProvider>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
