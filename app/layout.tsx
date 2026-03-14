import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
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
      <body>
        {children}
      </body>
    </html>
  );
}