export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "API SII Chile",
    "description": "API SII más completa para consultar registros de compra y venta del Servicio de Impuestos Internos de Chile. Integración rápida, segura y confiable para sistemas tributarios.",
    "url": "https://api-sii.tecnologicachile.cl",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "description": "Acceso a API SII para registros de compra y venta",
      "priceCurrency": "CLP"
    },
    "provider": {
      "@type": "Organization",
      "name": "Tecnológica Chile",
      "url": "https://tecnologicachile.cl",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "800-914-659",
        "email": "contacto@tecnologicachile.cl",
        "contactType": "Technical Support",
        "areaServed": "CL",
        "availableLanguage": "Spanish"
      }
    },
    "sameAs": [
      "https://api-sii.tecnologicachile.cl"
    ],
    "keywords": [
      "API SII",
      "registros compra venta SII",
      "Servicio Impuestos Internos",
      "datos tributarios Chile",
      "API tributaria"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}