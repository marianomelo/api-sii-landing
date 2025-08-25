import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "API SII Chile: La Más Rápida para Registros de Compra y Venta | Tecnológica Chile",
    template: "%s | API SII Chile"
  },
  description: "🚀 API SII Chile más rápida del mercado. Consulta registros compra/venta SII sin límites. Integración 24h, soporte 24/7. La mejor API SII para empresas. ¡Solicita acceso GRATIS!",
  keywords: [
    // Palabras clave principales
    "API SII",
    "API SII Chile",
    "API SII más rápida", 
    "mejor API SII Chile",
    "API del SII Chile",
    "SII API Chile",
    "registros compra venta SII",
    "consulta SII API",
    "datos SII Chile",
    "API SII empresarial",
    
    // Long tail keywords específicos
    "API registros compra SII Chile",
    "API registros venta SII Chile", 
    "consultar registros SII API",
    "integración SII Chile API",
    "API tributaria Chile empresarial",
    "contratar API SII Chile",
    "precio API SII empresas",
    "API SII más rápida 2025",
    "mejor API SII empresas Chile",
    "API SII facturación electrónica",
    
    // Keywords técnicos
    "API REST SII",
    "JSON API SII Chile",
    "webhooks SII",
    "autenticación JWT SII",
    "SSL TLS SII API",
    
    // Keywords de negocio
    "facturación electrónica Chile",
    "documentos tributarios SII",
    "compliance fiscal Chile",
    "automatización SII",
    "ERP integración SII",
    
    // Empresa
    "Tecnológica Chile",
    "API empresarial Chile",
    "soporte técnico 24/7"
  ],
  authors: [{ name: "Tecnológica Chile", url: "https://tecnologicachile.cl" }],
  creator: "Tecnológica Chile",
  publisher: "Tecnológica Chile",
  category: "Technology",
  classification: "API, Software, Fintech, Compliance",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "API SII Chile - La Más Rápida del Mercado para Registros Tributarios",
    description: "🚀 La API más rápida y potente para consultar registros de compra y venta del SII Chile. Diseñada para empresas que procesan miles de facturas con máxima eficiencia, seguridad bancaria y disponibilidad 24/7.",
    url: "https://api-sii.tecnologicachile.cl",
    siteName: "API SII Chile | Tecnológica Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "API SII Chile - La Más Rápida del Mercado",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@tecnologicachile",
    creator: "@tecnologicachile",
    title: "API SII Chile - La Más Rápida del Mercado",
    description: "🚀 API empresarial para consultar registros del SII Chile. Integración rápida, segura y sin límites de volumen. Soporte 24/7.",
    images: ["/twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://api-sii.tecnologicachile.cl",
  },
  metadataBase: new URL("https://api-sii.tecnologicachile.cl"),
  verification: {
    google: "google-site-verification-code-here",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#3B82F6",
    "msapplication-TileColor": "#3B82F6",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
