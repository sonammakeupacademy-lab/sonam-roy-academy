import { useState, useEffect, memo } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import CloudinaryImage from "../components/common/CloudinaryImage";

const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

  // =========================
  // SLIDER IMAGES
  // =========================

  const desktopSlides = [
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697364/best_makeup_academy_in_gaya_glghiu.webp",
    alt: "Best Makeup Academy in Gaya - Sonam Roy Makeup Academy",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697364/nail_extension_in_gaya_lrpxcd.webp",
    alt: "Professional Nail Extension Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697364/makeup_training_in_gaya_ibviwu.webp",
    alt: "Professional Makeup Training Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697364/hair_classes_m9qmu1.webp",
    alt: "Hair Styling Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697363/skin_course_in_gaya_stzwlc.webp",
    alt: "Professional Beautician and Skin Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697364/beauty_course_in_gaya_z0fbzh.webp",
    alt: "Professional Beauty Parlour Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697363/beauty_servic_in_gaya_prvq4i.webp",
    alt: "Professional Beauty Services Training in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697363/hair_styling_course_in_gaya_bfh6ng.webp",
    alt: "Advanced Hair Styling Classes in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779697363/Trending_Nail_Art_in_gaya_spfcpw.webp",
    alt: "Trending Nail Art Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779096302/airbrush_makeup_in_gaya_r7i1bk.webp",
    alt: "Airbrush Makeup Course in Gaya",
  },
];

const mobileSlides = [
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779113399/mobilehero3_yb0o9r.webp",
    alt: "Best Makeup Academy in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779113399/mobilehero5_kx23nd.webp",
    alt: "Nail Extension Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779113397/mobilehero4_ufy7ey.webp",
    alt: "Professional Makeup Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779113706/mobileher1_zgttg9.webp",
    alt: "Hair Styling Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779113707/mobilehero2_tgtxf2.webp",
    alt: "Beautician Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779115449/mobilehero10_ja2dzh.webp",
    alt: "Beauty Parlour Course in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779115450/mobilehero6_ujkr9f.webp",
    alt: "Professional Beauty Training in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779115449/mobilehero7_n6hxnj.webp",
    alt: "Advanced Hair Styling Training in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779115450/mobilehero8_qitxvy.webp",
    alt: "Trending Nail Art Training in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779115449/mobilehero9_pgavda.webp",
    alt: "Airbrush Makeup Training in Gaya",
  },
];

  function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === desktopSlides.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);


// Preload next images after first paint
useEffect(() => {
  const preload = () => {
    desktopSlides.slice(1).forEach((img) => preloadImage(img.src));
    mobileSlides.slice(1).forEach((img) => preloadImage(img.src));
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(preload);
  } else {
    setTimeout(preload, 1000);
  }
}, []);

  // =========================
  // FORM STATES
  // =========================

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);

  // SUCCESS POPUP
  const [showPopup, setShowPopup] = useState(false);

  // AUTO FORM POPUP
  const [showFormPopup, setShowFormPopup] = useState(false);

  // AUTO POPUP 
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowFormPopup(true);
  }, 5000);

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
  document.body.style.overflow = showFormPopup ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [showFormPopup]);

  // =========================
  // FORM SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const formData = {
      name,
      mobile,
      address,
      course,
    };

    try {
      const response = await fetch(
  "https://script.google.com/macros/s/AKfycbxYjPDrXjNv4d1BbS8SQiWTbAKeC1piAl5O-UcqBwmcHlNlVJFM-ufxbm2oB5n9NUmq1w/exec",
  {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
  keepalive: true,
}
);

if (!response.ok) {
  throw new Error("Request failed");
}

      setShowPopup(true);
      setShowFormPopup(false);

      setName("");
      setMobile("");
      setAddress("");
      setCourse("");

    } catch (error) {
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >

{/* ========================= */}
{/* LUXURY BACKGROUND IMAGE */}
{/* ========================= */}


{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/55" />

      {/* ========================= */}
      {/* BACKGROUND SLIDER */}
      {/* ========================= */}

      <div className="absolute inset-0">

        {/* Desktop Images */}

{desktopSlides.map((image, index) => (
  <CloudinaryImage
    key={index}
    src={image.src}
    alt={image.alt}
    width={1920}
    height={1080}
    sizes="100vw"
    loading={index === 0 ? "eager" : "lazy"}
    fetchPriority={index === 0 ? "high" : "auto"}
    className={`absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-700 md:block ${
      currentSlide === index ? "opacity-100" : "opacity-0"
    }`}
  />
))}

         {/* Mobile Images */}

         {mobileSlides.map((image, index) => (
           <CloudinaryImage
           key={index}
           src={image.src}
           alt={image.alt}
           width={900}
           height={1600}
           sizes="100vw"
           loading={index === 0 ? "eager" : "lazy"}
           fetchPriority={index === 0 ? "high" : "auto"}
           className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-700 md:hidden ${
           currentSlide === index ? "opacity-100" : "opacity-0"
         }`}
          />
         ))}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

      </div>

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-[72px] pb-6 sm:px-6 md:pt-[78px]">

        <div className="grid w-full items-center gap-8 lg:gap-14 lg:grid-cols-[1fr_430px]">

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div>

            {/* TAG */}
            <div className="flex flex-wrap gap-4">

              <span className="inline-flex w-fit whitespace-nowrap items-center gap-2 rounded-full border border-[#d4af37]/70 bg-black/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white sm:text-xs sm:tracking-[0.18em]">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6bf00d] opacity-75" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#44fa24]" />

                </span>

                Best Makeup Academy in Gaya

              </span>

            </div>

            {/* HEADING */}
            <h1 className="mt-8 font-bold leading-tight text-white">

              <span className="block text-4xl text-[#b48a45] sm:text-6xl lg:text-7xl">
                Sonam Roy
              </span>

              <span className="mt-1 block text-xl text-white sm:text-3xl lg:text-4xl">
                Makeup Academy
              </span>

            </h1>
            <p className="sr-only">

             Best Makeup Academy in Gaya offering Makeup Course,
             Beautician Course,
             Hair Styling Course,
             Nail Extension Course,
             Bridal Makeup Training,
             Airbrush Makeup Course.

            </p>

            {/* KEYWORDS */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-white/80 sm:text-base">

              <span>● MAKE-UP</span>
              <span>● SKIN</span>
              <span>● HAIR</span>
              <span>● NAIL</span>

            </div>

            {/* BUTTONS */}
         <div className="mt-6 flex gap-3">
         <a
        href="https://wa.me/919199992695"
        aria-label="Chat on WhatsApp"
       target="_blank"
       rel="noreferrer"
       className="group flex-1 flex items-center justify-center gap-2 rounded-full border border-[#b48a45] bg-green-500 py-3 px-4 text-[13px] font-semibold uppercase text-white"
       >
       <FaWhatsapp aria-hidden="true" />
       <span>WhatsApp</span>
        </a>

       <a
        href="tel:+919199992695"
        aria-label="Call Sonam Roy Makeup Academy"
        className="group flex-1 flex items-center justify-center gap-2 rounded-full border border-[#b48a45] bg-blue-500 py-3 px-4 text-[13px] font-semibold uppercase text-white"
        >
         <FaPhoneAlt aria-hidden="true" />
         <span>Call Now</span>
         </a>

          </div>

            {/* INFO + DOTS */}
<div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between min-h-[120px] md:min-h-0">

  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/85">
    <p className="font-medium">
      Trusted by 500+ Students
    </p>

    <span className="hidden h-4 w-px bg-white/30 sm:block" />

    <p>
      Professional • Practical • Certified
    </p>
  </div>

  <div className="mt-auto pt-20 flex items-center justify-center md:justify-end gap-2">
    {desktopSlides.map((_, index) => (
      <button
        type="button"
        aria-label={`Go to slide ${index+1}`}
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`h-3 rounded-full transition-all duration-300 ${
          currentSlide === index
            ? "w-10 bg-[#d4af37]"
            : "w-3 bg-white/40"
        }`}
      />
    ))}
  </div>

</div>
</div>  


          {/* ========================= */}
          {/* RIGHT FORM */}
          {/* ========================= */}

          <div className="hidden lg:block rounded-[28px] border border-[#b48a45] bg-black/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

            <h2 className="text-2xl font-bold text-[#f0d39a]">
              Book Free Consultation
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Fill the form to get course details, fees &
              admission information.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3"
            >

              <input
                type="text"
                placeholder="Full Name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-2xl border border-[#b48a45] bg-transparent px-4 py-3 text-white placeholder:text-white/90 outline-none"
              />

              <input
               type="tel"
               placeholder="Mobile Number"
               value={mobile}
               onChange={(e) => setMobile(e.target.value)}
               pattern="[6-9]{1}[0-9]{9}"
               maxLength={10}
               autoComplete="tel"
               required
               className="w-full rounded-2xl border border-[#b48a45] bg-transparent px-4 py-3 text-white placeholder:text-white/90 outline-none"
             />

              <input
                type="text"
                placeholder="Address"
                autoComplete="street-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full rounded-2xl border border-[#b48a45] bg-transparent px-4 py-3 text-white placeholder:text-white/90 outline-none"
              />

              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="w-full rounded-2xl border border-[#b48a45] bg-transparent px-4 py-3 text-white outline-none"
              >

                <option value="" className="bg-[#111827]">
                  Select Course
                </option>

                <option value="Basic Makeup Course" className="bg-[#111827]">
                  Basic Makeup Course
                </option>

                <option value="Advanced Makeup Course" className="bg-[#111827]">
                  Advanced Makeup Course
                </option>

                <option value="Airbrush Makeup Course" className="bg-[#111827]">
                  Airbrush Makeup Course
                </option>

                <option value="Hairstyling Course" className="bg-[#111827]">
                  Hairstyling Course
                </option>

                <option value="Beautician Course" className="bg-[#111827]">
                  Beautician Course
                </option>

                <option value="Nail Extension Course" className="bg-[#111827]">
                  Nail Extension Course
                </option>

              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-[#b48a45] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9c7436]"
              >

                {loading ? "Submitting..." : "Submit Inquiry"}

              </button>

            </form>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* AUTO POPUP FORM */}
      {/* ========================= */}

      {showFormPopup && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-md">

          <div className="w-full max-w-lg rounded-[32px] border border-[#b48a45]/50 bg-white/10 p-7 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.55)]">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-bold text-[#f0d39a]">
                Free Consultation
              </h2>

              <button
                aria-label="Close popup"
                onClick={() => setShowFormPopup(false)}
                className="text-3xl text-white/70 transition hover:text-white"
              >
                &times;
              </button>

            </div>

            <p className="mt-2 text-sm text-white/70">
              Get course details, fees & admission guidance.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              <input
                type="text"
                placeholder="Full Name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-2xl border border-[#b48a45] bg-white/10 px-5 py-4 text-white placeholder:text-white/55 outline-none"
              />

              <input
               type="tel"
               placeholder="Mobile Number"
               value={mobile}
               onChange={(e) => setMobile(e.target.value)}
               pattern="[6-9]{1}[0-9]{9}"
               maxLength={10}
               autoComplete="tel"
               required
               className="w-full rounded-2xl border border-[#b48a45] bg-white/10 px-5 py-4 text-white placeholder:text-white/55 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-[#b48a45] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9c7436]"
              >

                {loading ? "Submitting..." : "Submit Inquiry"}

              </button>

            </form>

          </div>

        </div>

      )}

      {/* ========================= */}
      {/* SUCCESS POPUP */}
      {/* ========================= */}

      {showPopup && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

          <div className="w-[90%] max-w-md rounded-[32px] border border-[#b48a45]/20 bg-[#111827] p-8 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#b48a45]/30 bg-[#d4af37]/10">

              <span className="text-4xl">
                🥰
              </span>

            </div>

            <h3 className="mt-6 text-3xl font-bold text-[#f0d39a]">
              Inquiry Submitted
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/75">
              Thank you for contacting Sonam Roy Makeup Academy.
            </p>

            <button
              aria-label="Close success popup"
              onClick={() => setShowPopup(false)}
              className="mt-8 w-full rounded-2xl bg-[#d4af37] px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black"
            >
              Okay
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default memo(Hero);