import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: { default: "Alice Arimoro — Technical Product Manager & Full-Stack Developer", template: "%s — Alice Arimoro" },
  description: "Technical Product Manager and Full-Stack Developer. Building digital systems that bridge code and commercial reality. Founder of Inkio, co-founder of Jobapay.",
  keywords: ["Alice Arimoro","Product Manager","Full-Stack Developer","Jobapay","Inkio","Operations","Automation","MERN Stack","Next.js"],
  authors: [{ name: "Alice Arimoro", url: "https://www.linkedin.com/in/alice-arimoro/" }],
  openGraph: {
    title: "Alice Arimoro — Technical Product Manager & Full-Stack Developer",
    description: "Building digital systems that bridge code and commercial reality.",
    siteName: "Alice Arimoro", locale: "en_GB", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Alice Arimoro", description: "Technical Product Manager & Full-Stack Developer" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
