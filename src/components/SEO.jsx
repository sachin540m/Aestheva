import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  path = '',
  ogImage = 'https://drketakisaestheva.in/logo.png',
  ogType = 'website',
  schema = null
}) {
  const defaultTitle = "Best Aesthetic Clinic in Sanpada, Navi Mumbai | Dr. Ketaki Aestheva";
  const defaultDesc = "Dr. Ketaki's Aesthéva is Navi Mumbai's leading clinic offering premium skin rejuvenation, hair restoration (PRP/GFC), MNRF, HIFU, and medical-grade lasers in Sanpada. Book your clinical skin or hair consultation today.";
  const siteUrl = 'https://drketakisaestheva.in';
  
  const seoTitle = title || defaultTitle;
  const seoDesc = description || defaultDesc;
  // Ensure path starts with /
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = path === '/' ? siteUrl : `${siteUrl}${formattedPath}`;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": seoTitle,
    "description": seoDesc,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://drketakisaestheva.in/#website",
      "name": "Dr. Ketaki's Aesthéva Clinic",
      "url": "https://drketakisaestheva.in"
    }
  };

  let compiledSchemas = [webpageSchema];
  if (schema) {
    if (Array.isArray(schema)) {
      compiledSchemas = [...compiledSchemas, ...schema];
    } else {
      compiledSchemas.push(schema);
    }
  }

  return (
    <Helmet>
      {/* Title Tag */}
      <title>{seoTitle}</title>

      {/* Meta tags */}
      <meta name="description" content={seoDesc} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dr. Ketaki's Aesthéva Clinic" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={canonicalUrl} />

      {/* Structured Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(compiledSchemas)}
      </script>
    </Helmet>
  );
}
