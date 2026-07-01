import { lazy, Suspense } from "react";
import SEO from "../seo/SEO";
import Hero from "../home/Hero";

/* =========================
   LAZY LOADED SECTIONS
========================= */

const About = lazy(() => import("../home/About"));
const Courses = lazy(() => import("../home/Courses"));
const WhyChooseUs = lazy(() => import("../home/WhyChooseUs"));
const Gallery = lazy(() => import("../home/Gallery"));
const SpecialServices = lazy(() => import("../home/Services"));
const Testimonials = lazy(() => import("../home/Testimonials"));
const CertificateCheck = lazy(() => import("../home/CertificateCheck"));
const Contact = lazy(() => import("../home/Contact"));
const CallToAction = lazy(() => import("../home/CallToAction"));

/* =========================
   LOADING FALLBACK
========================= */

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#d4af37] border-t-transparent"></div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* =========================
          SEO
      ========================= */}

      <SEO
        title="Best Makeup Academy in Gaya | Sonam Roy Makeup Academy"
        description="Join Sonam Roy Makeup Academy, the best makeup academy in Gaya. Learn professional makeup, beautician, hairstyling, nail extension, mehndi and salon management with certification and practical training."
        keywords="makeup academy in gaya, best makeup academy in gaya, beautician course in gaya, bridal makeup course in gaya, nail extension course in gaya, hairstyling course in gaya, beauty parlour course in gaya, mehndi course in gaya"
        canonical="https://www.sonamroyacademy.com/"
        image="https://res.cloudinary.com/dascytq6n/image/upload/f_auto,q_auto/v1779368607/logoo_mwvcaf.webp"
      />

      {/* =========================
          MAIN PAGE
      ========================= */}

      <main className="relative overflow-hidden bg-[#fffdf9] text-[#111827]">

      <Hero />

<Suspense fallback={<SectionLoader />}>
  <About />
  <Courses />
  <WhyChooseUs />
  <Gallery />
  <SpecialServices />
  <Testimonials />
  <CertificateCheck />
  <Contact />
  <CallToAction />
</Suspense>

    </main>
    </>
  );
}

export default HomePage;