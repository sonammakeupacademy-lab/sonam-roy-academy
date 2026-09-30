import { memo } from "react";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import {
  businessPhone,
  businessPhoneLink,
  businessEmail,
  businessEmailLink,
  businessAddressString,
  officePhone,
  officePhoneLink,
  socialLinks,
  whatsappLink,
} from "../constants/siteData";

/* =========================
   CONTACT CARDS
========================= */

const contactCards = Object.freeze([
  {
    title: "Call Us",
    value: businessPhone,
    href: businessPhoneLink,
    icon: FaPhoneAlt,
    bg: "from-[#111827] to-[#2b2b2b]",
    shadow: "shadow-[0_15px_40px_rgba(0,0,0,0.15)]",
  },

  {
    title: "Office Number",
    value: officePhone,
    href: officePhoneLink,
    icon: FaPhoneAlt,
    bg: "from-[#111827] to-[#2b2b2b]",
    shadow: "shadow-[0_15px_40px_rgba(0,0,0,0.15)]",
  },

  {
    title: "WhatsApp",
    value: "Chat Now",
    href: whatsappLink,
    icon: FaWhatsapp,
    bg: "from-[#25D366] to-[#1da851]",
    shadow: "shadow-[0_15px_40px_rgba(37,211,102,0.25)]",
    target: "_blank",
  },

  {
    title: "Email",
    value: businessEmail,
    href: businessEmailLink,
    icon: MdEmail,
    bg: "from-[#b68d40] to-[#d4af37]",
    shadow: "shadow-[0_15px_40px_rgba(182,141,64,0.25)]",
  },

  {
    title: "Instagram",
    value: "Follow Us",
    href: socialLinks.instagram,
    icon: FaInstagram,
    bg: "from-[#fd1d1d] via-[#e1306c] to-[#c13584]",
    shadow: "shadow-[0_15px_40px_rgba(225,48,108,0.25)]",
    target: "_blank",
  },

  {
    title: "YouTube",
    value: "Subscribe Now",
    href: socialLinks.youtube,
    icon: FaYoutube,
    bg: "from-[#ff0000] to-[#cc0000]",
    shadow: "shadow-[0_15px_40px_rgba(255,0,0,0.25)]",
    target: "_blank",
  },

  {
    title: "Facebook",
    value: "Visit Our Facebook Page",
    href: socialLinks.facebook,
    icon: FaFacebookF,
    bg: "from-[#1877f2] to-[#0f5dc9]",
    shadow: "shadow-[0_15px_40px_rgba(24,119,242,0.25)]",
    target: "_blank",
  },
]);

/* =========================
   CONTACT COMPONENT
========================= */

function Contact() {
  /*
   * Exact Google Maps Embed URL
   * Provided from Google Maps for
   * Sonam Roy Makeup Academy
   */

  const googleMapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.9815044476895!2d85.00826007406549!3d24.79608684783291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b73146257d1%3A0xe6c1b1081b73b8b0!2sSonam%20Roy%20Makeup%20Academy!5e0!3m2!1sen!2sin!4v1790671525305!5m2!1sen!2sin";

  const googleMapsSearchUrl =
    "https://www.google.com/maps/search/?api=1&query=Sonam%20Roy%20Makeup%20Academy";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffdf9] to-[#fff8ef] px-4 py-12 sm:px-6 md:py-16"
    >
      {/* =========================
          BACKGROUND BLUR
      ========================= */}

      <div
        className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#f4e6d1] opacity-30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#f3dfbf] opacity-30 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            HEADING
        ========================= */}

        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b48a45] sm:text-sm">
            Contact Us
          </p>

          <h2
            id="contact-heading"
            className="mt-3 text-2xl font-bold leading-tight text-[#111827] sm:text-4xl"
          >
            Your Dream Beauty Career Starts Here
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-[#666] sm:text-base">
            Connect with Sonam Roy Makeup Academy for professional makeup
            training, bridal makeup courses, hairstyling, beautician classes,
            nail extension training, admissions, and beauty career guidance in
            Gaya.
          </p>
        </div>

        {/* =========================
            MAIN GRID
        ========================= */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="rounded-3xl border border-[#b48a45]/20 bg-white/90 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_40px_rgba(180,138,69,0.15)] sm:p-6 md:p-10">
            <div className="space-y-8">
              {/* INTRO */}

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b48a45]">
                  Enroll Now
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[#111827] sm:text-3xl">
                  Contact Our Academy Team
                </h3>

                <p className="mt-5 text-sm leading-8 text-[#5d5d5d] sm:text-base">
                  Get complete information about beauty courses, bridal makeup
                  training, fees, admissions, certifications, and career
                  opportunities.
                </p>
              </div>

              {/* =========================
                  CONTACT CARDS
              ========================= */}

              <div className="grid grid-cols-3 justify-items-center gap-3 sm:gap-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target={card.target || "_self"}
                      rel={
                        card.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={card.title}
                      title={card.title}
                      className={`group flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${card.bg} transition-all duration-300 hover:-translate-y-1 ${card.shadow} sm:h-24 sm:w-24`}
                    >
                      <Icon className="text-2xl text-white transition duration-300 group-hover:scale-110 sm:text-3xl" />
                    </a>
                  );
                })}
              </div>

              {/* =========================
                  ADDRESS
              ========================= */}

              <div className="rounded-[30px] border border-[#b48a45]/20 bg-[#fff8ef] p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#b48a45]">
                  <span aria-hidden="true">📍</span>
                  Academy Address
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#5d5d5d] sm:text-base">
                  {businessAddressString}
                </p>

                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-[#b68d40] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9a7625] hover:shadow-lg"
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              GOOGLE MAP
          ========================= */}

          <div className="group overflow-hidden rounded-[36px] border border-[#b48a45]/20 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_40px_rgba(180,138,69,0.15)]">
            {/* MAP HEADER */}

            <div className="border-b border-[#b48a45]/10 bg-[#fffaf3] px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
                    Find Us
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#111827] sm:text-xl">
                    Visit Our Academy
                  </h3>
                </div>

                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b68d40] text-lg text-white shadow-md"
                  aria-hidden="true"
                >
                  📍
                </span>
              </div>
            </div>

            {/* =========================
                GOOGLE MAP IFRAME
            ========================= */}

            <div className="relative h-[350px] w-full sm:h-[450px] lg:h-[540px]">
              <iframe
                title="Sonam Roy Makeup Academy Google Maps Location"
                src={googleMapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* =========================
                MAP FOOTER
            ========================= */}

            <div className="border-t border-[#b48a45]/10 bg-white p-5 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#b48a45]">
                Academy Location
              </p>

              <p className="mt-1 text-sm leading-6 text-[#555]">
                {businessAddressString}
              </p>

              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#b68d40] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9a7625] hover:shadow-lg"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);