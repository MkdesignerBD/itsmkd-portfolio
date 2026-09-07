import { useEffect } from "react";

const SITE_URL = "https://www.itsmkd.com";
const DEFAULT_IMAGE = "https://www.itsmkd.com/logo.png";
const SITE_NAME = "MKD Official";

function updateMeta(attr, key, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  schema,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title}`
    : "MKD — Product Visuals Designer & Amazon E-Commerce Specialist";

  const fullCanonical = canonical
    ? (canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`)
    : SITE_URL;

  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // 2. Primary Meta Tags
    updateMeta("name", "description", description);
    if (keywords) updateMeta("name", "keywords", keywords);
    updateMeta("name", "author", "Mofijul Islam (MKD)");
    updateMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // 3. Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullCanonical);

    // 4. Open Graph / Facebook
    updateMeta("property", "og:title", fullTitle);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", fullCanonical);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:site_name", SITE_NAME);
    updateMeta("property", "og:image", fullOgImage);

    // 5. Twitter Card
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", fullTitle);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", fullOgImage);
    updateMeta("name", "twitter:url", fullCanonical);

    // 6. JSON-LD Structured Data (Schema.org)
    let script = document.getElementById("page-jsonld-schema");
    if (schema) {
      if (!script) {
        script = document.createElement("script");
        script.id = "page-jsonld-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      script.remove();
    }
  }, [fullTitle, description, keywords, fullCanonical, fullOgImage, ogType, schema, noindex]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:url" content={fullCanonical} />
    </>
  );
}
