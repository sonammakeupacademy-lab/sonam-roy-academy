import React from "react";
import { Link } from "react-router-dom";

const relatedServicesMap = {
  "basic-makeup-course": [
    {
      title: "Party Makeup Services",
      slug: "party-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup Services",
      slug: "engagement-makeup-in-gaya",
    },
  ],

  "advance-makeup-course": [
    {
      title: "Bridal Makeup Services",
      slug: "bridal-makeup-in-gaya",
    },
    {
      title: "Reception Makeup Services",
      slug: "reception-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup Services",
      slug: "engagement-makeup-in-gaya",
    },
  ],

  "airbrush-makeup-course": [
    {
      title: "Bridal Makeup Services",
      slug: "bridal-makeup-in-gaya",
    },
    {
      title: "Photoshoot Makeup Services",
      slug: "photoshoot-makeup-in-gaya",
    },
  ],

  "hairstyling-course": [
    {
      title: "Bridal Makeup Services",
      slug: "bridal-makeup-in-gaya",
    },
    {
      title: "Reception Makeup Services",
      slug: "reception-makeup-in-gaya",
    },
  ],

  "skin-beautician-course": [
    {
      title: "Party Makeup Services",
      slug: "party-makeup-in-gaya",
    },
    {
      title: "Haldi & Mehandi Makeup Services",
      slug: "haldi-mehandi-makeup-in-gaya",
    },
  ],

  "nail-extension-course": [
    {
      title: "Bridal Makeup Services",
      slug: "bridal-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup Services",
      slug: "engagement-makeup-in-gaya",
    },
  ],

  "standard-pre-bridal-in-gaya": [
    {
      title: "Premium Pre Bridal Package",
      slug: "premium-pre-bridal-in-gaya",
    },
    {
      title: "Ultra Premium Pre Bridal Package",
      slug: "ultra-premium-pre-bridal-in-gaya",
    },
    {
      title: "Bridal Makeup Services",
      slug: "bridal-makeup-in-gaya",
    },
  ],

  "premium-pre-bridal-in-gaya": [
    {
      title: "Standard Pre Bridal Package",
      slug: "standard-pre-bridal-in-gaya",
    },
    {
      title: "Ultra Premium Pre Bridal Package",
      slug: "ultra-premium-pre-bridal-in-gaya",
    },
    {
      title: "Bridal Makeup Services",
      slug: "bridal-makeup-in-gaya",
    },
  ],

  "ultra-premium-pre-bridal-in-gaya": [
    {
      title: "Premium Pre Bridal Package",
      slug: "premium-pre-bridal-in-gaya",
    },
    {
      title: "Standard Pre Bridal Package",
      slug: "standard-pre-bridal-in-gaya",
    },
    {
      title: "Bridal Makeup Services",
      slug: "bridal-makeup-in-gaya",
    },
  ],
};

function RelatedServices({ courseSlug }) {
  const relatedServices =
    relatedServicesMap[courseSlug] || [];

  if (relatedServices.length === 0) {
    return null;
  }

  const isPreBridalPage = [
    "standard-pre-bridal-in-gaya",
    "premium-pre-bridal-in-gaya",
    "ultra-premium-pre-bridal-in-gaya",
  ].includes(courseSlug);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20">

      <div className="rounded-[32px] border border-[#b48a45]/20 bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
            Explore More
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111827] sm:text-4xl">
            {isPreBridalPage
              ? "Related Bridal Services"
              : "Related Makeup Services"}
          </h2>

          <p className="mt-4 text-[#5b5b5b]">
            {isPreBridalPage
              ? "Explore more bridal grooming and makeup services for your special day."
              : "Explore professional makeup services related to this course."}
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {relatedServices.map((service) => (

            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group rounded-3xl border border-[#b48a45]/15 bg-gradient-to-b from-white to-[#fffaf3] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b48a45] hover:shadow-xl"
            >

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f0e6] text-[#b48a45] text-xl">
                🛒
              </div>

              <h3 className="text-lg font-semibold text-[#111827]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-[#6b7280]">
                View details and pricing for this service.
              </p>

              <div className="mt-5 text-sm font-semibold text-[#b48a45] group-hover:translate-x-1 transition">
                View Service →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default React.memo(RelatedServices);