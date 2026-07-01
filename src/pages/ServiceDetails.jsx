import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


import CourseQuickLinks from "../seo/CourseQuickLinks";

import {
  bridalServices,
  bridalFaqs,
} from "../constants/BridalServicesData";

import {
  engagementServices,
  engagementFaqs,
} from "../constants/EngagementServicesData";

import {
  haldiMehandiServices,
  haldiMehandiFaqs,
} from "../constants/HaldiMehandiServicesData";

import {
  partyServices,
  partyFaqs,
} from "../constants/PartyServicesData";

import {
  receptionServices,
  receptionFaqs,
} from "../constants/ReceptionServicesData";

import {
  photoshootServices,
  photoshootFaqs,
} from "../constants/PhotoshootServicesData";

import {
  standardPreBridalServices,
  standardPreBridalFaqs,
} from "../constants/standardPreBridalServices";

import {
  premiumPreBridalServices,
  premiumPreBridalFaqs,
} from "../constants/premiumPreBridalServices";

import {
  ultraPremiumPreBridalServices,
  ultraPremiumPreBridalFaqs,
} from "../constants/ultraPremiumPreBridalServices";

const SERVICES_CONFIG = {
  "bridal-makeup-in-gaya": {
    servicesData: bridalServices,
    faqs: bridalFaqs,
    pageTitle: "Best Bridal Makeup in Gaya",
    shortDescription:
      "Luxury bridal makeup services in Gaya with HD, Ultra HD & Airbrush bridal makeup for weddings, receptions & special occasions.",
    seoKeywords:
      "best bridal makeup in gaya, bridal makeup artist in gaya, HD bridal makeup gaya, airbrush bridal makeup gaya",
  },

  "engagement-makeup-in-gaya": {
    servicesData: engagementServices,
    faqs: engagementFaqs,
    pageTitle: "Best Engagement Makeup in Gaya",
    shortDescription:
      "Professional engagement makeup services in Gaya with flawless HD finish, glam looks & long-lasting beauty.",
    seoKeywords:
      "best engagement makeup in gaya, engagement makeup artist gaya, HD engagement makeup",
  },

  "haldi-mehandi-makeup-in-gaya": {
    servicesData: haldiMehandiServices,
    faqs: haldiMehandiFaqs,
    pageTitle: "Haldi & Mehandi Makeup in Gaya",
    shortDescription:
      "Elegant haldi and mehandi makeup services with glowing skin finish, floral styling & waterproof makeup.",
    seoKeywords:
      "best haldi makeup in gaya, best mehandi makeup in gaya, haldi makeup artist gaya, mehendi makeup services",
  },

  "party-makeup-in-gaya": {
    servicesData: partyServices,
    faqs: partyFaqs,
    pageTitle: "Party Makeup in Gaya",
    shortDescription:
      "Professional party makeup services for weddings, cocktail parties, sangeet & special events.",
    seoKeywords:
      "best party makeup in gaya, party makeup artist gaya, glam party makeup",
  },

  "reception-makeup-in-gaya": {
    servicesData: receptionServices,
    faqs: receptionFaqs,
    pageTitle: "Reception Makeup in Gaya",
    shortDescription:
      "Luxury reception makeup services with flawless HD finish, elegant glam look & long-lasting beauty.",
    seoKeywords:
      "best reception makeup in gaya, reception makeup artist gaya, HD reception makeup",
  },

  "photoshoot-makeup-in-gaya": {
    servicesData: photoshootServices,
    faqs: photoshootFaqs,
    pageTitle: "Photoshoot Makeup in Gaya",
    shortDescription:
      "Professional photoshoot and pre-wedding makeup services with camera-ready HD finish & flawless glam look.",
    seoKeywords:
      "best photoshoot makeup in gaya, pre wedding makeup gaya, HD photoshoot makeup",
  },

  "standard-pre-bridal-in-gaya": {
  servicesData: standardPreBridalServices,
  faqs: standardPreBridalFaqs,
  pageTitle: "Standard Pre Bridal Package in Gaya",
  shortDescription:
    "Affordable pre bridal package in Gaya with O3+ Bridal Glow Facial, waxing, hair spa and complete bridal grooming.",
  seoKeywords:
    "standard pre bridal package in gaya, bridal facial in gaya, pre bridal services gaya",
},

"premium-pre-bridal-in-gaya": {
  servicesData: premiumPreBridalServices,
  faqs: premiumPreBridalFaqs,
  pageTitle: "Premium Pre Bridal Package in Gaya",
  shortDescription:
    "Premium pre bridal package with Diamond Facial, waxing, manicure, pedicure and complete beauty care.",
  seoKeywords:
    "premium pre bridal package in gaya, diamond facial package gaya, bridal beauty package gaya",
},

"ultra-premium-pre-bridal-in-gaya": {
  servicesData: ultraPremiumPreBridalServices,
  faqs: ultraPremiumPreBridalFaqs,
  pageTitle: "Ultra Premium Pre Bridal Package in Gaya",
  shortDescription:
    "Luxury ultra premium pre bridal package with Diamond Facial, body polishing, luxury manicure pedicure and hair spa with 🎁 Complimentary Bridal Skin Consultation & Personalized Skin Care Guidance.",
  seoKeywords:
    "ultra premium pre bridal package in gaya, luxury pre bridal package gaya, bridal body polishing in gaya",
},
};

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dascytq6n/image/upload/q_auto,f_auto,w_1200/v1779622644/og-image_oi4xnf.webp";

function ServiceDetails() {
  const { slug } = useParams();

  // Price Unlock States
const [priceUnlocked, setPriceUnlocked] = useState(false);
const [showPriceForm, setShowPriceForm] = useState(false);

const [name, setName] = useState("");
const [mobile, setMobile] = useState("");

const [loading, setLoading] = useState(false);


// Check if price already unlocked
useEffect(() => {
  const access = localStorage.getItem("priceAccess");

  if (access === "true") {
    setPriceUnlocked(true);
  }
}, []);

  const servicePage = useMemo(
    () => SERVICES_CONFIG[slug],
    [slug]
  );

  if (!servicePage) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#fffdf9] px-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#111827]">
            Service Not Found
          </h1>

          <p className="mt-4 text-[#5b5b5b]">
            The requested service page does not exist.
          </p>
        </div>
      </section>
    );
  }

  const {
    servicesData,
    faqs,
    pageTitle,
    shortDescription,
    seoKeywords,
  } = servicePage;

  const firstImage =
    servicesData?.[0]?.image || FALLBACK_IMAGE;

    const handlePriceSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = {
    name,
    mobile,
    inquiryType: "Price Unlock",
    page: slug,
  };

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbxYjPDrXjNv4d1BbS8SQiWTbAKeC1piAl5O-UcqBwmcHlNlVJFM-ufxbm2oB5n9NUmq1w/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );


    localStorage.setItem("priceAccess", "true");

    setPriceUnlocked(true);

    setShowPriceForm(false);


    setName("");
    setMobile("");

    alert("Price Unlocked Successfully");

  }

  catch (error) {

    alert("Something went wrong");

  }


  setLoading(false);

};

  const canonicalUrl = `https://www.sonamroyacademy.com/services/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    name: pageTitle,

    serviceType: pageTitle,

    description: shortDescription,

    image: servicesData.map(
     (item) => item.image
    ),

    areaServed: {
      "@type": "City",
      name: "Gaya",
    },

    provider: {
      "@type": "BeautySalon",

      name: "Sonam Roy Makeup Academy",

      url: "https://www.sonamroyacademy.com",
      sameAs: [
       "https://www.instagram.com/muasonam_roy",
       "https://www.facebook.com/muasonamroy",
       "https://www.youtube.com/@SonamRoyMakeupAcademy"
      ],

      telephone: "+919199992695",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Gaya",
        addressRegion: "Bihar",
        addressCountry: "IN",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: (faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* SEO */}

      <Helmet prioritizeSeoTags>

        <html lang="en-IN" />

        <title>
          {pageTitle} | Sonam Roy Makeup Academy
        </title>

        <meta
          name="description"
          content={shortDescription}
        />

        <meta
          name="keywords"
          content={seoKeywords}
        />

        <meta
          name="robots"
          content="index, follow"
        />

        {/* Canonical */}

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* Performance */}

        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
        />

        {/* Open Graph */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Sonam Roy Makeup Academy"
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={shortDescription}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:image"
          content={firstImage}
        />

        <meta
          property="og:image:alt"
          content={pageTitle}
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={shortDescription}
        />

        <meta
          name="twitter:image"
          content={firstImage}
        />

        <meta
          name="twitter:creator"
          content="@muasonam_roy"
        />

        {/* Schema */}

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

      </Helmet>

      <main className="overflow-hidden bg-gradient-to-b from-[#fffdf9] via-white to-[#fffaf3]">

        {/* HERO */}

        <section className="px-4 pt-5 pb-6 text-center md:px-5 md:pt-12 md:pb-16">

          <div className="mx-auto max-w-4xl">

            <h1 className="text-2xl font-bold leading-tight text-[#b48a45] sm:text-4xl lg:text-5xl">
              {pageTitle}
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-[#5b5b5b] sm:text-base">
              {shortDescription}
            </p>

            <p className="sr-only">
              {seoKeywords}
            </p>

          </div>

        </section>

        {/* SERVICES */}

        <section className="mx-auto max-w-7xl px-5 pb-20">

          <div className="space-y-8 md:space-y-16">

            {servicesData.map((service, index) => (

              <article
                key={service.title}
                className={`grid items-stretch gap-6 md:gap-10 lg:grid-cols-2 ${

                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* IMAGE */}

                <div className="h-full overflow-hidden rounded-xl border border-[#b48a45]/20 bg-white shadow-lg">

                  <div className="h-[320px] sm:h-[420px] lg:h-full bg-[#f8f0e6]">
                     <img
                     src={service.image}
                     alt={service.imageAlt}
                     className="h-full w-full object-cover object-top"
                     width={700}
                     height={900}
                     loading={index === 0 ? "eager" : "lazy"}
                     decoding="async"
                     sizes="(max-width:768px) 100vw, 50vw"
                     onError={(e) => {
                     e.currentTarget.src = FALLBACK_IMAGE;
                     }}
                  />
             </div>

                </div>

                {/* CONTENT */}

                <div>

                  <div>

                {priceUnlocked ? (

                <span className="inline-flex rounded-full border border-[#b48a45]/20 bg-[#f8f0e6] px-4 py-1.5 text-sm font-semibold text-[#8b6f47]">
                {service.price}
                </span>

              ) : (

             <button
             onClick={() => setShowPriceForm(true)}
             className="inline-flex items-center gap-2 rounded-full border border-[#b48a45] bg-[#f8f0e6] px-4 py-1.5 text-sm font-semibold text-[#8b6f47]"
             >

             👁 View Price

            </button>

             )}

                </div>

                  <h2 className="mt-2 text-xl font-bold leading-tight text-[#b48a45] sm:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-[13px] leading-6 text-[#5b5b5b] sm:text-base">
                    {service.description}
                  </p>

                  {/* DETAILS */}

                  <div className="mt-5 grid gap-2">

                    {(service.details || []).map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-2 rounded-lg border border-[#b48a45]/10 bg-white p-2.5 shadow-sm"
                      >

                        <span className="mt-1 text-[#b48a45]">
                          🡆
                        </span>

                        <p className="text-[13px] leading-5 text-[#5b5b5b]">
                          {item}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* QUICK LINKS */}

       <CourseQuickLinks currentSlug={slug} />

        {/* FAQ */}

        <section className="px-4 py-12 md:px-5 md:py-20">

          <div className="mx-auto max-w-5xl">

            <div className="text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
                FAQs
              </span>

              <h2 className="mt-2 text-2xl font-bold text-[#111827] sm:text-4xl">
                Frequently Asked Questions
              </h2>

            </div>

            <div className="mt-8 space-y-3">

              {(faqs || []).map((faq) => (

                <div
                  key={faq.question}
                  className="rounded-xl border border-[#b48a45]/15 bg-white p-3 shadow-sm"
                >

                  <h3 className="text-lg font-semibold text-[#111827]">
                    {faq.question}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#5b5b5b]">
                    {faq.answer}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="px-4 pb-12 md:px-5 md:pb-24">

          <div className="mx-auto max-w-6xl rounded-xl bg-[#111827] px-5 py-8 sm:px-8 sm:py-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

            <h2 className="text-xl font-bold text-white sm:text-3xl">
              Book Your Professional Makeup Service Today
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80">
              Get flawless bridal, engagement, party,
              reception, haldi, mehandi, and photoshoot
              makeup services from Sonam Roy Makeup
              Academy in Gaya.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href="tel:+919199992695"
                className="inline-flex items-center justify-center rounded-full bg-[#b48a45] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9f7737]"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919199992695"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#111827] transition duration-300 hover:-translate-y-1"
              >
                WhatsApp Now
              </a>

            </div>

          </div>

        </section>

        {
      showPriceForm && (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">

    <div className="w-full max-w-md rounded-3xl bg-white p-8">


    <h3 className="text-2xl font-bold text-[#b48a45]">
    Unlock Package Price
    </h3>


   <p className="mt-2 text-gray-600">
 Fill your details to view all bridal package prices.
  </p>


<form 
onSubmit={handlePriceSubmit}
className="mt-6 space-y-4"
>


<input
type="text"
placeholder="Your Name"
required
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full rounded-xl border p-3"
/>


<input
type="tel"
placeholder="Mobile Number"
required
pattern="[6-9]{1}[0-9]{9}"
maxLength={10}
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
className="w-full rounded-xl border p-3"
/>


<button
type="submit"
disabled={loading}
className="w-full rounded-xl bg-[#b48a45] p-3 text-white font-semibold"
>

{
loading ? "Submitting..." : "Unlock Price"
}

</button>


<button
type="button"
onClick={()=>setShowPriceForm(false)}
className="w-full text-gray-500"
>

Close

</button>


   </form>

     </div>

     </div>

    )
    }

    </main>

    </>
  );
}

export default React.memo(ServiceDetails);