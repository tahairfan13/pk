import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tecaudex | Odoo ERP, Mobile & AI Development in Pakistan",
  description:
    "Pakistan's trusted technology partner for Odoo ERP implementation, mobile app development, and AI/ML solutions. Serving businesses across Pakistan with enterprise-grade software.",
  keywords:
    "Odoo ERP Pakistan, mobile app development Pakistan, AI development Pakistan, ERP implementation Lahore, software company Pakistan",
  openGraph: {
    title: "Tecaudex | Odoo ERP, Mobile & AI Development in Pakistan",
    description:
      "Pakistan's trusted technology partner for Odoo ERP, mobile apps, and AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1550889736555285');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1550889736555285&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
