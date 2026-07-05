import { memo } from "react";

const features = [
  {
    title: 'Certified Makeup Academy Training',
    description:
      'Get industry-recognized certification from Sonam Roy Makeup Academy to build a strong professional portfolio in the makeup industry.',
  },
  {
    title: 'Practical Hands-On Makeup Classes',
    description:
      'Learn real-world makeup techniques with live practice on models and clients under expert supervision.',
  },
  {
    title: 'Job & Placement Assistance',
    description:
      'We provide complete career guidance, salon placement support, and freelancing opportunities after course completion.',
  },
  {
    title: 'Live Demo & Practice Sessions',
    description:
      'Weekly live makeup demonstrations and practical sessions to improve your skills step-by-step.',
  },
  {
    title: 'Expert Makeup Artist Mentorship',
    description:
      'Learn directly from professional makeup artists with years of industry experience and creative expertise.',
  },
  {
    title: 'Professional Studio Environment',
    description:
      'Train in a premium, fully equipped studio setup designed for real makeup academy and bridal makeup experience.',
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="px-4 py-12 sm:px-5 md:py-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* SEO HEADER */}
        <div className="mb-8 text-center">

          <p className="text-lg font-bold uppercase tracking-[0.15em] text-[#b48a45] sm:text-2xl">
            Why Choose Sonam Roy Makeup Academy
          </p>

          <h2
            id="why-choose-heading"
            className="mt-2 text-base font-bold leading-snug text-[#111827] sm:text-lg"
           >
             Best Makeup Academy in Gaya for Professional Makeup Artist Training & Beauty Courses
          </h2>

        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-[#b48a45]/15 bg-white p-4 shadow-sm"
            >

              <h3 className="mb-2 text-base font-semibold text-[#b48a45]">
                ✓ {feature.title}
              </h3>

              <p className="text-sm leading-6 text-[#5d5d5d]">
                {feature.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default memo(WhyChooseUs);