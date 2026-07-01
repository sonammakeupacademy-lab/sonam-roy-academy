import React, { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { courses } from "../constants/coursesData";
import CourseQuickLinks from "../seo/CourseQuickLinks";
import RelatedServices from "../seo/RelatedServices";

import {
  businessPhoneLink,
  whatsappLinkWithText,
} from "../constants/siteData";

/* =========================
   FALLBACK IMAGE
  ========================= */

const IMAGE_FALLBACK =
  "https://res.cloudinary.com/dascytq6n/image/upload/f_auto,q_auto/v1779368607/logoo_mwvcaf.webp";

/* =========================
   REUSABLE CARD
========================= */

function InfoCard({ children }) {
  return (
    <div className="rounded-xl border border-[#b48a45]/15 bg-white p-4 shadow-md transition duration-300">
      {children}
    </div>
  );
}

/* =========================
   REUSABLE IMAGE
========================= */

function OptimizedImage({
  src,
  alt,
  priority = false,
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#b48a45]/20 bg-white shadow-md">

      <div className="aspect-[5/4] bg-[#f8f0e6]">

        <img
          src={src || IMAGE_FALLBACK}
          alt={alt || "Course Image"}
          width="1000"
          height="800"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes="(max-width:768px) 100vw, 50vw"
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
          onError={(e) => {
             e.currentTarget.onerror = null;
             e.currentTarget.src = IMAGE_FALLBACK;
          }}
        />

      </div>

    </div>
  );
}

function CourseDetails() {

  const { slug } = useParams();

  /* =========================
     FIND COURSE
  ========================= */

  const course = useMemo(
    () =>
      courses.find(
        (item) => item.slug === slug
      ),
    [slug]
  );

  /* =========================
     NOT FOUND
  ========================= */

  if (!course) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#fffdf9] px-5 text-center">

        <div>

          <h1 className="text-4xl font-bold text-[#111827]">
            Course Not Found
          </h1>

          <p className="mt-4 text-[#5b5b5b]">
            The requested course does not exist.
          </p>

        </div>

      </section>
    );
  }

  /* =========================
   COURSE URL
========================= */

const courseUrl = course.canonical;

  /* =========================
     SCHEMA
  ========================= */

 const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",

  name: course.title,

  description: course.metaDescription,

  image: [
    course.image,
    course.secondImage,
    course.thirdImage,
 ].filter(Boolean),

  provider: {
  "@id": "https://www.sonamroyacademy.com/#organization"
},

  educationalCredentialAwarded:
    "Certificate",

  inLanguage:
    course.language,

  timeRequired:
  course.duration,

  url:
    course.canonical,

  offers: {
  "@type": "Offer",
  category: "Beauty Course",
  availability: "https://schema.org/InStock",
},
  hasCourseInstance: {
  "@type": "CourseInstance",

  courseMode: "Offline",

  location: {
    "@type": "Place",
    name: "Sonam Roy Makeup Academy",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Chowk, 2nd Floor, Balaji Market, KP Road, Near Pramod Laddu Bhandar",

      addressLocality: "Gaya",
      addressRegion: "Bihar",
      postalCode: "823001",
      addressCountry: "IN",
    },
  },
},
};

  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.sonamroyacademy.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Courses",
      item: "https://www.sonamroyacademy.com/courses"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: course.title,
      item: courseUrl
    }
  ]
};

  const faqSchema =
  course.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",

        mainEntity: course.faqs.map((faq) => ({
          "@type": "Question",

          name: faq.question,

          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {/* =========================
          SEO
      ========================= */}

      <Helmet prioritizeSeoTags>

        <title>{course.metaTitle}</title>

        <meta
          name="description"
          content={course.metaDescription}
        />

        <meta
          name="keywords"
          content={course.seoKeywords}
       />

       <meta
          name="robots"
          content="index, follow"
        />

        <meta
          property="og:title"
          content={course.metaTitle}
        />

        <meta
          property="og:description"
          content={course.metaDescription}
        />

        <meta
          property="og:site_name"
          content="Sonam Roy Makeup Academy"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

        <meta
          name="author"
          content="Sonam Roy Makeup Academy"
        />

        <meta
          name="twitter:description"
          content={course.metaDescription}
        />

        {/* Canonical */}

        <link
          rel="canonical"
          href={courseUrl}
        />

        {/* Open Graph */}

        <meta
          property="og:type"
          content="article"
        />

        <meta
          property="og:url"
          content={courseUrl}
        />

        <meta
          property="og:image"
          content={course.image}
        />

        <meta
          property="og:image:alt"
          content={course.mainImageAlt}
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={course.metaTitle}
        />

        <meta
          name="twitter:image"
          content={course.image}
        />

        <meta
          name="twitter:image:alt"
          content={course.mainImageAlt}
        />

        {/* Schema */}

        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {faqSchema && (
        <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
        </script>
        )}

      </Helmet>

      {/* =========================
          MAIN SECTION
      ========================= */}

      <section className="overflow-hidden bg-gradient-to-b from-[#fffdf9] via-white to-[#fffaf3] px-5 pt-8 pb-16 sm:px-6 md:pt-12 md:pb-24">

        <div className="mx-auto max-w-7xl">

          {/* =========================
              HERO
          ========================= */}

          <div className="mx-auto max-w-3xl text-center">

            <h1 className="text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">

              <span className="text-[#b48a45]">
                {course.title}
              </span>

            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5b5b5b] sm:text-base">
              {course.shortDescription}
            </p>

            <p className="sr-only">
              {course.metaDescription}
            </p>

            {/* TAGS */}

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">

              {course.category && (
                <div className="rounded-full border border-[#b48a45]/20 bg-white px-3 py-1.5 text-sm font-medium shadow-sm">
                  Category: {course.category}
                </div>
              )}

              {course.mode && (
                <div className="rounded-full border border-[#b48a45]/20 bg-white px-3 py-1.5 text-sm font-medium shadow-sm">
                  Mode: {course.mode}
                </div>
              )}

              {course.location && (
                <div className="rounded-full border border-[#b48a45]/20 bg-white px-3 py-1.5 text-sm font-medium shadow-sm">
                  Location: {course.location}
                </div>
              )}

              {course.language && (
                <div className="rounded-full border border-[#b48a45]/20 bg-white px-3 py-1.5 text-sm font-medium shadow-sm">
                  Language: {course.language}
                </div>
              )}

              {course.certificate && (
                <div className="rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-3 py-1.5 text-sm font-semibold text-[#25D366] shadow-sm">
                  Certificate Available
                </div>
              )}

            </div>

            {/* DURATION */}

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">

              {course.duration && (
                <div className="rounded-full border border-[#b48a45]/30 bg-white  px-4 py-2 text-sm font-semibold shadow-sm">
                  Duration: {course.duration}
                </div>
              )}

              {course.fees && (
                <div className="rounded-full border border-[#111827] bg-[#111827]  px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  Fees: {course.fees}
                </div>
              )}

            </div>

          </div>

          {/* =========================
              SECTION 1
          ========================= */}

          <div className="mt-10 grid items-center gap-6 lg:grid-cols-2">

            <OptimizedImage
              src={course.image}
              alt={course.mainImageAlt}
              priority
            />

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
                Professional Training
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">
                Learn From Industry Experts
              </h2>

              <div className="mt-6 space-y-5">

                {Array.isArray(course.fullDescription)
                  ? course.fullDescription.map(
                      (para, index) => (
                        <p
                          key={index}
                          className="leading-8 text-[#5b5b5b]"
                        >
                          {para}
                        </p>
                      )
                    )
                  : (
                    <p className="leading-8 text-[#5b5b5b]">
                      {course.fullDescription}
                    </p>
                  )}

              </div>

            </div>

          </div>

          {/* =========================
              FEATURES
          ========================= */}

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
                Course Features
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">
                Practical Learning Experience
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {course.features?.map(
                  (feature, index) => (
                    <InfoCard key={feature}>

                      <div className="flex gap-3">

                        <span className="text-[#b48a45]">
                          ➤
                        </span>

                        <p className="text-sm leading-7 text-[#5b5b5b]">
                          {feature}
                        </p>

                      </div>

                    </InfoCard>
                  )
                )}

              </div>

            </div>

            <OptimizedImage
              src={course.secondImage}
              alt={course.secondImageAlt}
            />

          </div>

          {/* =========================
              CAREER
          ========================= */}

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

            <OptimizedImage
              src={course.thirdImage}
              alt={course.thirdImageAlt}
            />

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
                Career Opportunities
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">
                Build Your Professional Career
              </h2>

              <div className="mt-8 grid gap-4">

                {course.careerOpportunities?.map(
                  (item, index) => (
                    <InfoCard key={item}>

                      <div className="flex gap-3">

                        <span className="text-[#b48a45]">
                          ➤
                        </span>

                        <p className="font-medium text-[#111827]">
                          {item}
                        </p>

                      </div>

                    </InfoCard>
                  )
                )}

              </div>

              {/* BUTTONS */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href={businessPhoneLink}
                  className="inline-flex items-center justify-center rounded-full border border-[#b48a45] bg-[#111827] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#2d2f31]"
                >
                  Enroll Now
                </a>

                <a
                  href={whatsappLinkWithText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d]"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

          </div>

          {/* =========================
              CERTIFICATION
          ========================= */}

          <div className="mt-16 rounded-[36px] border border-[#b48a45]/30 bg-[#111827] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] sm:p-12">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              Certification
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Professional Course Certification
            </h2>

            <p className="mt-6 max-w-4xl leading-8 text-white/80">
              {course.certification}
            </p>

          </div>

          {/* =========================
              BENEFITS
          ========================= */}

          <div className="mt-16">

            <div className="text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
                Benefits
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">
                Why Students Choose Us
              </h2>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {course.benefits?.map(
                (benefit, index) => (
                  <InfoCard key={benefit}>

                    <div className="flex gap-3">

                      <span className="text-[#b48a45]">
                        ➤
                      </span>

                      <p className="font-medium leading-7 text-[#111827]">
                        {benefit}
                      </p>

                    </div>

                  </InfoCard>
                )
              )}

            </div>

          </div>

          {/* =========================
              FAQ
          ========================= */}

          <div className="mt-16">

            <div className="text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
                FAQs
              </span>

              <h2 className="mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">
                Frequently Asked Questions
              </h2>

            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-5">

              {course.faqs?.map((faq, index) => (

                <InfoCard key={faq.question}>

                  <h3 className="text-lg font-semibold text-[#111827]">
                    {faq.question}
                  </h3>

                  <p className="mt-3 leading-7 text-[#5b5b5b]">
                    {faq.answer}
                  </p>

                </InfoCard>

              ))}

            </div>

          </div>

          {/* SEO LINKS */}

          <CourseQuickLinks currentSlug={course.slug} />
          <RelatedServices courseSlug={course.slug} />

          {/* =========================
              FINAL CTA
          ========================= */}

          <div className="mt-16 rounded-[36px] bg-[#b48a45] p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Start Your Professional Beauty Career Today
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/90">
              Join Sonam Roy Makeup Academy and build your future with professional beauty, makeup, hairstyling, beautician, and nail extension training in Gaya.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href={businessPhoneLink}
                className="inline-flex items-center justify-center rounded-full bg-[#111827] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-1"
              >
                Call Now
              </a>

              <a
                href={whatsappLinkWithText}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#111827] transition duration-300 hover:-translate-y-1"
              >
                WhatsApp Now
              </a>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default memo(CourseDetails);