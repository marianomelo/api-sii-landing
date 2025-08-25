export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tecnológica Chile",
    "legalName": "Tecnológica Chile SpA",
    "url": "https://tecnologicachile.cl",
    "logo": "https://api-sii.tecnologicachile.cl/logo.png",
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Tecnológica Chile Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Santiago",
      "addressLocality": "Santiago",
      "addressRegion": "RM",
      "addressCountry": "CL"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+56-800-914-659",
        "email": "contacto@tecnologicachile.cl",
        "contactType": "Sales",
        "areaServed": "CL",
        "availableLanguage": ["Spanish"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+56-800-914-659",
        "email": "contacto@tecnologicachile.cl",
        "contactType": "Technical Support",
        "areaServed": "CL",
        "availableLanguage": ["Spanish"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "sameAs": [
      "https://tecnologicachile.cl",
      "https://api-sii.tecnologicachile.cl"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "API SII Chile",
        "description": "Servicio de API para consultar registros de compra y venta del SII Chile"
      }
    }
  };

  // Software Application Schema  
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "API SII Chile",
    "alternateName": "API Registros SII Chile",
    "description": "La API más rápida del mercado para consultar registros de compra y venta del Servicio de Impuestos Internos de Chile. Diseñada para empresas con miles de facturas que requieren procesamiento instantáneo sin limitaciones de volumen.",
    "url": "https://api-sii.tecnologicachile.cl",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "API Software",
    "operatingSystem": "All",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-25",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Modelo Suscripción",
        "description": "API totalmente administrada con soporte completo y escalamiento automático",
        "priceCurrency": "CLP",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      {
        "@type": "Offer", 
        "name": "Licencia Código Fuente",
        "description": "Código fuente completo para deploy en tu infraestructura",
        "priceCurrency": "CLP",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      }
    ],
    "author": {
      "@type": "Organization",
      "name": "Tecnológica Chile",
      "url": "https://tecnologicachile.cl"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Tecnológica Chile",
      "url": "https://tecnologicachile.cl"
    },
    "provider": {
      "@type": "Organization",
      "name": "Tecnológica Chile",
      "url": "https://tecnologicachile.cl"
    },
    "featureList": [
      "Consulta de registros de compra SII",
      "Consulta de registros de venta SII", 
      "API REST con autenticación JWT",
      "Documentación completa",
      "Soporte técnico 24/7",
      "Alta disponibilidad 99.9%",
      "Sin límites de volumen",
      "Encriptación SSL/TLS"
    ],
    "keywords": [
      "API SII Chile",
      "registros compra venta SII",
      "Servicio Impuestos Internos API",
      "datos tributarios Chile",
      "API tributaria empresarial",
      "facturación electrónica Chile",
      "compliance fiscal"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://api-sii.tecnologicachile.cl"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es la API SII Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La API SII Chile es la solución más rápida del mercado para consultar registros de compra y venta del Servicio de Impuestos Internos de Chile. Está diseñada para empresas que procesan grandes volúmenes de documentos fiscales."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Cómo me integro con la API SII?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La integración es muy sencilla. Ofrecemos documentación completa, ejemplos de código y SDKs oficiales. Nuestro equipo te ayuda a configurar el acceso en menos de 24 horas."
        }
      },
      {
        "@type": "Question",
        "name": "¿La API tiene límites de volumen?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "No, nuestra API está diseñada sin límites de volumen. Puede manejar desde pocas consultas hasta miles de registros sin degradación de rendimiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de soporte ofrecen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos soporte técnico especializado 24/7 para implementación, configuración y resolución de consultas técnicas. Incluye documentación exhaustiva y asistencia personalizada."
        }
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "API SII Chile - Consulta de Registros Tributarios",
    "description": "Servicio de API empresarial para consultar registros de compra y venta del SII Chile con máxima velocidad y confiabilidad",
    "provider": {
      "@type": "Organization",
      "name": "Tecnológica Chile"
    },
    "areaServed": "Chile",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Empresas"
    },
    "serviceType": "API Software Service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planes API SII Chile",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Modelo Suscripción",
          "description": "API administrada con soporte completo"
        },
        {
          "@type": "Offer", 
          "name": "Licencia Código Fuente",
          "description": "Código completo para tu infraestructura"
        }
      ]
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, softwareSchema, faqSchema, serviceSchema]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema, null, 2),
        }}
      />
      {/* Additional meta tags */}
      <meta name="geo.region" content="CL" />
      <meta name="geo.placename" content="Chile" />
      <meta name="ICBM" content="-33.4489,-70.6693" />
      <meta name="DC.title" content="API SII Chile - La Más Rápida del Mercado" />
      <meta name="DC.creator" content="Tecnológica Chile" />
      <meta name="DC.subject" content="API, SII, Chile, Tributario, Empresarial" />
      <meta name="DC.description" content="API empresarial para registros SII Chile" />
    </>
  );
}