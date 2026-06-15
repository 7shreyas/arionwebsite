"use client";

import { useState } from "react";

const roles = [
  "Recruiter",
  "Hiring Manager",
  "Operations / Ops Lead",
  "Executive / Owner",
  "Other",
];

const inputClass =
  "w-full border-2 border-[#2d2d2d] px-3.5 py-2.5 text-sm text-[#2d2d2d] bg-white placeholder:text-[#2d2d2d]/30 focus:outline-none focus:border-[#FF6B2B] transition-colors";
const inputStyle = { borderRadius: "8px 30px 8px 30px / 30px 8px 30px 8px", fontFamily: "var(--font-patrick-hand)" };

export default function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div
        className="bg-white border-2 border-[#2d2d2d] p-10 text-center shadow-[5px_5px_0px_0px_#2d2d2d]"
        style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
      >
        <div
          className="w-14 h-14 bg-green-100 border-2 border-green-500 flex items-center justify-center mx-auto mb-5"
          style={{ borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%" }}
        >
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-[#2d2d2d] mb-2">
          Request received.
        </h3>
        <p
          className="text-[#2d2d2d]/55 text-sm leading-relaxed max-w-xs mx-auto"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          We&apos;ll reach out within one business day to learn more about your firm
          and determine if you&apos;re a good fit for early access.
        </p>
      </div>
    );
  }

  return (
    <div
      className="bg-white border-2 border-[#2d2d2d] p-8 shadow-[5px_5px_0px_0px_#2d2d2d]"
      style={{ borderRadius: "15px 225px 15px 255px / 225px 15px 255px 15px" }}
    >
      <h3 className="font-heading text-xl font-bold text-[#2d2d2d] mb-1">
        Request Early Access
      </h3>
      <p
        className="text-sm text-[#2d2d2d]/45 mb-7"
        style={{ fontFamily: "var(--font-patrick-hand)" }}
      >
        Tell us about your firm and we&apos;ll be in touch.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold text-[#2d2d2d]/60 mb-1.5 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Full Name <span className="text-[#FF6B2B]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              placeholder="Jane Smith"
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-xs font-bold text-[#2d2d2d]/60 mb-1.5 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              Company <span className="text-[#FF6B2B]">*</span>
            </label>
            <input
              id="company"
              type="text"
              name="company"
              required
              placeholder="Acme Staffing"
              className={inputClass}
              style={inputStyle}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-[#2d2d2d]/60 mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            Work Email <span className="text-[#FF6B2B]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="jane@acmestaffing.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-xs font-bold text-[#2d2d2d]/60 mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            Your Role <span className="text-[#FF6B2B]">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            defaultValue=""
            className={inputClass + " appearance-none"}
            style={inputStyle}
          >
            <option value="" disabled>Select your role</option>
            {roles.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-[#2d2d2d]/60 mb-1.5 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-patrick-hand)" }}
          >
            About your interview process
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your current interview process — how many roles, what tools you use, where the friction is."
            className={inputClass + " resize-none"}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FF6B2B] text-white font-heading font-bold py-3.5 border-2 border-[#2d2d2d] shadow-[4px_4px_0px_0px_#2d2d2d] hover:shadow-[2px_2px_0px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d2d2d]"
          style={{ borderRadius: "100px 8px 100px 8px / 8px 100px 8px 100px" }}
        >
          {loading ? "Sending…" : "Request Early Access ✏️"}
        </button>

        <p
          className="text-xs text-[#2d2d2d]/35 text-center"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          We reply within one business day. No spam, no sales cadences.
        </p>
      </form>
    </div>
  );
}
