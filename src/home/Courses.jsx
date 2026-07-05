import React from "react";
import { Link } from "react-router-dom";
import { businessPhoneLink } from "../constants/siteData";
import CloudinaryImage from "../components/common/CloudinaryImage";

const courses = [
  {
    slug: "basic-makeup-course-in-gaya",
    title: "Foundation Make-Up",
    description:
      "Learn professional makeup techniques for daily, party and salon looks.",
    cardImageAlt:
      "Basic Makeup Course in Gaya at Sonam Roy Makeup Academy",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779043592/basic_makeup_course_in_gaya_l32yed.webp",
  },

  {
    slug: "advance-makeup-course-in-gaya",
    title: "Advance Make-Up",
    description:
      "Master bridal, HD and advanced makeup techniques for professional careers.",
    cardImageAlt:
      "Advanced Makeup Course in Gaya at Sonam Roy Makeup Academy",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779043592/advance_makeup_course_in_gaya_wpmaxf.webp",
  },

  {
    slug: "airbrush-makeup-course-in-gaya",
    title: "Airbrush Make-Up",
    description:
      "Get expert training in flawless airbrush makeup and bridal finishing.",
    cardImageAlt:
      "Airbrush Makeup Course Training in Gaya",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779043592/airbrush_makeup_course_in_gaya_onrqub.webp",
  },

  {
    slug: "hairstyling-course-in-gaya",
    title: "Hairstyling Course",
    description:
      "Learn bridal, party and salon hairstyling from industry professionals.",
    cardImageAlt:
      "Professional Hairstyling Course in Gaya",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779085669/best_hairstyling_course_in_gaya_xesi9v.webp",
  },

  {
    slug: "skin-beautician-course-in-gaya",
    title: "Skin Beautician Course",
    description:
      "Master facials, cleanup, skincare treatments and salon beauty services.",
    cardImageAlt:
      "Skin Beautician Course Training in Gaya",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779043592/beautician_course_in_gaya_uqjmip.webp",
  },

  {
    slug: "nail-extension-course-in-gaya",
    title: "Nail Extension Course",
    description:
      "Learn nail extensions, nail art and professional nail care techniques.",
    cardImageAlt:
      "Professional Nail Extension Course in Gaya",
    image:
      "https://res.cloudinary.com/dascytq6n/image/upload/v1779043592/nail_art_course_in_gaya_fenoyk.webp",
  },
];

function Courses() {
  return (
    <section
      id="courses"
      className="bg-[#fffdf9] px-5 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-10 text-center">
          <h2 className="text-lg font-bold uppercase tracking-[0.18em] text-[#b48a45] sm:text-2xl md:text-3xl">
            Our Professional Beauty Courses
          </h2>
        </div>

        {/* Courses Grid */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course, index) => (

            <article
              key={course.slug}
               className="group overflow-hidden rounded-xl border border-[#b48a45]/20 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1"
            >

              {/* Image */}

              <div className="h-44 overflow-hidden sm:h-52 md:h-64">

                <CloudinaryImage
                 src={course.image}
                 alt={course.cardImageAlt}
                 width={600}
                 height={400}
                 maxWidth={600}
                 sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                 loading={index === 0 ? "eager" : "lazy"}
                 fetchPriority={index === 0 ? "high" : "auto"}
                 decoding="async"
                 className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
               />

              </div>

              {/* Content */}

              <div className="p-5 md:p-6">

                <h3 className="mt-2 text-[17px] font-bold text-[#b48a45]">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {course.description}
                </p>

                <div className="mt-5 flex gap-3">

                  <Link
                    to={`/courses/${course.slug}`}
                    className="flex-1 rounded-full border border-[#b48a45] py-3 text-center text-sm font-semibold text-[#b48a45] transition hover:bg-[#b48a45] hover:text-white"
                  >
                    View Details
                  </Link>

                  <a
                    href={businessPhoneLink}
                    aria-label={`Call for ${course.title}`}
                    className="flex-1 rounded-full bg-[#b48a45] py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Enroll Now
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default React.memo(Courses);