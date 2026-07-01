import React from "react";
import { Link } from "react-router-dom";

const linksData = {

  "bridal-makeup-in-gaya": [
    {
      title: "Engagement Makeup",
      path: "/services/engagement-makeup-in-gaya",
    },
    {
      title: "Haldi & Mehandi Makeup",
      path: "/services/haldi-mehandi-makeup-in-gaya",
    },
    {
      title: "Reception Makeup",
      path: "/services/reception-makeup-in-gaya",
    },
    {
      title: "Party Makeup",
      path: "/services/party-makeup-in-gaya",
    },
    {
      title: "Photoshoot Makeup",
      path: "/services/photoshoot-makeup-in-gaya",
    },
    {
      title: "Ultra Premium Pre Bridal",
      path: "/services/ultra-premium-pre-bridal-in-gaya",
    },
  ],

  "engagement-makeup-in-gaya": [
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Reception Makeup",
      path: "/services/reception-makeup-in-gaya",
    },
    {
      title: "Party Makeup",
      path: "/services/party-makeup-in-gaya",
    },
    {
      title: "Photoshoot Makeup",
      path: "/services/photoshoot-makeup-in-gaya",
    },
  ],

  "haldi-mehandi-makeup-in-gaya": [
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup",
      path: "/services/engagement-makeup-in-gaya",
    },
    {
      title: "Reception Makeup",
      path: "/services/reception-makeup-in-gaya",
    },
    {
      title: "Party Makeup",
      path: "/services/party-makeup-in-gaya",
    },
  ],

  "party-makeup-in-gaya": [
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Reception Makeup",
      path: "/services/reception-makeup-in-gaya",
    },
    {
      title: "Photoshoot Makeup",
      path: "/services/photoshoot-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup",
      path: "/services/engagement-makeup-in-gaya",
    },
  ],

  "reception-makeup-in-gaya": [
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup",
      path: "/services/engagement-makeup-in-gaya",
    },
    {
      title: "Party Makeup",
      path: "/services/party-makeup-in-gaya",
    },
    {
      title: "Photoshoot Makeup",
      path: "/services/photoshoot-makeup-in-gaya",
    },
  ],

  "photoshoot-makeup-in-gaya": [
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Party Makeup",
      path: "/services/party-makeup-in-gaya",
    },
    {
      title: "Reception Makeup",
      path: "/services/reception-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup",
      path: "/services/engagement-makeup-in-gaya",
    },
  ],

  "standard-pre-bridal-in-gaya": [
    {
      title: "Premium Pre Bridal",
      path: "/services/premium-pre-bridal-in-gaya",
    },
    {
      title: "Ultra Premium Pre Bridal",
      path: "/services/ultra-premium-pre-bridal-in-gaya",
    },
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Engagement Makeup",
      path: "/services/engagement-makeup-in-gaya",
    },
  ],

  "premium-pre-bridal-in-gaya": [
    {
      title: "Standard Pre Bridal",
      path: "/services/standard-pre-bridal-in-gaya",
    },
    {
      title: "Ultra Premium Pre Bridal",
      path: "/services/ultra-premium-pre-bridal-in-gaya",
    },
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Reception Makeup",
      path: "/services/reception-makeup-in-gaya",
    },
  ],

  "ultra-premium-pre-bridal-in-gaya": [
    {
      title: "Standard Pre Bridal",
      path: "/services/standard-pre-bridal-in-gaya",
    },
    {
      title: "Premium Pre Bridal",
      path: "/services/premium-pre-bridal-in-gaya",
    },
    {
      title: "Bridal Makeup",
      path: "/services/bridal-makeup-in-gaya",
    },
    {
      title: "Reception Makeup",
      path: "/services/reception-makeup-in-gaya",
    },
  ],
};

function ServiceQuickLinks({ slug }) {
  const links = linksData[slug] || [];

  if (!links.length) return null;

  return (
    <section className="mt-24">
      <div className="overflow-hidden rounded-[32px] border border-[#b48a45]/20 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)]">

        {/* Header */}
        <div className="border-b border-[#b48a45]/10 bg-gradient-to-r from-[#fffdf9] via-white to-[#fff8ef] px-8 py-8">

          <span className="inline-flex rounded-full border border-[#b48a45]/20 bg-[#f8f0e6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b6f47]">
            Explore More Services
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111827]">
            Related Makeup Services
          </h2>

          <p className="mt-3 max-w-3xl text-[#5b5b5b]">
            Discover more professional makeup and bridal beauty services
            offered by Sonam Roy Makeup Academy in Gaya.
          </p>

        </div>

        {/* Cards */}
        <div className="p-8">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group rounded-2xl border border-[#b48a45]/15 bg-[#fffdf9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b48a45] hover:bg-[#f8f0e6] hover:shadow-lg"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f0e6] text-[#b48a45] transition-all duration-300 group-hover:bg-[#b48a45] group-hover:text-white">
                    🛒
                  </div>

                  <div>

                    <h3 className="font-semibold text-[#111827]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#777]">
                      View Service Details
                    </p>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default React.memo(ServiceQuickLinks);