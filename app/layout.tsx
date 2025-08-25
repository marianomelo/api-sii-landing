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
  title: "API SII Chile - Registros de Compra y Venta | Tecnológica Chile",
  description: "API SII más completa para consultar registros de compra y venta del Servicio de Impuestos Internos de Chile. Integración rápida, segura y confiable para sistemas tributarios. Desarrollado por Tecnológica Chile.",
  keywords: [
    "API SII",
    "API SII Chile", 
    "registros compra venta SII",
    "registros compra SII",
    "registros venta SII",
    "Servicio Impuestos Internos API",
    "datos tributarios Chile",
    "API tributaria Chile",
    "consulta SII API",
    "integración SII",
    "Tecnológica Chile"
  ],
  authors: [{ name: "Tecnológica Chile" }],
  creator: "Tecnológica Chile",
  publisher: "Tecnológica Chile",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "API SII Chile - Registros de Compra y Venta | Tecnológica Chile",
    description: "API SII más completa para consultar registros de compra y venta del Servicio de Impuestos Internos de Chile.",
    url: "https://api-sii.tecnologicachile.cl",
    siteName: "API SII Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "API SII Chile - Registros de Compra y Venta",
    description: "La API más completa para consultar registros del SII Chile. Integración rápida y segura.",
    creator: "@tecnologicachile",
  },
  alternates: {
    canonical: "https://api-sii.tecnologicachile.cl",
  },
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
