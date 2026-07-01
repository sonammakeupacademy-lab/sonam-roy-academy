import { memo } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  businessPhoneLink,
  whatsappLinkWithText,
} from "../../constants/siteData";

function FloatingActions() {
  return (
    <>

      {/* Desktop Floating Buttons */}

      <div className="fixed bottom-4 right-3 z-[999] flex flex-col gap-3 md:bottom-6 md:right-6">

        {/* WhatsApp Button */}

        <a
          href={whatsappLinkWithText}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Us"
          className="group flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border border-[#b48a45] bg-white text-[#25D366] shadow-[0_15px_40px_rgba(180,138,69,0.18)] transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp className="text-[30px] transition duration-300 group-hover:scale-110" />
        </a>

        {/* Call Button */}

        <a
          href={businessPhoneLink}
          aria-label="Call Sonam Roy Makeup Academy"
          title="Call Now"
          className="group flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border border-[#b48a45] bg-white text-[#111827] shadow-[0_15px_40px_rgba(180,138,69,0.18)] transition-all duration-300 hover:scale-110"
        >
          <FaPhoneAlt className="text-[26px] transition duration-300 group-hover:scale-110" />
        </a>

      </div>

    </>
  );
}

export default memo(FloatingActions);