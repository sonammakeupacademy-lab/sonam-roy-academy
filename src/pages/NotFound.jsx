import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      {/* SEO */}

      <Helmet>
        <title>
          404 Page Not Found | Sonam Roy Makeup Academy
        </title>

        <meta
          name="description"
          content="The page you are looking for could not be found. Explore professional makeup courses, bridal makeup training, hairstyling, and beauty certification programs at Sonam Roy Makeup Academy in Gaya."
        />

        <meta
          name="robots"
          content="noindex, follow"
        />

        <link
          rel="canonical"
          href="https://www.sonamroyacademy.com/404"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="404 Page Not Found | Sonam Roy Makeup Academy"
        />

        <meta
          property="og:description"
          content="Explore makeup academy courses, bridal makeup training, hairstyling, nail art, and beauty certification programs in Gaya."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.sonamroyacademy.com/404"
        />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dascytq6n/image/upload/v1779622644/og-image_oi4xnf.webp"
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="404 Page Not Found | Sonam Roy Makeup Academy"
        />

        <meta
          name="twitter:description"
          content="Professional beauty academy courses and bridal makeup training in Gaya."
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dascytq6n/image/upload/v1779622644/og-image_oi4xnf.webp"
        />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fffdf9] via-white to-[#fff8ef] px-5 py-20 text-[#111827] sm:px-6">

        {/* Background Blur */}

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#f4e6d1] blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#f3dfbf] blur-3xl opacity-40"></div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center rounded-[40px] border border-[#b48a45]/10 bg-white/90 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm sm:p-12 md:p-16">

          {/* 404 Badge */}

          <span className="inline-flex rounded-full border border-[#d9c2a0] bg-[#fff8ef] px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#b68d40] shadow-sm">
            404 Error
          </span>

          {/* Large 404 */}

          <h1 className="mt-8 text-7xl font-black leading-none text-[#b48a45]/20 sm:text-8xl md:text-9xl">
            404
          </h1>

          {/* Heading */}

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111827] sm:text-4xl md:text-5xl">
            Page Not Found
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#5c5c5c] sm:text-base md:text-lg">
            The page you are looking for may have been removed,
            renamed, or is temporarily unavailable. Explore our
            professional makeup academy courses, bridal makeup
            services, hairstyling, nail art, and beauty training
            programs in Gaya.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">

            <Link
              to="/"
              aria-label="Back to homepage"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2f3032] hover:shadow-xl"
            >
              Back to Home
            </Link>

            <Link
              to="/gallery"
              aria-label="View academy gallery"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-[#d9c2a0] bg-white px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:border-[#b68d40] hover:text-[#b68d40] hover:shadow-lg"
            >
              View Gallery
            </Link>

          </div>

          {/* Info Cards */}

          <div className="mt-14 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}

            <div className="rounded-[28px] border border-[#f1e3cf] bg-[#fffaf4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <h3 className="text-lg font-bold text-[#111827]">
                Makeup Courses
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#5d5d5d]">
                Learn bridal makeup, HD makeup, nail art,
                hairstyling, and beauty training from experts.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-[28px] border border-[#f1e3cf] bg-[#fffaf4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <h3 className="text-lg font-bold text-[#111827]">
                Certification
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#5d5d5d]">
                Get professional certification after successful
                completion of your beauty course.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-[28px] border border-[#f1e3cf] bg-[#fffaf4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <h3 className="text-lg font-bold text-[#111827]">
                Career Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#5d5d5d]">
                Build your beauty career with expert mentorship,
                practical sessions, and portfolio guidance.
              </p>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default NotFound;