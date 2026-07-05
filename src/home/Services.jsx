import { memo } from "react";
import { Link } from "react-router-dom";
import CloudinaryImage from "../components/common/CloudinaryImage";
import { businessPhoneLink } from "../constants/siteData";

const services = [
  {
    slug: "bridal-makeup-in-gaya",
    title: "Bridal Makeup",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779371533/best_bridal_makeup_in_gaya_fphhv1.webp",
    imageAlt:
      "Professional Bridal Makeup Services in Gaya at Sonam Roy Makeup Academy",
    price: "Starting from ₹15,000",
    description:
      "Luxury HD and Airbrush bridal makeup services for weddings with flawless finishing and elegant styling.",
},

  {
    slug: "engagement-makeup-in-gaya",
    title: "Engagement Makeup",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779371959/best_makeup_artist_in_gaya_d3le9p.webp",
    imageAlt:
      "Professional Engagement Makeup Services in Gaya",
    price: "Starting from ₹6,000",
    description:
      "Professional engagement makeup with soft glam looks, HD finish and long-lasting beauty.",
},

  {
    slug: "haldi-mehandi-makeup-in-gaya",
    title: "Haldi Mehendi Makeup",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779372469/best_haldi_makeup_in_gaya_enjcwi.webp",
    imageAlt:
      "Haldi Mehendi Makeup Services in Gaya",
    price: "Starting from ₹8,000",
    description:
    "Fresh and lightweight haldi & mehendi makeup with waterproof finish and elegant styling.",
},
  {
    slug: "party-makeup-in-gaya",
    title: "Party Makeup",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1780211707/party_makeup_in_gaya_bw595q.webp",
    imageAlt:
      "Professional Party Makeup Services in Gaya",
    price: "Starting from ₹4,000",
    description:
    "Trendy party makeup looks for weddings, receptions and special occasions with professional finishing.",
},

  {
    slug: "photoshoot-makeup-in-gaya",
    title: "Photoshoot Makeup",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1780211707/photoshoot_near_me_cxhaap.webp",
    imageAlt:
      "Professional Photoshoot Makeup Services in Gaya",
    price: "Starting from ₹10,000",
    description:
    "Camera-ready HD makeup for photoshoots, pre-wedding shoots and fashion styling sessions.",
},

  {
    slug: "reception-makeup-in-gaya",
    title: "Reception Makeup",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1780211708/Reception_Makeup_in_gaya_lluxjv.webp",
    imageAlt:
      "Professional Reception Makeup Services in Gaya",
    price: "Starting from ₹6,000",
    description:
    "Elegant reception makeup with premium products, flawless finish and long-lasting wear.",
},

  {
    slug: "standard-pre-bridal-in-gaya",
    title: "Standard Pre-Bridal Package",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1780302907/pre_bridal_makeup_in_gaya_rppma4.webp",
    imageAlt:
      "Standard Pre Bridal Package in Gaya at Sonam Roy Makeup Academy",
    price: "₹8,999",
    description:
      "Complete pre-bridal grooming package including facial, waxing, hair spa and skin care treatments.",
},

{
    slug: "premium-pre-bridal-in-gaya",
    title: "Premium Pre-Bridal Package",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1780302907/pre_bridal_makeup_gaya_toibx6.webp",
    imageAlt:
      "Premium Pre Bridal Package in Gaya at Sonam Roy Makeup Academy",
    price: "₹11,999",
    description:
      "Premium bridal preparation package with diamond facial, manicure, pedicure and advanced beauty care.",
},

{
    slug: "ultra-premium-pre-bridal-in-gaya",
    title: "Ultra Premium Pre-Bridal Package",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1780302907/pre_bridal_makeup_near_me_zjyiau.webp",
    imageAlt:
     "Ultra Premium Pre Bridal Package in Gaya at Sonam Roy Makeup Academy",
    price: "₹16,999",
    description:
     "Luxury pre-bridal package with body polishing, premium facial treatments and complete bridal grooming.",
},

];

function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#fffdf9] via-white to-[#fffaf4] px-4 py-10 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-8 text-center">
        <h2 className="text-lg font-bold uppercase tracking-[0.18em] text-[#b48a45] sm:text-2xl md:text-3xl">
         Our Professional Makeup Services
        </h2>

        <h3 className="mt-3 text-xl font-bold text-[#111827] sm:text-2xl">
         Bridal, Party & Pre-Bridal Services in Gaya
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
         Professional bridal makeup, engagement makeup, party makeup,
         reception makeup and premium pre-bridal packages by Sonam Roy Makeup Academy.
        </p>
      </div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <article
              key={service.slug}
              className="group overflow-hidden rounded-xl border border-[#b48a45]/20 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-[0_25px_60px_rgba(180,138,69,0.15)]"
            >

              {/* Image */}

              <div className="h-48 overflow-hidden sm:h-56 md:h-64">

              <CloudinaryImage
               src={service.image}
               alt={service.imageAlt}
               width={700}
               height={525}
               maxWidth={600}
               loading={index === 0 ? "eager" : "lazy"}
               fetchPriority={index === 0 ? "high" : "auto"}
               decoding="async"
               sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
               className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
             />

            </div>

              {/* Content */}

              <div className="p-3.5 md:p-6">

                {/* Price */}

                <span className="inline-block rounded-full bg-[#fff8ef] px-2.5 py-1 text-[11px] font-semibold text-[#b48a45]">
                  {service.price}
                </span>

                {/* Title */}

                <h3 className="mt-2 text-[17px] font-bold text-[#b48a45]">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-2 min-h-[64px] text-sm leading-6 text-gray-600">
                 {service.description}
                </p>

                {/* Buttons */}

                <div className="mt-4 flex gap-2">

               <Link
                  to={`/services/${service.slug}`}
                  aria-label={`View details of ${service.title}`}
                  className="flex-1 rounded-full border border-[#b48a45] py-2 text-center text-xs font-semibold text-[#b48a45] transition hover:bg-[#b48a45] hover:text-white"
                >
                 View Details
               </Link>

                <a
                  href={businessPhoneLink}
                  aria-label={`Book ${service.title}`}
                  className="flex-1 rounded-full bg-[#b48a45] py-2.5 text-center text-[13px] font-semibold text-white transition hover:opacity-90"
                >
                  Call Now
                 </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default memo(Services);