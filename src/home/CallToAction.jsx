function CallToAction() {
  return (
    <section className="mx-auto mb-10 max-w-7xl px-4 sm:px-6">

      <div className="relative overflow-hidden rounded-3xl border border-[#b48a45] bg-[#111827] px-4 py-6 text-white shadow-soft sm:px-8 sm:py-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,157,95,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_22%)]" />
        
        <div className="relative grid gap-5 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">

          <div>

            <p className="text-[11px] uppercase tracking-[0.18em] text-[#d2c39b] sm:text-sm">
              Elevate your artistry
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-[#b48a45] sm:text-4xl">
              Beauty Begins With the Right Training
            </h2>

          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-end">

            <a
              href="#courses"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#b48a45] bg-white/10 px-5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:border-[#b48a45] hover:text-[#b48a45] sm:h-12 sm:px-6 sm:text-sm"
            >
              View Courses
            </a>

            <a
              href="#verify"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#b48a45] bg-gold px-5 text-xs font-semibold uppercase tracking-[0.08em] text-[#111827] transition hover:bg-[#b38f5b] sm:h-12 sm:px-6 sm:text-sm"
            >
              Verify Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;