import { memo } from "react";
import { FaGoogle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "The bridal makeup training was absolutely amazing. I learned HD makeup, airbrush techniques, and client handling professionally.",
    name: "Sushma Kumari",
    role: "Makeup Student",
  },

  {
    quote:
      "The hairstyling course helped me master modern bridal hairstyles and professional salon techniques very easily.",
    name: "Maya Singh",
    role: "Professional Hair Stylist",
  },

  {
    quote:
      "I learned facials, cleanup, skincare and salon management professionally with practical classes and guidance.",
    name: "Nandani Kumari",
    role: "Certified Beautician",
  },

  {
    quote:
      "The nail extension course was detailed and professional. I now work as a freelance nail artist confidently.",
    name: "Soni Gupta",
    role: "Nail Artist",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#fffdf9] px-4 py-16 sm:px-6 md:py-24"
    >

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45] sm:text-base">
            Google Reviews
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#111827] sm:text-4xl">
            Loved By Our Students
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-[#666] sm:text-base">
            Real experiences from students who transformed their passion
            into a successful beauty career.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {testimonials.map((testimonial, index) => (

            <Link
              key={testimonial.name}
              to="/write-review"
              aria-label={`Read Google review by ${testimonial.name}`}
              className="group rounded-2xl border border-[#eadfcf] bg-white p-4 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37] hover:shadow-[0_15px_45px_rgba(180,138,69,0.18)]"
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                {/* User */}
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#b48a45] to-[#d4af37] text-sm font-bold text-white">

                    {testimonial.name.charAt(0)}

                  </div>

                  <div>

                    <h4 className="text-[13px] sm:text-sm font-semibold text-[#111827]">
                      {testimonial.name}
                    </h4>

                    <p className="mt-1 text-[11px] sm:text-xs text-[#777]">
                      {testimonial.role}
                    </p>

                  </div>

                </div>

                {/* Google */}
                <FaGoogle 
                 aria-hidden="true"
                 className="text-xl text-[#EA4335]" />

              </div>

              {/* Stars */}
              <div className="mt-5 flex gap-1 text-sm text-[#fbbc05]">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}
              <p className="mt-4 text-[13px] leading-6 text-[#444]">

                “{testimonial.quote}”

              </p>

              {/* Bottom */}
              <div className="mt-4 border-t border-[#f1e6d7] pt-3">

                <p className="text-xs uppercase tracking-[0.18em] text-[#b48a45]">
                  Verified Google Review
                </p>

              </div>

            </Link>

          ))}

        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <Link
          to="/write-review"
          aria-label="Write a Google Review"
          className="inline-flex items-center gap-2 rounded-full bg-[#b48a45] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#9f7838]"
           >
          <FaGoogle 
          aria-hidden="true"
          className="text-sm" />
          Review On Google
         </Link>
       </div>

      </div>
    </section>
  );
}

export default memo(Testimonials);