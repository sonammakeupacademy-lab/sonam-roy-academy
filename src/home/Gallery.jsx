import React from "react";
import { Link } from "react-router-dom";
import CloudinaryImage from "../components/common/CloudinaryImage";


const galleryImages = [
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037650/best_makeup_artist_in_gaya_mswjyh.webp",
    alt: "Professional Bridal Makeup Training at Sonam Roy Makeup Academy in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037651/best_beauty_course_in_gaya_pfq1v8.webp",
    alt: "Professional Beauty Parlour Course Practical Session in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037650/best_academy_in_gaya_ruwj0d.webp",
    alt: "Students Learning Professional Makeup at Sonam Roy Makeup Academy",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037943/makeup_class_in_gaya_zaxyle.webp",
    alt: "Hands-on Makeup Class Training at Sonam Roy Makeup Academy in Gaya",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-white px-4 py-10 sm:px-6 md:py-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-6 text-center sm:mb-10">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b48a45]">
            OUR GALLERY
          </p>

          <h2 
            id="gallery-heading"
            className="mt-3 text-lg font-bold leading-snug text-[#111827] sm:text-2xl">
            Showcasing the Artistry of Our Academy & Students
          </h2>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {galleryImages.map((image, index) => (

            <article
              key={image.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#b48a45]/15 bg-white shadow-md transition duration-300"
            >

              {/* Image */}

              <CloudinaryImage
              src={image.src}
              alt={image.alt}
              width={800}
              height={1000}
              maxWidth={400}
              sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
           />

            </article>

          ))}

        </div>

        {/* View More Button */}

        <div className="mt-6 text-center">

          <Link
            to="/gallery"
            aria-label="View complete makeup academy gallery"
            className="inline-flex items-center rounded-full bg-[#b48a45] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#9c7436]"
          >
            View More
          </Link>

        </div>

      </div>
    </section>
  );
}

export default React.memo(Gallery);