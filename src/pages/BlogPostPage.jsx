import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import SEO from "../seo/SEO";
import { supabase } from "../lib/supabase";
import {
  absoluteUrl,
  formatDate,
  readingTime,
} from "../blog/blogUtils";
import {
  businessName,
  siteUrl,
} from "../constants/siteData";

import "../blog/blog.css";

/* =========================================================
   COURSE QUICK LINKS
========================================================= */

const courseLinks = [
  {
    slug: "basic-makeup-course-in-gaya",
    title: "Foundation Make-Up",
    description:
      "Learn professional makeup techniques for daily, party and salon looks.",
  },
  {
    slug: "advance-makeup-course-in-gaya",
    title: "Advance Make-Up",
    description:
      "Master bridal, HD and advanced makeup techniques for professional careers.",
  },
  {
    slug: "airbrush-makeup-course-in-gaya",
    title: "Airbrush Make-Up",
    description:
      "Get expert training in flawless airbrush makeup and bridal finishing.",
  },
  {
    slug: "hairstyling-course-in-gaya",
    title: "Hairstyling Course",
    description:
      "Learn bridal, party and salon hairstyling from industry professionals.",
  },
  {
    slug: "skin-beautician-course-in-gaya",
    title: "Skin Beautician Course",
    description:
      "Master facials, cleanup, skincare treatments and salon beauty services.",
  },
  {
    slug: "nail-extension-course-in-gaya",
    title: "Nail Extension Course",
    description:
      "Learn nail extensions, nail art and professional nail care techniques.",
  },
];

/* =========================================================
   SERVICE QUICK LINKS
========================================================= */

const serviceLinks = [
  {
    slug: "bridal-makeup-in-gaya",
    title: "Bridal Makeup",
    description:
      "Luxury HD and Airbrush bridal makeup services for weddings with flawless finishing and elegant styling.",
  },
  {
    slug: "engagement-makeup-in-gaya",
    title: "Engagement Makeup",
    description:
      "Professional engagement makeup with soft glam looks, HD finish and long-lasting beauty.",
  },
  {
    slug: "haldi-mehandi-makeup-in-gaya",
    title: "Haldi Mehendi Makeup",
    description:
      "Fresh and lightweight haldi and mehendi makeup with waterproof finish and elegant styling.",
  },
  {
    slug: "party-makeup-in-gaya",
    title: "Party Makeup",
    description:
      "Trendy party makeup looks for weddings, receptions and special occasions with professional finishing.",
  },
  {
    slug: "photoshoot-makeup-in-gaya",
    title: "Photoshoot Makeup",
    description:
      "Camera-ready HD makeup for photoshoots, pre-wedding shoots and fashion styling sessions.",
  },
  {
    slug: "reception-makeup-in-gaya",
    title: "Reception Makeup",
    description:
      "Elegant reception makeup with premium products, flawless finish and long-lasting wear.",
  },
  {
    slug: "standard-pre-bridal-in-gaya",
    title: "Standard Pre-Bridal Package",
    description:
      "Complete pre-bridal grooming package including facial, waxing, hair spa and skin care treatments.",
  },
  {
    slug: "premium-pre-bridal-in-gaya",
    title: "Premium Pre-Bridal Package",
    description:
      "Premium bridal preparation package with diamond facial, manicure, pedicure and advanced beauty care.",
  },
  {
    slug: "ultra-premium-pre-bridal-in-gaya",
    title: "Ultra Premium Pre-Bridal Package",
    description:
      "Luxury pre-bridal package with body polishing, premium facial treatments and complete bridal grooming.",
  },
];

/* =========================================================
   QUICK LINK CARD
========================================================= */

function QuickLinkCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col rounded-2xl border border-[#b48a45]/20 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b48a45] hover:shadow-lg"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-[#b48a45] transition-colors group-hover:text-[#8a682c]">
            {title}
          </h3>

          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff8ef] text-lg text-[#b48a45] transition-all duration-300 group-hover:bg-[#b48a45] group-hover:text-white"
          >
            →
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>

      <span className="mt-5 text-sm font-semibold text-[#8a682c]">
        View Details →
      </span>
    </Link>
  );
}

/* =========================================================
   BLOG POST PAGE
========================================================= */

export default function BlogPostPage() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading");

  /* =======================================================
     LOAD BLOG POST
  ======================================================= */

  useEffect(() => {
    let cancelled = false;

    setStatus("loading");

    async function load() {
      if (!supabase) {
        setStatus("error");
        return;
      }

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (cancelled) return;

      if (error) {
        console.error("Blog post error:", error);
        setStatus("error");
        return;
      }

      if (!data) {
        setStatus("missing");
        return;
      }

      setPost(data);
      setStatus("ready");

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  /* =======================================================
     LOADING
  ======================================================= */

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:px-6">
        <p className="text-neutral-500">
          Loading…
        </p>
      </div>
    );
  }

  /* =======================================================
     ERROR / MISSING
  ======================================================= */

  if (status === "missing" || status === "error") {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:px-6">
        <Helmet>
          <title>
            {status === "missing"
              ? `Post not found | ${businessName}`
              : `Post unavailable | ${businessName}`}
          </title>

          <meta
            name="robots"
            content="noindex,nofollow"
          />
        </Helmet>

        <h1 className="text-2xl font-bold text-[#2f2a24]">
          {status === "missing"
            ? "This post was not found"
            : "This post could not be loaded"}
        </h1>

        <p className="mt-3 text-neutral-600">
          {status === "missing"
            ? "It may have been moved or unpublished."
            : "Please refresh the page or try again in a few minutes."}
        </p>

        <Link
          to="/blog"
          className="mt-6 inline-flex rounded-full border border-[#b48a45] px-5 py-2.5 text-sm font-semibold text-[#8a682c] transition hover:bg-[#b48a45] hover:text-white"
        >
          ← Back to all posts
        </Link>
      </div>
    );
  }

  /* =======================================================
     SEO DATA
  ======================================================= */

  const url = absoluteUrl(`/blog/${post.slug}`);

  const description =
    post.meta_description ||
    post.excerpt ||
    undefined;

  /* =======================================================
     ARTICLE SCHEMA
  ======================================================= */

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image: post.cover_image
      ? [post.cover_image]
      : undefined,
    datePublished: post.published_at,
    dateModified:
      post.updated_at ||
      post.published_at,
    author: {
      "@type": "Organization",
      name: businessName,
    },
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-screen bg-[#fcfaf7] px-4 pb-24 pt-24 sm:px-6 sm:pt-28">

      {/* =================================================
          SEO
      ================================================= */}

      <SEO
        title={`${post.title} | ${businessName}`}
        description={description}
        keywords={
          post.tags?.length
            ? post.tags.join(", ")
            : undefined
        }
        image={
          post.cover_image || undefined
        }
        url={url}
        type="article"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* =================================================
          ARTICLE
      ================================================= */}

      <article>

        {/* =================================================
            ARTICLE HEADER
        ================================================= */}

        <header className="mx-auto max-w-3xl">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="text-sm text-neutral-500"
          >
            <Link
              to="/"
              className="transition hover:text-[#8a682c] hover:underline"
            >
              Home
            </Link>

            <span className="mx-2">
              /
            </span>

            <Link
              to="/blog"
              className="transition hover:text-[#8a682c] hover:underline"
            >
              Blog
            </Link>
          </nav>

          {/* Title */}

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#2f2a24] sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Date + Reading Time */}

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
            <span>
              {formatDate(post.published_at)}
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              {readingTime(post.content)} min read
            </span>
          </div>

          {/* Cover Image */}

          {post.cover_image && (
            <div className="mt-8 overflow-hidden rounded-2xl shadow-sm">
              <img
                src={post.cover_image}
                alt={post.title}
                width="1200"
                height="630"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[1200/630] w-full object-cover"
              />
            </div>
          )}
        </header>

        {/* =================================================
            ARTICLE CONTENT
        ================================================= */}

        <div className="blog-prose mx-auto mt-10 max-w-[68ch]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* =================================================
            TAGS
        ================================================= */}

        {post.tags?.length > 0 && (
          <footer className="mx-auto mt-12 flex max-w-[68ch] flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#b48a45]/30 bg-white px-3 py-1 text-sm text-neutral-600"
              >
                #{tag}
              </span>
            ))}
          </footer>
        )}

        {/* =================================================
            COURSE QUICK LINKS
        ================================================= */}

        <section
          className="mx-auto mt-20 max-w-6xl border-t border-[#eadfce] pt-14"
          aria-labelledby="blog-course-links"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b48a45]">
              Professional Training
            </p>

            <h2
              id="blog-course-links"
              className="mt-2 text-2xl font-bold text-[#2f2a24] sm:text-3xl"
            >
              Explore Our Beauty Courses
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Interested in building a career in the beauty
              industry? Explore our professional makeup,
              hairstyling, beautician and nail courses.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courseLinks.map((course) => (
              <QuickLinkCard
                key={course.slug}
                title={course.title}
                description={course.description}
                to={`/courses/${course.slug}`}
              />
            ))}
          </div>

        </section>

        {/* =================================================
            SERVICE QUICK LINKS
        ================================================= */}

        <section
          className="mx-auto mt-20 max-w-6xl border-t border-[#eadfce] pt-14"
          aria-labelledby="blog-service-links"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b48a45]">
              Professional Beauty Services
            </p>

            <h2
              id="blog-service-links"
              className="mt-2 text-2xl font-bold text-[#2f2a24] sm:text-3xl"
            >
              Explore Our Makeup Services
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore bridal makeup, engagement makeup, party
              makeup, reception makeup, photoshoot makeup and
              professional pre-bridal packages in Gaya.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((service) => (
              <QuickLinkCard
                key={service.slug}
                title={service.title}
                description={service.description}
                to={`/services/${service.slug}`}
              />
            ))}
          </div>
        </section>

      </article>
    </div>
  );
}