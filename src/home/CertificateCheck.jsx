import { useState, memo } from "react";

function CertificateCheck() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (event) => {
    event.preventDefault();

    if (!code) {
      setResult({
        type: "error",
        message: "Please enter certificate number.",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `https://sheetdb.io/api/v1/1z3khbhur48ua/search?certificate_no=${encodeURIComponent(code)}`
      );

      const data = await response.json();

      if (data.length > 0) {
        setResult({
          type: "success",
          student: data[0],
        });
      } else {
        setResult({
          type: "error",
          message: "Invalid certificate number.",
        });
      }
    } catch (error) {
      console.error(error);

      setResult({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section
      id="verify"
      className="bg-white px-4 py-10 sm:px-6 md:py-16"
    >

      {/* Heading */}
      <div className="mb-8 text-center">

        <p className="text-xl font-bold uppercase tracking-[0.08em] text-[#b48a45] sm:text-3xl">
          CERTIFICATE VERIFICATION
        </p>

      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-5xl rounded-xl border border-[#b48a45]/20 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:p-8">

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left Content */}
          <div>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#111827] sm:text-4xl">
              Check & Verify Student Certification Details
            </h2>

            <p className="mt-3 max-w-lg text-[14px] leading-6 sm:text-base text-[#5b5b5b]">
              Enter your certificate number below to verify your
              Sonam Roy Makeup Academy certification.
            </p>

            <div className="mt-5 space-y-2">

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-xl bg-[#d4af37]" />

                <p className="text-sm text-[#444]">
                  Fast & Secure Verification
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-xl bg-[#d4af37]" />

                <p className="text-sm text-[#444]">
                  Secure Student Record Management System
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-xl bg-[#d4af37]" />

                <p className="text-sm text-[#444]">
                  Trusted Professional Certification
                </p>
              </div>

            </div>

          </div>

          {/* Verification Card */}
          <div className="rounded-xl border border-[#b48a45]/60 bg-[#fffaf4] p-4 sm:p-6 shadow-lg transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(180,138,69,0.20)]">

            {/* Form */}
            <form
              onSubmit={handleVerify}
              className="space-y-5"
            >

              <div>

                <label className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-[#555]">
                  Certificate Number
                </label>

                <input
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase().replace(/\s/g, ""))}
                  placeholder="input here"
                  pattern="^SRMA-B\d{2}-M(0[1-9]|1[0-2])-\d{2}[A-Z]\d{2}$"
                  title="Enter a valid certificate number (Example: SRMA-B11-M05-xxxx)"
                  className="w-full rounded-xl border border-[#b48a45]/40 bg-white px-4 py-3 text-sm text-[#111827] outline-none transition-all duration-300 focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/20"
                />

              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#b48a45] bg-[#b48a45] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#a57d34] hover:shadow-[0_0_25px_rgba(180,138,69,0.30)] disabled:opacity-70"
              >
                {loading ? "Verifying..." : "Verify Certificate"}
              </button>

            </form>

            {/* Result Section */}
            <div className="mt-6 rounded-xl border border-[#b48a45]/30 bg-white p-4 shadow-[0_15px_50px_rgba(0,0,0,0.06)]">

              <p className="text-sm uppercase tracking-[0.25em] text-[#777]">
                Verification Result
              </p>

              <div className="mt-4 min-h-[90px] rounded-xl border border-[#b48a45]/20 bg-[#faf7f2] p-4">

                {!result && (
                  <p className="text-sm leading-6 text-[#666]">
                    Enter your certificate number above to check
                    verification status.
                  </p>
                )}

                {/* Success */}
                {result?.type === "success" && (

                  <div>

                    <div className="mb-4 flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-100 text-green-600">
                        ✓
                      </div>

                      <h3 className="text-base font-bold text-green-600">
                        Certificate Verified
                      </h3>

                    </div>

                    <div className="space-y-2 text-[13px] text-[#333]">

                      <p>
                        <span className="font-semibold">
                          Student Name:
                        </span>{" "}
                        {result.student.student_name}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Course:
                        </span>{" "}
                        {result.student.course}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Issue Date:
                        </span>{" "}
                        {result.student.issue_date}
                      </p>

                      <p>
                        <span className="font-semibold">
                          Status:
                        </span>{" "}
                        {result.student.status}
                      </p>

                    </div>

                  </div>

                )}

                {/* Error */}
                {result?.type === "error" && (

                  <div>

                    <div className="mb-3 flex items-center gap-2">

                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-600">
                        ✕
                      </div>

                      <h3 className="text-base font-bold text-red-600">
                        Verification Failed
                      </h3>

                    </div>

                    <p className="text-sm leading-6 text-[#666]">
                      {result.message}
                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default memo(CertificateCheck);