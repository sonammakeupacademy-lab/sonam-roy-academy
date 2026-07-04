import { memo } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  businessDescription,
  businessAddressString,
  businessPhone,
  businessPhoneLink,
  businessEmail,
  businessEmailLink,
  socialLinks,
} from "../../constants/siteData";

function Footer() {
  return (
    <footer className="border-t border-[#f1e2c8] bg-[#fffdf9] px-4 py-10 sm:px-6 sm:py-12 [content-visibility:auto] [contain-intrinsic-size:500px]">

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:gap-10">

        {/* Left Section */}

        <div className="space-y-3">
          <div>

            <h2 className="text-xl font-bold uppercase tracking-[0.18em] text-[#b68d40] sm:text-2xl">
              Sonam Roy
            </h2>

            <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[#666]">
              Makeup Academy
            </p>

          </div>

          {/* Description */}

          <p className="max-w-md text-[13px] leading-6 text-[#555]">
            {businessDescription}
          </p>

        </div>

        {/* Center Section */}

        <div className="grid grid-cols-2 gap-6">

          {/* Quick Links */}

          <div>

            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#b68d40]">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-[#444]">

              <li>
                <a
                  href="#home"
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  Special Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact Info */}

          <div>

            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.30em] text-[#b68d40]">
              Contact Info
            </h3>

            <ul className="space-y-3 text-sm text-[#444]">

              {/* Address */}

              <li className="flex items-start gap-3 leading-7">

                <FaMapMarkerAlt className="mt-1 text-[#b68d40]" />

                <span>{businessAddressString}</span>

              </li>

              {/* Phone */}

              <li className="flex items-center gap-3">

                <FaPhoneAlt className="text-[#b68d40]" />

                <a
                  href={businessPhoneLink}
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  {businessPhone}
                </a>

              </li>

              {/* Email */}

              <li className="flex items-center gap-3">

                <MdEmail className="text-lg text-[#b68d40]" />

                <a
                  href={businessEmailLink}
                  className="transition duration-300 hover:text-[#b68d40]"
                >
                  {businessEmail}
                </a>

              </li>

            </ul>

          </div>

        </div>

        {/* Right Section */}

        <div>

          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.30em] text-[#b68d40]">
            Follow Us
          </h3>

          <p className="mb-4 text-[13px] leading-6 text-[#555]">
            Connect with Sonam Roy Makeup Academy on social media for makeup tips, student transformations, bridal makeup looks, beauty course updates, and professional training videos.
          </p>

          {/* Social Icons */}

          <div className="flex flex-wrap gap-4">

            {/* Instagram */}

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-[#ead8b3] text-lg transition hover:-translate-y-1"
            >
              <FaInstagram className="text-[#E1306C]" />
            </a>

            {/* WhatsApp */}

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-[#ead8b3] text-lg transition hover:-translate-y-1"
            >
              <FaWhatsapp className="text-[#25D366]" />
            </a>

            {/* Facebook */}

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-[#ead8b3] text-lg transition hover:-translate-y-1"
            >
              <FaFacebookF className="text-[#1877F2]" />
            </a>

            {/* YouTube */}

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow border border-[#ead8b3] text-lg transition hover:-translate-y-1"
            >
              <FaYoutube className="text-[#FF0000]" />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 border-t border-[#ead8b3] pt-5 text-center">

        <p className="text-xs leading-6 text-[#666]">
          © 2026 Sonam Roy Makeup Academy, Gaya Bihar. All Rights Reserved.
        </p>

        <p className="mt-2 text-[11px] leading-5 text-[#9a9a9a]">
          Best Makeup Academy in Gaya | Professional beauty Course in Gaya | Bridal Makeup Training in Gaya | Parlour Course in Gaya |  Mehandi course in Gaya
        </p>

      </div>

    </footer>
  );
}

export default memo(Footer);