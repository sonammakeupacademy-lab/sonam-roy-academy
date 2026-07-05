import { Helmet } from "react-helmet-async";
import CloudinaryImage from "../components/common/CloudinaryImage";

const allGalleryImages = [
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037942/best_makeup_training_in_gaya_caomrf.webp",

    alt: "Best makeup training classes in Gaya at Sonam Roy Makeup Academy",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037651/makeup_academy_in_gaya_mvppxl.webp",

    alt: "Professional makeup academy practical training in Gaya Bihar",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037650/best_makeup_institute_in_gaya_m4f9gi.webp",

    alt: "Students learning bridal makeup at Sonam Roy Makeup Institute Gaya",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037731/beauty_parlour_course_in_gaya_vr32sn.webp",

    alt: "Beauty parlour and beautician training classes in Gaya",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037941/best_bridal_makeup_in_gaya_cka3ws.webp",

    alt: "Professional bridal makeup artistry by Sonam Roy Makeup Academy",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037942/makeup_in_gaya_hlldpy.webp",

    alt: "Luxury bridal makeup and beauty services in Gaya Bihar",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037942/beautician_in_gaya_rcn1ip.webp",

    alt: "Beautician practical sessions at Sonam Roy Makeup Academy",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037943/best_makeup_course_in_gaya_iiiu6y.webp",

    alt: "Professional makeup course student practical training in Gaya",
  },

  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1779037943/beauty_servic_in_gaya_z34r8x.webp",

    alt: "Beauty salon and makeup services training at Sonam Roy Academy",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782032566/best_makeup_artist_qte6t0.webp",

    alt: "Professional bridal makeup service and training at Sonam Roy Makeup Academy Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782032566/makeup_course_in_gaya_udr5wc.webp",

    alt: "HD bridal makeup artist creating flawless wedding looks in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782032566/best_makeup_course_in_gaya_d7ns7k.webp",

    alt: "Best makeup academy in Gaya offering professional makeup courses",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782032566/best_makeup_artist_in_gaya_tbfcet.webp",

    alt: "Bridal makeup training classes for aspiring makeup artists in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782032568/best_beauty_academy_in_gaya_j37ion.webp",

    alt: "Airbrush and HD makeup services by certified makeup artists in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782036252/makeup_course_in_gaya_er8oes.webp",

    alt: "Elegant bridal makeover with premium makeup techniques at Sonam Roy Academy",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782036252/makeup_arist_in_gaya_xprfba.webp",

    alt: "Professional makeup course with practical training in Gaya Bihar",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782036253/best_makeup_artist_in_gaya_kqyjqh.webp",

    alt: "Party makeup and bridal makeup services at Sonam Roy Makeup Academy",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782036253/best_beauty_academy_in_gaya_gxamor.webp",

    alt: "Students learning advanced makeup techniques at Sonam Roy Beauty Academy",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782036253/beauty_parlour_course_in_gaya_w5qflx.webp",

    alt: "Certified makeup artist training course for girls and women in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782036253/beauty_course_in_gaya_fscn8a.webp",

    alt: "Modern bridal makeup look with HD finish by Sonam Roy Makeup Artist",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782036253/Nail_extension_course_in_gaya_qfkfyz.webp",

    alt: "Beauty and makeup training institute offering career courses in Gaya",
  },
  {
    src: "https://res.cloudinary.com/dascytq6n/image/upload/v1782037640/best_beauty_academy_in_gaya_p9jv7e.webp",

    alt: "Best bridal makeup and makeup classes at Sonam Roy Makeup Academy Gaya",
  },
];

function GalleryPage() {

  const gallerySchema = {
    "@context": "https://schema.org",

    "@type": "ImageGallery",

    name: "Sonam Roy Makeup Academy Gallery",

    description:
      "Professional makeup academy gallery showcasing bridal makeup, hairstyling, beautician training, nail art, and student practical sessions in Gaya.",

    url: "https://www.sonamroyacademy.com/gallery",

    image: allGalleryImages.map((item) => ({
  "@type": "ImageObject",
  contentUrl: item.src,
  description: item.alt,
})),
  };

  return (
    <>
      <Helmet>

        <title>
          Gallery | Sonam Roy Makeup Academy Gaya
        </title>

        <meta
          name="description"
          content="Explore bridal makeup, hairstyling, nail art, beautician training, and professional beauty course gallery at Sonam Roy Makeup Academy in Gaya."
        />

        <meta
          name="keywords"
          content="Makeup Academy Gallery Gaya, Bridal Makeup Gallery Bihar, Beautician Course Photos, Makeup Training Gallery, Hairstyling Course Images, Nail Art Classes Gaya"
        />

        <link
          rel="canonical"
          href="https://www.sonamroyacademy.com/gallery"
        />

        {/* OPEN GRAPH */}

        <meta
          property="og:title"
          content="Gallery | Sonam Roy Makeup Academy"
        />

        <meta
          property="og:description"
          content="View professional bridal makeup, hairstyling, nail art, beautician training, and beauty academy practical sessions in Gaya."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.sonamroyacademy.com/gallery"
        />

        <meta
          property="og:image"
          content={allGalleryImages[0].src}
        />

        {/* TWITTER */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Gallery | Sonam Roy Makeup Academy"
        />

        <meta
          name="twitter:description"
          content="Explore bridal makeup, beauty courses, hairstyling, and student practical gallery at Sonam Roy Makeup Academy."
        />

        <meta
          name="twitter:image"
          content={allGalleryImages[0].src}
        />

        {/* SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify(gallerySchema)}
        </script>

      </Helmet>

      <section className="bg-gradient-to-b from-[#fffdf9] via-white to-[#fffaf3] px-4 py-10 sm:px-6 md:py-16">

        <div className="mx-auto max-w-7xl">

          {/* HEADING */}

          <div className="mb-6 text-center sm:mb-10">

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b48a45] sm:text-base">
              Academy & Student Gallery
            </span>

            <h1 className="mt-2 text-xl font-bold leading-snug text-[#111827] sm:text-3xl">
              Showcasing the Artistry of Our Academy & Students
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#5b5b5b] sm:text-base">
              Explore professional bridal makeup looks,
              hairstyling artistry, beautician practical
              sessions, nail art training, and student
              transformations at Sonam Roy Makeup Academy
              in Gaya, Bihar.
            </p>

          </div>

          {/* GALLERY GRID */}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {allGalleryImages.map((image, index) => (

              <figure
                key={image.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#b48a45]/15 bg-white shadow-md transition duration-300"
              >

              <CloudinaryImage
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                maxWidth={600}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                sizes="
                (max-width:640px) 100vw,
                (max-width:1024px) 50vw,
                (max-width:1280px) 33vw,
                25vw
                "
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              </figure>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default GalleryPage;