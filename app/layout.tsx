import type { Metadata } from "next";
import "./globals.css";
// Geist tetep disimpen kalau suatu saat butuh, tapi kita utamakan Satoshi
import { Geist } from "next/font/google"; 
import { cn } from "@/lib/utils";
// IMPORT PROVIDER BAHASA KITA DI SINI
import { LanguageProvider } from "@/app/context/LanguageContext"; 

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Agung Soeltani - Network Engineer, IoT Developer & Cloud Enthusiast",
  description: "Official portfolio of Agung Soeltani - Network Engineer, IoT Developer, and Linux Administrator. Explore my projects and connect with me.",
  keywords: ["Agung Soeltani", "Network Engineer", "IoT", "DevOps", "Cloud", "Linux", "Portfolio"],
  authors: [{ name: "Agung Soeltani" }],
  alternates: { canonical: "https://agungsoeltani.web.id/" },
  openGraph: {
    title: "Agung Soeltani Portfolio",
    description: "Explore the work and skills of Agung Soeltani in networking, IoT, and DevOps.",
    url: "https://agungsoeltani.web.id",
    type: "website",
    images: [{ url: "https://agungsoeltani.web.id/images/preview.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agung Soeltani Portfolio",
    description: "Explore the work and skills of Agung Soeltani in networking, IoT, and DevOps.",
    images: ["https://agungsoeltani.web.id/images/preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Tambahin scroll-smooth biar animasi pindah menu di Header halus banget
    // Tambahin 'dark' biar Shadcn langsung ngebaca ini tema gelap
    <html lang="en" className={cn("dark scroll-smooth font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Agung Soeltani",
              "url": "https://agungsoeltani.web.id",
              "sameAs": [
                "https://www.linkedin.com/in/agungsoeltani",
                "https://github.com/agungsoeltani",
                "https://www.instagram.com/agungxsoeltani"
              ],
              "jobTitle": "Network Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Beji Technologies"
              }
            }),
          }}
        />
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" 
          rel="stylesheet" 
        />
        <link id="favicon" rel="icon" href="/images/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" async></script>
      </head>
      
      {/* Warna selection diubah ke ungu/violet biar match sama tema SaaS lo */}
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-violet-500/30 selection:text-violet-500">
        
        {/* BUNGKUS SELURUH WEB PAKAI LANGUAGE PROVIDER */}
        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}