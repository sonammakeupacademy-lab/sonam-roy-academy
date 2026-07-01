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

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fffdf9] to-[#fff8ef] px-4 py-12 sm:px-6 md:py-16"
    >

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#f4e6d1] opacity-30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#f3dfbf] opacity-30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

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
            Connect with Sonam Roy Makeup Academy for professional
            makeup training, bridal makeup courses, hairstyling,
            beautician classes, nail extension training, admissions,
            and beauty career guidance in Gaya.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Content */}

          <div className="rounded-3xl border border-[#b48a45]/20 bg-white/90 p-4 sm:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_40px_rgba(180,138,69,0.15)] md:p-10">

            <div className="space-y-8">

              {/* Intro */}

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b48a45]">
                  Enroll Now
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[#111827] sm:text-3xl">
                  Contact Our Academy Team
                </h3>

                <p className="mt-5 text-sm leading-8 text-[#5d5d5d] sm:text-base">
                  Get complete information about beauty courses,
                  bridal makeup training, fees, admissions,
                  certifications, and career opportunities.
                </p>

              </div>

              {/* Contact Cards */}

              <div className="grid grid-cols-3 gap-3 sm:gap-4 justify-items-center">

                {contactCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <a
                     key={card.title}
                     href={card.href}
                     target={card.target || "_self"}
                     rel={card.target === "_blank" ? "noopener noreferrer" : undefined}
                     aria-label={card.title}
                     className={`group flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${card.bg} transition-all duration-300 hover:-translate-y-1 ${card.shadow}`}
                    >
                    <Icon className="text-2xl text-white transition duration-300 group-hover:scale-110" />
                  </a>
                  );
                })}

              </div>

              {/* Address */}

              <div className="rounded-[30px] border border-[#b48a45]/20 bg-[#fff8ef] p-6 shadow-sm">

                <h3 className="flex items-center gap-2 text-lg font-bold text-[#b48a45]">
                  <span>📍</span>
                  Academy Address
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#5d5d5d] sm:text-base">
                  {businessAddressString}
                </p>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-[36px] border border-[#b48a45]/20 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_40px_rgba(180,138,69,0.15)]">

          </div>

        </div>

      </div>

    </section>
  );
}

export default memo(Contact);