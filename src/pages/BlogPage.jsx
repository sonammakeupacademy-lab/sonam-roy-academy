import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { supabase } from "../lib/supabase";
import { absoluteUrl, formatDate } from "../blog/blogUtils";

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
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-[#b48a45] transition group-hover:text-[#8a682c]">
            {title}
          </h3>

          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff8ef] text-lg text-[#b48a45] transition group-hover:bg-[#b48a45] group-hover:text-white"
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
   BLOG PAGE
========================================================= */

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [activeTag, setActiveTag] = useState(null);

  /* =======================================================
     LOAD BLOG POSTS
  ======================================================= */

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!supabase) {
        setStatus("error");
        return;
      }

      const { data, error } = await supabase
        .from("posts")
        .select(
          "id,title,slug,excerpt,cover_image,tags,published_at"
        )
        .eq("published", true)
        .order("published_at", {
          ascending: false,
        });

      if (cancelled) return;

      if (error) {
        console.error("Blog posts error:", error);
        setStatus("error");
        return;
      }

      setPosts(data || []);
      setStatus("ready");
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =======================================================
     BLOG TAGS
  ======================================================= */

  const tags = useMemo(
    () =>
      [...new Set(posts.flatMap((post) => post.tags || []))].sort(),
    [posts]
  );

  const visible = activeTag
    ? posts.filter((post) =>
        (post.tags || []).includes(activeTag)
      )
    : posts;

  return (
    <div className="min-h-screen bg-[#fcfaf7]">
      {/* ===================================================
          SEO
      =================================================== */}

      <SEO
        title="Student Blog | Sonam Roy Makeup Academy, Gaya"
        description="Tips, success stories and career guidance for makeup and beautician students at Sonam Roy Makeup Academy in Gaya, Bihar."
        url={absoluteUrl("/blog")}
      />

      {/* ===================================================
          BLOG HEADER
      =================================================== */}

      <section className="border-b border-[#eee4d5] bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b48a45]">
              Sonam Roy Makeup Academy
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#2f2a24] sm:text-4xl lg:text-5xl">
              Student Blog
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Learning tips, student stories, makeup knowledge and
              career guidance for aspiring makeup artists and
              beauticians in Gaya.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">

        {/* =================================================
            BLOG TAG FILTER
        ================================================= */}

        {tags.length > 0 && (
          <section
            className="pt-8"
            aria-label="Filter blog posts by topic"
          >
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTag(null)}
                aria-pressed={activeTag === null}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  activeTag === null
                    ? "border-[#b48a45] bg-[#b48a45] text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-[#b48a45] hover:text-[#8a682c]"
                }`}
              >
                All
              </button>

              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={activeTag === tag}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    activeTag === tag
                      ? "border-[#b48a45] bg-[#b48a45] text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-[#b48a45] hover:text-[#8a682c]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* =================================================
            LOADING
        ================================================= */}

        {status === "loading" && (
          <div className="py-16 text-center">
            <p className="text-gray-500">
              Loading posts…
            </p>
          </div>
        )}

        {/* =================================================
            ERROR
        ================================================= */}

        {status === "error" && (
          <div className="py-16 text-center">
            <p className="text-gray-600">
              Posts could not be loaded. Please refresh the page
              or try again in a few minutes.
            </p>
          </div>
        )}

        {/* =================================================
            EMPTY
        ================================================= */}

        {status === "ready" && visible.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-600">
              No posts here yet. Check back soon.
            </p>
          </div>
        )}

        {/* =================================================
            BLOG POSTS
        ================================================= */}

        {status === "ready" && visible.length > 0 && (
          <section
            className="pt-10"
            aria-label="Student blog articles"
          >
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <li key={post.id}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-[#eee4d5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Blog Image */}

                    {post.cover_image ? (
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        width="640"
                        height="360"
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex aspect-video w-full items-center justify-center bg-[#fff8ef]">
                        <span className="text-sm font-semibold text-[#b48a45]">
                          Sonam Roy Makeup Academy
                        </span>
                      </div>
                    )}

                    {/* Blog Content */}

                    <div className="p-5">
                      <p className="text-sm text-gray-500">
                        {formatDate(post.published_at)}
                      </p>

                      <h2 className="mt-2 text-xl font-bold leading-snug text-[#2f2a24] transition group-hover:text-[#8a682c]">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.excerpt}
                        </p>
                      )}

                      <span className="mt-4 inline-flex text-sm font-semibold text-[#8a682c]">
                        Read Article →
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* =================================================
            COURSE QUICK LINKS
        ================================================= */}

        <section
          className="mt-20 border-t border-[#eadfce] pt-14"
          aria-labelledby="course-quick-links"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b48a45]">
              Professional Training
            </p>

            <h2
              id="course-quick-links"
              className="mt-2 text-2xl font-bold text-[#2f2a24] sm:text-3xl"
            >
              Explore Our Beauty Courses
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Explore professional makeup, hairstyling, beautician
              and nail courses available at Sonam Roy Makeup Academy.
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
          className="mt-20 border-t border-[#eadfce] pt-14"
          aria-labelledby="service-quick-links"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b48a45]">
              Professional Beauty Services
            </p>

            <h2
              id="service-quick-links"
              className="mt-2 text-2xl font-bold text-[#2f2a24] sm:text-3xl"
            >
              Explore Our Makeup Services
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Discover bridal makeup, engagement makeup, party makeup,
              reception makeup, photoshoot makeup and pre-bridal
              packages in Gaya.
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

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="mt-20 overflow-hidden rounded-3xl bg-[#2f2a24] px-6 py-10 text-center sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d8b56a]">
            Sonam Roy Makeup Academy
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Build Your Beauty Career
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Explore professional courses, beauty services and
            useful articles from Sonam Roy Makeup Academy.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/courses"
              className="rounded-full bg-[#b48a45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9c7738]"
            >
              Explore Courses
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#2f2a24]"
            >
              Explore Services
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}