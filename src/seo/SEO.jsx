import { Helmet } from "react-helmet-async";
import {
  businessName,
  businessEmail,
  businessPhone,
  businessAddress,
  siteUrl,
  siteTitle,
  siteDescription,
  siteKeywords,
  siteImage,
  siteLogo,
  siteAuthor,
  socialLinks,
  openingHours,
} from "../constants/siteData";

function SEO({
  title = siteTitle,
  description = siteDescription,
  keywords = siteKeywords,
  url = siteUrl,
  image = siteImage,
  type = "website",
}) {
  const schemaData = {
    "@context": "https://schema.org",

    "@type": "BeautySchool",

    name: businessName,

    alternateName:
      "Best Makeup Academy in Gaya",

    url,

    image,

    logo: siteLogo,

    description,

    slogan:
      "Professional Beauty & Makeup Training Institute in Gaya",

    telephone: businessPhone,

    "@id": `${siteUrl}#organization`,

    email: businessEmail,

    priceRange: "₹₹",

    foundingDate: "2021",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        businessAddress.streetAddress,

      addressLocality:
        businessAddress.addressLocality,

      addressRegion:
        businessAddress.addressRegion,

      postalCode:
        businessAddress.postalCode,

      addressCountry:
        businessAddress.addressCountry,
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: "24.796276771893236",

      longitude: "85.010910096693",
    },

    openingHoursSpecification: openingHours.map((day) => ({
    "@type": "OpeningHoursSpecification",

     dayOfWeek: day.dayOfWeek,

     opens: day.opens,

     closes: day.closes,
    })),

    sameAs: [
      socialLinks.instagram,
      socialLinks.facebook,
      socialLinks.youtube,
    ],

    contactPoint: {
   "@type": "ContactPoint",

    telephone: businessPhone,

    contactType: "customer service",

    areaServed: "IN",


    availableLanguage: [
      "English",
      "Hindi",
     ],
    },

    areaServed: [
      "Gaya",
      "Bihar",
      "India",
    ],

    knowsAbout: [
      "Makeup Course",
      "Beautician Course",
      "Hairstyling Course",
      "Nail Extension Course",
      "Mehndi Course",
      "Bridal Makeup",
    ],

    hasMap:
      "https://www.google.com/maps/place/Sonam+Roy+Makeup+Academy/@24.7960868,85.0082601,17z/data=!3m1!4b1!4m6!3m5!1s0x39f32b73146257d1:0xe6c1b1081b73b8b0!8m2!3d24.796082!4d85.010835!16s%2Fg%2F11y8f2gg8j",

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name:
        "Professional Beauty & Makeup Courses",

      itemListElement: [
        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Course",

            name:
              "Basic Makeup Course",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Course",

            name:
              "Advance Makeup Course",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Course",

            name:
              "Airbrush Makeup Course",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Course",

            name:
              "Hairstyling Course",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Course",

            name:
              "Skin Beautician Course",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Course",

            name:
              "Nail Extension Course",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
           "@type": "Service",

            name: "Standard Pre Bridal Package",
        },
       },

        {
         "@type": "Offer",

         itemOffered: {
         "@type": "Service",

         name: "Premium Pre Bridal Package",
        },
       },

       {
       "@type": "Offer",

        itemOffered: {
        "@type": "Service",

        name: "Ultra Premium Pre Bridal Package",
       },
       },
      ],
    },
  };

  const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${siteUrl}#website`,

  url: siteUrl,

  name: businessName,

  description: siteDescription,

  publisher: {
    "@id": `${siteUrl}#organization`,
  },
};

  return (
    <Helmet prioritizeSeoTags>

      {/* Primary SEO */}

      <title>{title}</title>

      <meta
        name="title"
        content={title}
      />

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="robots"
        content="index,follow"
      />

      <meta
        name="googlebot"
        content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      />

      <meta
        name="author"
        content={siteAuthor}
      />

      <meta
        name="language"
        content="English"
      />

      <meta
        name="theme-color"
        content="#b68d40"
      />

      {/* Mobile SEO */}

      <meta
        name="format-detection"
        content="telephone=no"
      />

      {/* Canonical */}

      <link
        rel="canonical"
        href={url}
      />

      {/* Performance */}

      <link
        rel="preconnect"
        href="https://res.cloudinary.com"
        crossOrigin=""
      />

      <link
        rel="dns-prefetch"
        href="https://res.cloudinary.com"
      />

      {/* Open Graph SEO */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content="Sonam Roy Makeup Academy"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:image:alt"
        content={title}
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* Twitter SEO */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:site"
        content="@muasonam_roy"
      />

      <meta
        name="twitter:creator"
        content="@muasonam_roy"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      <meta
        name="twitter:image:alt"
        content={title}
      />

      {/* Structured Data */}

      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

    </Helmet>
  );
}

export default SEO;