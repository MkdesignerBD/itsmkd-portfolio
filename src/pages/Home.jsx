import SEO from "../components/SEO";
import Hero from "../components/Hero";
import WelcomeIntro from "../components/WelcomeIntro";

import TestimonialBrandsSection from "../components/TestimonialBrandsSection";
import WorkProcessSection from "../components/WorkProcessSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import WorkEthicScrollSection from "../components/WorkEthicScrollSection";
import BackToTop from "../components/BackToTop";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://itsmkd.com/#website",
      "url": "https://itsmkd.com",
      "name": "MKD Official",
      "description": "Product Visuals Designer & Amazon E-Commerce Specialist",
      "publisher": {
        "@id": "https://itsmkd.com/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://itsmkd.com/#person",
      "name": "Mofijul Islam",
      "alternateName": ["MKD", "mkdesigner"],
      "url": "https://itsmkd.com",
      "image": "https://itsmkd.com/logo.png",
      "jobTitle": "Product Visuals Designer & Amazon E-Commerce Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "MKD Official"
      },
      "sameAs": [
        "https://www.behance.net/itsmkd",
        "https://www.facebook.com/MKdesignerBD",
        "https://www.instagram.com/mkdesignerbd/",
        "https://www.youtube.com/@MkDesigner",
        "https://x.com/Mkdesigner1122"
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <SEO
        title="MKD — Product Visuals Designer & Amazon E-Commerce Specialist"
        description="Official portfolio of Mofijul Islam (MKD). Specializing in high-converting Amazon listing images, A+ Content (EBC), brand storefronts, and 3D product rendering."
        keywords="Amazon Listing Images, A+ Content, EBC Design, Amazon Storefront, 3D Product Rendering, E-commerce Graphic Design, MKD Grid System, Mofijul Islam, MKD"
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      <WelcomeIntro />

      <WorkEthicScrollSection>
        <TestimonialBrandsSection />
      </WorkEthicScrollSection>
      <WorkProcessSection />
      <FaqSection />
      <ContactSection />
      <BackToTop />
    </>
  );
}
