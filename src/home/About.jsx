import { memo } from "react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fffdf9] px-5 py-14 sm:px-6 md:py-20"
    >

      {/* SEO Hidden Heading */}

      <h2 className="sr-only">
        Best Beauty Academy in Gaya - Sonam Roy Makeup Academy
      </h2>

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#f6e7d0] opacity-30 blur-2xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#f3d9b1] opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-10 md:mb-12 text-center">

          <h2 className="text-lg font-bold uppercase tracking-[0.18em] text-[#b48a45] sm:text-2xl md:text-3xl">
            About Sonam Roy Makeup Academy
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#5e5e5e] sm:text-base md:text-lg">
            Start your beauty career with Sonam Roy Makeup Academy – the best place to learn professional makeup and beauty skills in Gaya. Our courses include Bridal Makeup, HD Makeup, Beautician, Skin Care, Nail Extension, and Hair Styling. With hands-on practice and expert mentorship, we prepare students to become confident beauty professionals.

          </p>

        </div>

        {/* Main Layout */}

        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-center">

          {/* Left Content */}

          <div className="w-full lg:w-1/2">

            <p className="text-base leading-7 text-[#5e5e5e] md:text-lg md:leading-8">

              <strong>
                Sonam Roy Makeup Academy
              </strong>{" "}

              is one of the leading beauty and makeup training institutes
              in Gaya, Bihar, offering industry-focused professional
              beautician and makeup artist courses with live practical
              learning and salon experience.

            </p>

            <p className="mt-4 text-base leading-7 text-[#5e5e5e] md:text-lg md:leading-8">

              We provide expert training in bridal makeup, HD makeup,
              airbrush makeup, hairstyling, nail extensions, skincare,
              self makeup, salon management, and advanced beauty
              techniques to help students build successful careers in
              the beauty and makeup industry.

            </p>

          </div>

          {/* Right Features */}

          <div className="w-full lg:w-1/2">

            <div className="grid gap-3 md:gap-4 sm:grid-cols-2">

              {/* Card 1 */}

              <article  className="flex items-center gap-3 rounded-xl border border-[#b48a45] bg-white p-3 md:p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">

                <div  className="flex h-11 w-11 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#f8f0e6] text-2xl md:text-3xl">
                  📃
                </div>

                <div>

                  <h3 className="text-sm md:text-base font-semibold text-[#b48a45]">
                    Practical Classes
                  </h3>

                  <p className="text-xs md:text-sm leading-5 md:leading-6 text-[#6b7280]">
                    Live model practice and real salon training sessions
                  </p>

                </div>

              </article>

              {/* Card 2 */}

              <article  className="flex items-center gap-3 rounded-xl border border-[#b48a45] bg-white p-3 md:p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">

                <div  className="flex h-11 w-11 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#f8f0e6] text-2xl md:text-3xl">
                  🎓
                </div>

                <div>

                  <h3 className="text-sm md:text-base font-semibold text-[#b48a45]">
                    Certified Courses
                  </h3>

                  <p className="text-xs md:text-sm leading-5 md:leading-6 text-[#6b7280]">
                    Professional certification with career guidance support
                  </p>

                </div>

              </article>

              {/* Card 3 */}

              <article  className="flex items-center gap-3 rounded-xl border border-[#b48a45] bg-white p-3 md:p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">

                <div  className="flex h-11 w-11 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#f8f0e6] text-2xl md:text-3xl">
                  💄
                </div>

                <div>

                  <h3 className="text-sm md:text-base font-semibold text-[#b48a45]">
                    Latest Techniques
                  </h3>

                  <p className="text-xs md:text-sm leading-5 md:leading-6 text-[#6b7280]">
                    HD, Airbrush, bridal and modern beauty trends
                  </p>

                </div>

              </article>

              {/* Card 4 */}

              <article  className="flex items-center gap-3 rounded-2xl border border-[#b48a45] bg-white p-3 md:p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-11 w-11 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#f8f0e6] text-2xl md:text-3xl">
                  🚀
                </div>

                <div>

                  <h3 className="text-sm md:text-base font-semibold text-[#b48a45]">
                    Career Support
                  </h3>

                  <p className="text-xs md:text-sm leading-5 md:leading-6 text-[#6b7280]">
                    Freelance, salon and beauty industry opportunities
                  </p>

                </div>

              </article>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default memo(About);