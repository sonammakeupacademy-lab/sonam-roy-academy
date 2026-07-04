import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CloudinaryImage from "../common/CloudinaryImage";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Courses", to: "courses" },


  { label: "Why Choose Us", to: "why-choose-us" },

  { label: "Gallery", to: "gallery" },

  { label: "Special Services", to: "services" },
  { label: "Testimonials", to: "testimonials" },
  { label: "Verify", to: "verify" },
  { label: "Contact", to: "contact" },
];

function StickyNavbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = useCallback(
    (target) => {
      setOpen(false);

      const scrollToSection = () => {
        const section = document.getElementById(target);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      if (location.pathname !== "/") {
        navigate("/");

        setTimeout(() => {
          scrollToSection();
        }, 300);

        return;
      }

      scrollToSection();
    },
    [location.pathname, navigate]
  );

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] w-full border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-xl">
      
      {/* NAVBAR */}
      <div className="mx-auto flex h-[56px] max-w-7xl items-center justify-between px-3 sm:h-[64px] sm:px-6">

        {/* LOGO */}
        <button
          type="button"
          onClick={() => handleScroll("home")}
          aria-label="Scroll to home section"
          className="flex items-center gap-2 leading-tight"
        >
          <CloudinaryImage
           src="https://res.cloudinary.com/dascytq6n/image/upload/v1779368607/logoo_mwvcaf.webp"
           alt="Sonam Roy Makeup Academy Logo"
           width={48}
           height={48}
           maxWidth={96}
           sizes="48px"
           loading="eager"
           fetchPriority="high"
           className="h-10 w-10 rounded-full border border-[#e8d3ab] object-cover shadow sm:h-12 sm:w-12"
          />

          <div className="text-left">
            <h2 className="text-[16px] font-bold uppercase tracking-[0.12em] text-[#b68d40] sm:text-[20px]">
              Sonam Roy
            </h2>

            <span className="block text-[8px] uppercase tracking-[0.20em] text-slate-600 sm:text-[10px]">
              Makeup Academy
            </span>
          </div>
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-7 text-sm font-medium uppercase text-[#4b4b4b] md:flex">
         {navItems.map((item) => (
        <button
        key={item.label}
        type="button"
          onClick={() => {
          if (item.isRoute) {
           navigate(item.path);
              } else {
             handleScroll(item.to);
              }
              }}
         className="transition duration-300 hover:text-[#d4af37]"
           >
          {item.label}
          </button>
         ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition hover:bg-[#f8f4ee] md:hidden"
        >
          <span
            className={`mb-1 block h-[2px] w-4 bg-[#111827] transition-all duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />

          <span
            className={`mb-1 block h-[2px] w-4 bg-[#111827] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-[2px] w-4 bg-[#111827] transition-all duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="flex flex-col px-3 py-2">

            {navItems.map((item) => (
             <button
             key={item.label}
             type="button"
             onClick={() => {
             if (item.isRoute) {
             navigate(item.path);
            setOpen(false);
            } else {
            handleScroll(item.to);
           }
          }}
        className="rounded-lg px-3 py-2.5 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-[#222] transition hover:bg-[#f8f4ee] hover:text-[#d4af37]"
         >
         {item.label}
         </button>
        ))}

          </div>
        </div>
      )}
    </header>
  );
}

export default StickyNavbar;