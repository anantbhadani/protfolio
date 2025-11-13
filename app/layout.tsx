import { Outfit, Ovo } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"], 
  weight: ["400"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anantbhadani.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anant Bhadani - Frontend Web Developer Portfolio",
    template: "%s | Anant Bhadani",
  },
  description: "Frontend web developer portfolio showcasing projects and skills. Motivated MCA student with expertise in React.js, Next.js, JavaScript, and full-stack technologies.",
  keywords: [
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "portfolio",
    "Anant Bhadani",
    "web design",
    "UI/UX design",
  ],
  authors: [{ name: "Anant Bhadani", url: "https://github.com/anantbhadani" }],
  creator: "Anant Bhadani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anant Bhadani Portfolio",
    title: "Anant Bhadani - Frontend Web Developer Portfolio",
    description: "Frontend web developer portfolio showcasing projects and skills. Motivated MCA student with expertise in React.js, Next.js, JavaScript, and full-stack technologies.",
    images: [
      {
        url: `${siteUrl}/profile-img.png`,
        width: 1200,
        height: 630,
        alt: "Anant Bhadani - Frontend Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anant Bhadani - Frontend Web Developer Portfolio",
    description: "Frontend web developer portfolio showcasing projects and skills.",
    images: [`${siteUrl}/profile-img.png`],
    creator: "@anant_bhadni19",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anant Bhadani",
              jobTitle: "Frontend Web Developer",
              url: siteUrl,
              email: "anant2001.bhadani@gmail.com",
              sameAs: [
                "https://github.com/anantbhadani",
                "https://www.linkedin.com/in/anantbhadani/",
                "https://www.instagram.com/anant_bhadni19",
              ],
              description: "Frontend web developer with expertise in React.js, Next.js, JavaScript, and full-stack technologies.",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Masters Of Computer Application",
              },
              knowsAbout: [
                "Web Development",
                "Frontend Development",
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
        overflow-x-hidden bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
