export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tecnológica Chile",
    "legalName": "Tecnológica Chile SpA",
    "url": "https://tecnologicachile.cl",
    "logo": "https://api-sii.tecnologicachile.cl/globe.svg",
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
    // Nota: Removido aggregateRating para cumplir con políticas de datos verificables
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
        "name": "¿Por qué elegir API SII Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API SII Chile ofrece rendimiento optimizado, alta disponibilidad, escalabilidad flexible y es la única API SII con opción de código fuente disponible. Incluye soporte técnico especializado 24/7."
        }
      },
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
          "text": "La integración con API SII Chile es muy sencilla. Ofrecemos documentación completa, ejemplos de código y SDKs oficiales. Nuestro equipo te ayuda a configurar el acceso en menos de 24 horas."
        }
      },
      {
        "@type": "Question",
        "name": "¿API SII Chile tiene límites de volumen?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "API SII Chile ofrece escalabilidad flexible que se adapta al volumen de consultas que necesite tu empresa. Puede manejar desde pocas consultas hasta grandes volúmenes sin degradación de rendimiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de soporte ofrece API SII Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API SII Chile ofrece soporte técnico especializado 24/7 para implementación, configuración y resolución de consultas técnicas. Incluye documentación exhaustiva y asistencia personalizada."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta API SII Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API SII Chile ofrece dos modelos: suscripción administrada con precio según volumen, y licencia de código fuente completo. Contactanos para una cotización personalizada según tus necesidades específicas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué ventajas tiene API SII Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API SII Chile ofrece rendimiento optimizado, alta disponibilidad, escalabilidad flexible, soporte técnico especializado 24/7 y la opción única de código fuente disponible para máximo control y personalización."
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
    </>
  );
}
