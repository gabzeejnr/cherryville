import { AccentButton } from "../Buttons";

/**
 * ContactFormSection — "Send us a Message"
 *
 * Layout: a message form on the left, a cream sidebar card on the right
 * with Contact Information (WhatsApp, Email, Phone, Location) plus a
 * "Connect With Us" row of social icons at the bottom.
 *
 * FUNCTIONALITY:
 * - WhatsApp/Email contact items and the WhatsApp/Email icons in
 *   "Connect With Us" are fully wired (open chat / mailto).
 * - LinkedIn and Twitter/X icons link out to placeholder handles below
 *   (SOCIAL_LINKS) — replace those with your real profile URLs.
 * - The message form itself has no backend yet — inputs only.
 */

const WHATSAPP_NUMBER = "2348064265176"; // TODO: replace with your number

const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/cherryville", // TODO: replace with real handle
  twitter: "https://x.com/cherryville", // TODO: replace with real handle
};

function whatsappUrl(message) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}

function ContactInfoItem({ icon, label, children, href }) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-bold text-slate-900 text-sm mb-0.5">{label}</p>
        <div className="text-sm text-gray-500 leading-relaxed">{children}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialIconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#0f766e] hover:border-[#0f766e]/40 transition"
    >
      {children}
    </a>
  );
}

export default function ContactFormSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left: form */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="you@organization.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Organization
            </label>
            <input
              type="text"
              placeholder="Your company or organization"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              What can we help with?
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30">
              <option>Select a reason</option>
              <option>Programs</option>
              <option>Fellowship</option>
              <option>Corporate Training</option>
              <option>Partnerships</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              placeholder="Tell us how we can help..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30"
            />
          </div>

          <AccentButton
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white transition"
            style={{ backgroundColor: "#0f2e2a" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Send Message
          </AccentButton>
        </div>

        {/* Right: contact info sidebar */}
        <div className="rounded-2xl p-6 h-fit" style={{ backgroundColor: "#fdf2e9" }}>
          <div className="space-y-5">
            <ContactInfoItem
              href={whatsappUrl("Hello! I'm interested in learning more about Cherryville Limited's programs.")}
              label="WhatsApp"
              icon={
                <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              Fastest response
            </ContactInfoItem>

            <ContactInfoItem
              href="mailto:cherryvilletech@gmail.com"
              label="Email"
              icon={
                <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              cherryvilletech@gmail.com
            </ContactInfoItem>

            <ContactInfoItem
              label="Phone"
              icon={
                <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              +234 806 426 5176
              <br />
              Mon-Fri, 9am-5pm WAT
            </ContactInfoItem>

            <ContactInfoItem
              label="Location"
              icon={
                <svg className="w-4 h-4 text-[#0f766e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              Lagos, Nigeria
            </ContactInfoItem>
          </div>

          <div className="border-t border-black/10 mt-6 pt-6">
            <p className="font-bold text-slate-900 text-sm mb-4">Connect With Us</p>
            <div className="flex items-center gap-3">
              <SocialIconLink
                href={whatsappUrl("Hello! I'm interested in learning more about Cherryville Limited's programs.")}
                label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </SocialIconLink>

              <SocialIconLink href="mailto:cherryvilletech@gmail.com" label="Email">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </SocialIconLink>

              <SocialIconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 18.34H5.67V9.5h2.67v8.84zM7 8.34a1.55 1.55 0 111.55-1.55A1.55 1.55 0 017 8.34zM18.34 18.34h-2.67v-4.3c0-1.03-.02-2.35-1.43-2.35-1.44 0-1.66 1.12-1.66 2.28v4.37H10V9.5h2.56v1.18h.04a2.8 2.8 0 012.53-1.39c2.7 0 3.2 1.78 3.2 4.1v5.05z" />
                </svg>
              </SocialIconLink>

              <SocialIconLink href={SOCIAL_LINKS.twitter} label="Twitter / X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.9 2H22l-7.2 8.2L23.3 22h-6.6l-5.2-6.8L5.5 22H2.3l7.7-8.8L1 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 4H5.5l12.2 16z" />
                </svg>
              </SocialIconLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}