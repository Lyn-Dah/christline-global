import { useState } from "react";
import heroimg from "./assets/heroimg.jpg";
import logo from "./assets/logo.jpg";
import img1 from "./assets/img1.jpg";

// --- Content data ---------------------------------------------------------

const SERVICES = [
  { icon: "✈️", title: "Visa Application Support", desc: "Guidance on requirements, forms, and appointments so your application is accurate and on time." },
  { icon: "🌍", title: "School Application", desc: "One-on-one sessions to map out the right destination, program, and Scholarship for your goals." },
  { icon: "🏨", title: "Flight & Accommodation Assistance", desc: "Help finding and booking flights and stays that fit your budget and schedule." },
  { icon: "📑", title: "Documentation Guidance", desc: "Clear checklists and review of the paperwork embassies and airlines actually require." },
  { icon: "🧳", title: "Holiday & Tour Planning", desc: "Custom itineraries for holidays and tours, tailored to how you like to travel." },
  { icon: "💼", title: "Business Travel Support", desc: "Fast, reliable coordination for corporate trips and time-sensitive travel needs." },
];

const WHY = [
  { n: "01", title: "Professional application support", desc: "Every document and form reviewed with care before it's submitted.", color: "bg-orange-500" },
  { n: "02", title: "Personalized consultation", desc: "Advice shaped around your destination, timeline, and circumstances.", color: "bg-teal-500" },
  { n: "03", title: "Clear process", desc: "You always know what's done, what's next, and what's needed from you.", color: "bg-amber-400" },
  { n: "04", title: "Experienced travel assistance", desc: "Practical know-how built from guiding real travellers through real applications.", color: "bg-orange-500" },
  { n: "05", title: "Ghana-based support", desc: "Local, accessible, and easy to reach when you need an answer quickly.", color: "bg-teal-500" },
];

const STEPS = [
  { n: "1", tag: "CONSULT", title: "Consultation", desc: "Tell us where you want to go.", ring: "border-orange-400" },
  { n: "2", tag: "ASSESS", title: "Assessment", desc: "We assess your travel needs and documentation.", ring: "border-amber-300" },
  { n: "3", tag: "APPLY", title: "Application Support", desc: "We guide you through the process.", ring: "border-teal-400" },
  { n: "4", tag: "FLY", title: "Travel", desc: "You prepare to travel with confidence.", ring: "border-blue-400" },
];

const TESTIMONIALS = [
  { name: "Vivian Fosuaa.", route: "ACC → LON", quote: "The whole visa process felt confusing until Christline broke it down step by step. I always knew exactly what to do next.", seed: "testi-ama" },
  { name: "Christiana Mensah.", route: "ACC → YYZ", quote: "Professional, patient, and honest about timelines. My documentation was accepted on the first submission.", seed: "testi-kwabena" },
  { name: "Robert Mills.", route: "ACC → DXB", quote: "From consultation to booking, everything was handled for our company trip. Made business travel simple.", seed: "testi-efua" },
];

const DESTINATIONS = [
  { flag: "🇬🇧", name: "United Kingdom", code: "ACC–LON", seed: "dest-uk" },
  { flag: "🇺🇸", name: "United States", code: "ACC–NYC", seed: "dest-usa" },
  { flag: "🇨🇦", name: "Canada", code: "ACC–YYZ", seed: "dest-canada" },
  { flag: "🇦🇪", name: "UAE", code: "ACC–DXB", seed: "dest-uae" },
  { flag: "🇪🇺", name: "Schengen Area", code: "ACC–CDG", seed: "dest-schengen" },
  { flag: "🇦🇺", name: "Australia", code: "ACC–SYD", seed: "dest-australia" },
];

const WHATSAPP_URL = "https://wa.me/233246526851";

// --- Small building blocks -------------------------------------------------

function LogoMark({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <circle cx="32" cy="32" r="30" fill="#0f172a" stroke="#fbbf24" strokeWidth="3" />
      <circle cx="32" cy="32" r="22" fill="none" stroke="#60a5fa" strokeWidth="1.4" strokeDasharray="2 3" />
      <path d="M14 34 Q32 24 50 34" fill="none" stroke="#60a5fa" strokeWidth="1.4" />
      <path d="M16 42 Q32 34 48 42" fill="none" stroke="#60a5fa" strokeWidth="1.4" />
      <g transform="translate(32,32) rotate(-40)">
        <path d="M0,-16 L4,-4 L15,0 L4,3 L3,14 L0,7 L-3,14 L-4,3 L-15,0 L-4,-4 Z" fill="#f97316" stroke="#fff" strokeWidth="1" />
      </g>
    </svg>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase font-bold mb-4 ${light ? "text-amber-300" : "text-orange-500"}`}>
      <span>✈️</span>
      {children}
    </div>
  );
}

function Badge({ children, rotate = "-rotate-3", bg = "bg-amber-300" }) {
  return (
    <span className={`inline-flex items-center gap-1 ${bg} text-slate-900 font-bold text-xs px-3 py-1.5 rounded-full border-2 border-slate-900 shadow-[3px_3px_0_0_#0f172a] ${rotate}`}>
      {children}
    </span>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform ${className}`}
    >
      {children}
    </a>
  );
}

// --- Main component ----------------------------------------------------

export default function ChristlineLandingPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-800 font-sans">
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 24s linear infinite; white-space: nowrap; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b-4 border-slate-900">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <LogoMark /> */}
            <img src={logo} alt="Christline Global Travel Consult logo" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
            <div className="font-serif leading-tight">
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                CHRISTLINE <span className="text-orange-500">GLOBAL</span> TRAVEL CONSULTANCY
              </div>
              {/* <div className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Fly with confidence</div> */}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#how" className="hover:text-orange-500">Process</a>
            <a href="#testimonials" className="hover:text-orange-500">Testimonials</a>
            <a href="#destinations" className="hover:text-orange-500">Destinations</a>
          </div>
          <a href="#apply" className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full font-bold text-sm border-2 border-slate-900 bg-white shadow-[4px_4px_0_0_#dbeafe] hover:shadow-[6px_6px_0_0_#dbeafe] transition-shadow">
            Book a Consultation
          </a>
          <button
            className="md:hidden border-2 border-slate-900 rounded-lg px-3 py-1.5 font-bold"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
        {navOpen && (
          <div className="md:hidden flex flex-col gap-3 px-6 pb-4 text-sm font-semibold text-slate-700">
            <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
            <a href="#how" onClick={() => setNavOpen(false)}>Process</a>
            <a href="#testimonials" onClick={() => setNavOpen(false)}>Testimonials</a>
            <a href="#destinations" onClick={() => setNavOpen(false)}>Destinations</a>
            <a href="#apply" onClick={() => setNavOpen(false)}>Book a Consultation</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-stone-50 to-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* <Eyebrow>Trusted travel guidance</Eyebrow> */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-900">
              Travel with confidence.<br />
              We&apos;ll handle the <span className="text-orange-500">complexity.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-900 max-w-md leading-relaxed">
              From visa paperwork to flight bookings, Christline Global Travel Consultancy guides you through every step of travelling abroad — clearly, honestly, and personally.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="#apply" className="bg-orange-500 text-white">
                Book a Consultation →
              </PrimaryButton>
              <PrimaryButton href={WHATSAPP_URL} className="bg-green-500 text-white">
                📞 WhatsApp Us
              </PrimaryButton>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* <Badge>✅ Visa Support</Badge> */}
              {/* <Badge bg="bg-orange-200" rotate="rotate-1">🌟 Trusted Locally</Badge> */}
              {/* <Badge bg="bg-teal-200" rotate="-rotate-1">⏱️ Fast Response</Badge> */}
            </div>

            <div className="mt-10 flex border-2 border-dashed border-slate-900 rounded-2xl bg-white px-6 py-4 max-w-lg shadow-[5px_5px_0_0_#dbeafe]">
              <div className="flex-1 text-center border-r-2 border-dashed border-slate-900">
                <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">From</div>
                <div className="font-mono font-bold text-slate-900 text-sm mt-1">ACCRA</div>
              </div>
              <div className="flex-1 text-center border-r-2 border-dashed border-slate-900">
                <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Support</div>
                <div className="font-mono font-bold text-slate-900 text-sm mt-1">END-TO-END</div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Status</div>
                <div className="font-mono font-bold text-slate-900 text-sm mt-1">READY</div>
              </div>
            </div>
          </div>

          <div className="relative h-96">
            {/* REPLACE PHOTOS: swap these picsum placeholders with real photos */}
            <div className="absolute -top-4 -left-3 z-10 bg-white border-2 border-slate-900 rounded-xl px-4 py-2 font-mono text-xs font-bold text-slate-900 shadow-[4px_4px_0_0_#0f172a] -rotate-3">
              30+ Destinations
            </div>
            
            <div className="absolute inset-4 rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0_0_#fbbf24] overflow-hidden">
              <img
                src={heroimg}
                alt="Traveler ready to fly"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-8 -right-6 w-32 h-24 rounded-2xl border-4 border-white shadow-[5px_5px_0_0_#0f172a] overflow-hidden rotate-6">
              <img src="https://picsum.photos/seed/christline-chip-a/300/220" alt="Passport and boarding pass" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* <div className="absolute bottom-6 -left-6 w-32 h-24 rounded-2xl border-4 border-white shadow-[5px_5px_0_0_#0f172a] overflow-hidden -rotate-6">
              <img src={img} alt="Airplane window view" className="w-full h-full object-cover" loading="lazy" />
            </div> */}
            <div className="absolute -bottom-6 right-8 z-10 bg-white border-2 border-slate-900 rounded-xl px-4 py-2 font-mono text-xs font-bold text-slate-900 shadow-[4px_4px_0_0_#0f172a] rotate-3">
              🌟 4.9/5 Client Rating
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-slate-900 text-white py-3 overflow-hidden border-y-4 border-amber-400">
        <div className="marquee-track inline-flex gap-10 font-mono font-bold text-sm tracking-wider uppercase">
          {Array(2).fill(0).map((_, i) => (
            <span key={i} className="inline-flex gap-10">
              <span>✈️ VISA APPLICATION</span>
              <span className="text-amber-300">✈️ SCHOOL APPLICATION</span>
              <span>✈️ FLIGHT &amp; ACCOMMODATION</span>
              <span className="text-amber-300">✈️ DOCUMENTATION GUIDANCE</span>
              <span>✈️ HOLIDAY &amp; TOUR PLANNING</span>
              <span className="text-amber-300">✈️ BUSINESS TRAVEL</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">Everything you need to travel, in one place</h2>
            <p className="mt-4 text-slate-600">Whichever stage you&apos;re at, we can pick up from there.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`bg-white border-2 border-slate-900 rounded-2xl p-7 transition-transform hover:-translate-x-1  hover:-translate-y-1 ${
                  i % 3 === 0 ? "shadow-[5px_5px_0_0_#dbeafe] hover:shadow-[8px_8px_0_0_#0f172a]" :
                  i % 3 === 1 ? "shadow-[5px_5px_0_0_#fde68a] hover:shadow-[8px_8px_0_0_#0f172a]" :
                  "shadow-[5px_5px_0_0_#fed7aa] hover:shadow-[8px_8px_0_0_#0f172a]"
                }`}
              >
                <div className="w-12 h-12 rounded-xl border-2 border-slate-900 bg-blue-50 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <h3 className="font-bold text-slate-900 mt-4">{s.title}</h3>
                <p className="text-sm text-slate-900 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">Support that actually gets you there</h2>
            <div className="mt-7">
              {WHY.map((w, i) => (
                <div key={w.n} className={`flex gap-4 py-4 ${i !== WHY.length - 1 ? "border-b-2 border-dashed border-slate-200" : ""}`}>
                  <div className={`shrink-0 w-9 h-9 rounded-lg ${w.color} text-white font-mono font-bold text-sm flex items-center justify-center`}>
                    {w.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{w.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0_0_#fbbf24] overflow-hidden min-h-[380px] flex flex-col justify-between p-9">
            {/* REPLACE PHOTO: swap with a real team/office photo */}
            <img src={img1} alt="Christline Global Travel Consult team" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 to-slate-900/70" />
            <div className="relative z-10">
              {/* <span className="inline-block font-mono text-xs tracking-widest uppercase border-2 border-amber-300 text-amber-300 rounded-full px-3 py-1.5">
                Verified &middot; Client-first
              </span>
              <p className="font-serif text-2xl text-white mt-6 leading-snug">
                &ldquo;Clarity beats speed. We&apos;d rather get your application right the first time.&rdquo;
              </p> */}
            </div>
            <div className="relative z-10 text-sm text-blue-100">Christline Global Travel Consult — Accra, Ghana</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <Eyebrow light>How It Works</Eyebrow>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl">A clear path, from first message to boarding</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div key={s.n} className={`bg-white/5 border-2 ${s.ring} rounded-2xl p-6`}>
                <div className="flex items-center gap-3 font-mono text-xs font-bold text-amber-300">
                  <span className="w-9 h-9 rounded-full bg-white text-slate-900 font-serif font-bold flex items-center justify-center">{s.n}</span>
                  {s.tag}
                </div>
                <h4 className="font-bold mt-4">{s.title}</h4>
                <p className="text-sm text-blue-100 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <Eyebrow>Client Testimonials</Eyebrow>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`bg-white border-2 border-slate-900 rounded-2xl p-7 flex flex-col gap-4 ${
                  i === 0 ? "shadow-[5px_5px_0_0_#dbeafe]" : i === 1 ? "shadow-[5px_5px_0_0_#fde68a]" : "shadow-[5px_5px_0_0_#fed7aa]"
                }`}
              >
                <div className="text-amber-400 text-sm tracking-widest">★★★★★</div>
                <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-auto">
                  {/* <img
                    src={`https://picsum.photos/seed/${t.seed}/100/100`}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                    loading="lazy"
                  /> */}
                  <div>
                    <div className="font-bold text-sm text-slate-900">{t.name}</div>
                    <div className="font-mono text-xs text-slate-500">{t.route}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <Eyebrow light>Destinations</Eyebrow>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl">Popular routes we support</h2>
            <p className="mt-4 text-blue-100">A selection of destinations we regularly assist clients with — if yours isn&apos;t listed, ask us.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {DESTINATIONS.map((d) => (
              <div key={d.name} className="relative h-36 rounded-2xl overflow-hidden border-2 border-white/25 hover:border-amber-300 transition-colors">
                {/* REPLACE PHOTO: swap with a real landmark photo for this destination */}
                <img src={`https://picsum.photos/seed/${d.seed}/300/300`} alt={d.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/20 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-3 text-center">
                  <div className="text-2xl">{d.flag}</div>
                  <div className="font-bold text-xs mt-1">{d.name}</div>
                  <div className="font-mono text-[10px] text-amber-300 mt-0.5">{d.code}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY / FORM */}
      <section id="apply" className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Start Your Application</Eyebrow>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">Ready when you are</h2>
            <p className="mt-4 text-slate-600">Fill out the short form and our team will reach out to begin your consultation.</p>

            <div className="mt-8 space-y-0">
              {[
                { icon: "📞", label: "WhatsApp", value: "+233 24 652 6851" },
                { icon: "✉️", label: "Email", value: "christlineglobaltravelconsult@gmail.com" },
                { icon: "📍", label: "Based in", value: "Accra, Ghana" },
              ].map((c, i, arr) => (
                <div key={c.label} className={`flex items-center gap-4 py-4 border-dashed border-slate-900 ${i === 0 ? "border-t-2" : ""} border-b-2`}>
                  <div className="w-11 h-11 rounded-xl border-2 border-slate-900 bg-white flex items-center justify-center text-lg shadow-[3px_3px_0_0_#dbeafe]">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">{c.label}</div>
                    <div className="font-bold text-slate-900">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-4 border-slate-900 rounded-3xl p-2 shadow-[8px_8px_0_0_#fbbf24]">
            <div className="flex items-center gap-2 px-4 py-3 font-mono text-xs text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
              &nbsp; application-form
            </div>
            {/*
              GOOGLE FORM EMBED
              1. Open your form in Google Forms > Send > the "<>" embed icon
              2. Copy the src URL from the provided <iframe>
              3. Replace the placeholder <div> below with:
                 <iframe src="YOUR_GOOGLE_FORM_EMBED_URL" className="w-full min-h-[520px] rounded-xl border-0" title="Application Form" />
            */}
            <div className="border-2 border-dashed border-slate-900 rounded-2xl min-h-[420px] flex items-center justify-center text-center p-8 bg-blue-50">
              <div>
                
                <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
                  <strong className="text-slate-900"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBlu3d17F2pmfug4mV65ZSIKehTEJKptv7DsaCMuIbsGTnXA/viewform?embedded=true" className="w-full min-h-[520px] rounded-xl border-4 " title="Application Form">Loading…</iframe></strong><br />
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-blue-900 text-white text-center py-24">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* <Eyebrow light>Ready to travel?</Eyebrow> */}
          <h2 className="font-serif font-bold text-4xl  text-orange-500 sm:text-5xl">Let&apos;s get your journey started.</h2>
          <p className="mt-4 text-slate-900 text-lg">Message us on WhatsApp for a quick, no-pressure free consultation.</p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <PrimaryButton href={WHATSAPP_URL} className="bg-green-600 text-white">
              📞 WhatsApp Us Today
            </PrimaryButton>
            <PrimaryButton href="#apply" className="bg-orange-500 text-white">
              Book a Consultation
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-blue-200 py-10 border-t-4 border-amber-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 text-white font-serif font-bold">
            <LogoMark className="w-7 h-7" />
            Christline Global Travel Consult
          </div>
          <div>christlineglobaltravelconsult@gmail.com &middot; +233 24 652 6851 &middot; Accra, Ghana</div>
          <div>&copy; 2026 Christline Global Travel Consult. All rights reserved.</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-emerald-400 border-4 border-slate-900 flex items-center justify-center text-2xl shadow-[5px_5px_0_0_#0f172a] hover:scale-105 hover:-rotate-3 transition-transform"
      >
        📞
      </a>
    </div>
  );
}
