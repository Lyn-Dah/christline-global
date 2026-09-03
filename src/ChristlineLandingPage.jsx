// // import { useState } from "react";
// // import heroimg from "./assets/heroimg.jpg";
// // import logo from "./assets/logo.jpg";
// // import img1 from "./assets/img1.jpg";

// // // --- Content data ---------------------------------------------------------

// // const SERVICES = [
// //   { icon: "✈️", title: "Visa Application Support", desc: "Guidance on requirements, forms, and appointments so your application is accurate and on time." },
// //   { icon: "🌍", title: "School Application", desc: "One-on-one sessions to map out the right destination, program, and Scholarship for your goals." },
// //   { icon: "🏨", title: "Flight & Accommodation Assistance", desc: "Help finding and booking flights and stays that fit your budget and schedule." },
// //   { icon: "📑", title: "Documentation Guidance", desc: "Clear checklists and review of the paperwork embassies and airlines actually require." },
// //   { icon: "🧳", title: "Holiday & Tour Planning", desc: "Custom itineraries for holidays and tours, tailored to how you like to travel." },
// //   { icon: "💼", title: "Business Travel Support", desc: "Fast, reliable coordination for corporate trips and time-sensitive travel needs." },
// // ];

// // const WHY = [
// //   { n: "01", title: "Professional application support", desc: "Every document and form reviewed with care before it's submitted.", color: "bg-orange-500" },
// //   { n: "02", title: "Personalized consultation", desc: "Advice shaped around your destination, timeline, and circumstances.", color: "bg-teal-500" },
// //   { n: "03", title: "Clear process", desc: "You always know what's done, what's next, and what's needed from you.", color: "bg-amber-400" },
// //   { n: "04", title: "Experienced travel assistance", desc: "Practical know-how built from guiding real travellers through real applications.", color: "bg-orange-500" },
// //   { n: "05", title: "Ghana-based support", desc: "Local, accessible, and easy to reach when you need an answer quickly.", color: "bg-teal-500" },
// // ];

// // const STEPS = [
// //   { n: "1", tag: "CONSULT", title: "Consultation", desc: "Tell us where you want to go.", ring: "border-orange-400" },
// //   { n: "2", tag: "ASSESS", title: "Assessment", desc: "We assess your travel needs and documentation.", ring: "border-amber-300" },
// //   { n: "3", tag: "APPLY", title: "Application Support", desc: "We guide you through the process.", ring: "border-teal-400" },
// //   { n: "4", tag: "FLY", title: "Travel", desc: "You prepare to travel with confidence.", ring: "border-blue-400" },
// // ];

// // const TESTIMONIALS = [
// //   { name: "Vivian Fosuaa.", route: "ACC → LON", quote: "The whole visa process felt confusing until Christline broke it down step by step. I always knew exactly what to do next.", seed: "testi-ama" },
// //   { name: "Christiana Mensah.", route: "ACC → YYZ", quote: "Professional, patient, and honest about timelines. My documentation was accepted on the first submission.", seed: "testi-kwabena" },
// //   { name: "Robert Mills.", route: "ACC → DXB", quote: "From consultation to booking, everything was handled for our company trip. Made business travel simple.", seed: "testi-efua" },
// // ];

// // const DESTINATIONS = [
// //   { flag: "🇬🇧", name: "United Kingdom", code: "ACC–LON", seed: "dest-uk" },
// //   { flag: "🇺🇸", name: "United States", code: "ACC–NYC", seed: "dest-usa" },
// //   { flag: "🇨🇦", name: "Canada", code: "ACC–YYZ", seed: "dest-canada" },
// //   { flag: "🇦🇪", name: "UAE", code: "ACC–DXB", seed: "dest-uae" },
// //   { flag: "🇪🇺", name: "Schengen Area", code: "ACC–CDG", seed: "dest-schengen" },
// //   { flag: "🇦🇺", name: "Australia", code: "ACC–SYD", seed: "dest-australia" },
// // ];

// // const WHATSAPP_URL = "https://wa.me/233246526851";

// // // --- Small building blocks -------------------------------------------------

// // function LogoMark({ className = "w-10 h-10" }) {
// //   return (
// //     <svg viewBox="0 0 64 64" className={className}>
// //       <circle cx="32" cy="32" r="30" fill="#0f172a" stroke="#fbbf24" strokeWidth="3" />
// //       <circle cx="32" cy="32" r="22" fill="none" stroke="#60a5fa" strokeWidth="1.4" strokeDasharray="2 3" />
// //       <path d="M14 34 Q32 24 50 34" fill="none" stroke="#60a5fa" strokeWidth="1.4" />
// //       <path d="M16 42 Q32 34 48 42" fill="none" stroke="#60a5fa" strokeWidth="1.4" />
// //       <g transform="translate(32,32) rotate(-40)">
// //         <path d="M0,-16 L4,-4 L15,0 L4,3 L3,14 L0,7 L-3,14 L-4,3 L-15,0 L-4,-4 Z" fill="#f97316" stroke="#fff" strokeWidth="1" />
// //       </g>
// //     </svg>
// //   );
// // }

// // function Eyebrow({ children, light = false }) {
// //   return (
// //     <div className={`inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase font-bold mb-4 ${light ? "text-amber-300" : "text-orange-500"}`}>
// //       <span>✈️</span>
// //       {children}
// //     </div>
// //   );
// // }

// // function Badge({ children, rotate = "-rotate-3", bg = "bg-amber-300" }) {
// //   return (
// //     <span className={`inline-flex items-center gap-1 ${bg} text-slate-900 font-bold text-xs px-3 py-1.5 rounded-full border-2 border-slate-900 shadow-[3px_3px_0_0_#0f172a] ${rotate}`}>
// //       {children}
// //     </span>
// //   );
// // }

// // function PrimaryButton({ href, children, className = "" }) {
// //   return (
// //     <a
// //       href={href}
// //       target={href.startsWith("http") ? "_blank" : undefined}
// //       rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
// //       className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[6px_6px_0_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform ${className}`}
// //     >
// //       {children}
// //     </a>
// //   );
// // }

// // // --- Main component ----------------------------------------------------

// // export default function ChristlineLandingPage() {
// //   const [navOpen, setNavOpen] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-stone-50 text-slate-800 font-sans">
// //       <style>{`
// //         @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
// //         .marquee-track { animation: marquee 24s linear infinite; white-space: nowrap; }
// //         @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
// //       `}</style>

// //       {/* NAV */}
// //       <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b-4 border-slate-900">
// //         <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
// //           <div className="flex items-center gap-3">
// //             {/* <LogoMark /> */}
// //             <img src={logo} alt="Christline Global Travel Consult logo" className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" />
// //             <div className="font-serif leading-tight">
// //               <div className="font-bold text-slate-900 text-sm sm:text-base">
// //                 CHRISTLINE <span className="text-orange-500">GLOBAL</span> TRAVEL CONSULTANCY
// //               </div>
// //               {/* <div className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Fly with confidence</div> */}
// //             </div>
// //           </div>
// //           <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
// //             <a href="#services" className="hover:text-orange-500">Services</a>
// //             <a href="#how" className="hover:text-orange-500">Process</a>
// //             <a href="#testimonials" className="hover:text-orange-500">Testimonials</a>
// //             <a href="#destinations" className="hover:text-orange-500">Destinations</a>
// //           </div>
// //           <a href="#apply" className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full font-bold text-sm border-2 border-slate-900 bg-white shadow-[4px_4px_0_0_#dbeafe] hover:shadow-[6px_6px_0_0_#dbeafe] transition-shadow">
// //             Book a Consultation
// //           </a>
// //           <button
// //             className="md:hidden border-2 border-slate-900 rounded-lg px-3 py-1.5 font-bold"
// //             onClick={() => setNavOpen((v) => !v)}
// //             aria-label="Toggle menu"
// //           >
// //             ☰
// //           </button>
// //         </nav>
// //         {navOpen && (
// //           <div className="md:hidden flex flex-col gap-3 px-6 pb-4 text-sm font-semibold text-slate-700">
// //             <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
// //             <a href="#how" onClick={() => setNavOpen(false)}>Process</a>
// //             <a href="#testimonials" onClick={() => setNavOpen(false)}>Testimonials</a>
// //             <a href="#destinations" onClick={() => setNavOpen(false)}>Destinations</a>
// //             <a href="#apply" onClick={() => setNavOpen(false)}>Book a Consultation</a>
// //           </div>
// //         )}
// //       </header>

// //       {/* HERO */}
// //       <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-stone-50 to-amber-50 py-20">
// //         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
// //           <div>
// //             {/* <Eyebrow>Trusted travel guidance</Eyebrow> */}
// //             <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-slate-900">
// //               Travel with confidence.<br />
// //               We&apos;ll handle the <span className="text-orange-500">complexity.</span>
// //             </h1>
// //             <p className="mt-6 text-lg text-slate-900 max-w-md leading-relaxed">
// //               From visa paperwork to flight bookings, Christline Global Travel Consultancy guides you through every step of travelling abroad — clearly, honestly, and personally.
// //             </p>
// //             <div className="mt-8 flex flex-wrap gap-4">
// //               <PrimaryButton href="#apply" className="bg-orange-500 text-white">
// //                 Book a Consultation →
// //               </PrimaryButton>
// //               <PrimaryButton href={WHATSAPP_URL} className="bg-green-500 text-white">
// //                 📞 WhatsApp Us
// //               </PrimaryButton>
// //             </div>
// //             <div className="mt-6 flex flex-wrap gap-3">
// //               {/* <Badge>✅ Visa Support</Badge> */}
// //               {/* <Badge bg="bg-orange-200" rotate="rotate-1">🌟 Trusted Locally</Badge> */}
// //               {/* <Badge bg="bg-teal-200" rotate="-rotate-1">⏱️ Fast Response</Badge> */}
// //             </div>

// //             <div className="mt-10 flex border-2 border-dashed border-slate-900 rounded-2xl bg-white px-6 py-4 max-w-lg shadow-[5px_5px_0_0_#dbeafe]">
// //               <div className="flex-1 text-center border-r-2 border-dashed border-slate-900">
// //                 <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">From</div>
// //                 <div className="font-mono font-bold text-slate-900 text-sm mt-1">ACCRA</div>
// //               </div>
// //               <div className="flex-1 text-center border-r-2 border-dashed border-slate-900">
// //                 <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Support</div>
// //                 <div className="font-mono font-bold text-slate-900 text-sm mt-1">END-TO-END</div>
// //               </div>
// //               <div className="flex-1 text-center">
// //                 <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Status</div>
// //                 <div className="font-mono font-bold text-slate-900 text-sm mt-1">READY</div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="relative h-96">
// //             {/* REPLACE PHOTOS: swap these picsum placeholders with real photos */}
// //             <div className="absolute -top-4 -left-3 z-10 bg-white border-2 border-slate-900 rounded-xl px-4 py-2 font-mono text-xs font-bold text-slate-900 shadow-[4px_4px_0_0_#0f172a] -rotate-3">
// //               30+ Destinations
// //             </div>
            
// //             <div className="absolute inset-4 rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0_0_#fbbf24] overflow-hidden">
// //               <img
// //                 src={heroimg}
// //                 alt="Traveler ready to fly"
// //                 className="w-full h-full object-cover"
// //                 loading="lazy"
// //               />
// //             </div>
// //             <div className="absolute top-8 -right-6 w-32 h-24 rounded-2xl border-4 border-white shadow-[5px_5px_0_0_#0f172a] overflow-hidden rotate-6">
// //               <img src="https://picsum.photos/seed/christline-chip-a/300/220" alt="Passport and boarding pass" className="w-full h-full object-cover" loading="lazy" />
// //             </div>
// //             {/* <div className="absolute bottom-6 -left-6 w-32 h-24 rounded-2xl border-4 border-white shadow-[5px_5px_0_0_#0f172a] overflow-hidden -rotate-6">
// //               <img src={img} alt="Airplane window view" className="w-full h-full object-cover" loading="lazy" />
// //             </div> */}
// //             <div className="absolute -bottom-6 right-8 z-10 bg-white border-2 border-slate-900 rounded-xl px-4 py-2 font-mono text-xs font-bold text-slate-900 shadow-[4px_4px_0_0_#0f172a] rotate-3">
// //               🌟 4.9/5 Client Rating
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* MARQUEE */}
// //       <div className="bg-slate-900 text-white py-3 overflow-hidden border-y-4 border-amber-400">
// //         <div className="marquee-track inline-flex gap-10 font-mono font-bold text-sm tracking-wider uppercase">
// //           {Array(2).fill(0).map((_, i) => (
// //             <span key={i} className="inline-flex gap-10">
// //               <span>✈️ VISA APPLICATION</span>
// //               <span className="text-amber-300">✈️ SCHOOL APPLICATION</span>
// //               <span>✈️ FLIGHT &amp; ACCOMMODATION</span>
// //               <span className="text-amber-300">✈️ DOCUMENTATION GUIDANCE</span>
// //               <span>✈️ HOLIDAY &amp; TOUR PLANNING</span>
// //               <span className="text-amber-300">✈️ BUSINESS TRAVEL</span>
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //       {/* SERVICES */}
// //       <section id="services" className="py-24 bg-blue-50">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <div className="max-w-xl mb-12">
// //             <Eyebrow>Our Services</Eyebrow>
// //             <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">Everything you need to travel, in one place</h2>
// //             <p className="mt-4 text-slate-600">Whichever stage you&apos;re at, we can pick up from there.</p>
// //           </div>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {SERVICES.map((s, i) => (
// //               <div
// //                 key={s.title}
// //                 className={`bg-white border-2 border-slate-900 rounded-2xl p-7 transition-transform hover:-translate-x-1  hover:-translate-y-1 ${
// //                   i % 3 === 0 ? "shadow-[5px_5px_0_0_#dbeafe] hover:shadow-[8px_8px_0_0_#0f172a]" :
// //                   i % 3 === 1 ? "shadow-[5px_5px_0_0_#fde68a] hover:shadow-[8px_8px_0_0_#0f172a]" :
// //                   "shadow-[5px_5px_0_0_#fed7aa] hover:shadow-[8px_8px_0_0_#0f172a]"
// //                 }`}
// //               >
// //                 <div className="w-12 h-12 rounded-xl border-2 border-slate-900 bg-blue-50 flex items-center justify-center text-2xl">
// //                   {s.icon}
// //                 </div>
// //                 <h3 className="font-bold text-slate-900 mt-4">{s.title}</h3>
// //                 <p className="text-sm text-slate-900 mt-2 leading-relaxed">{s.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* WHY CHOOSE US */}
// //       <section className="py-24">
// //         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
// //           <div>
// //             <Eyebrow>Why Choose Us</Eyebrow>
// //             <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">Support that actually gets you there</h2>
// //             <div className="mt-7">
// //               {WHY.map((w, i) => (
// //                 <div key={w.n} className={`flex gap-4 py-4 ${i !== WHY.length - 1 ? "border-b-2 border-dashed border-slate-200" : ""}`}>
// //                   <div className={`shrink-0 w-9 h-9 rounded-lg ${w.color} text-white font-mono font-bold text-sm flex items-center justify-center`}>
// //                     {w.n}
// //                   </div>
// //                   <div>
// //                     <h4 className="font-bold text-slate-900">{w.title}</h4>
// //                     <p className="text-sm text-slate-600 mt-1">{w.desc}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="relative rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0_0_#fbbf24] overflow-hidden min-h-[380px] flex flex-col justify-between p-9">
// //             {/* REPLACE PHOTO: swap with a real team/office photo */}
// //             <img src={img1} alt="Christline Global Travel Consult team" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// //             <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 to-slate-900/70" />
// //             <div className="relative z-10">
// //               {/* <span className="inline-block font-mono text-xs tracking-widest uppercase border-2 border-amber-300 text-amber-300 rounded-full px-3 py-1.5">
// //                 Verified &middot; Client-first
// //               </span>
// //               <p className="font-serif text-2xl text-white mt-6 leading-snug">
// //                 &ldquo;Clarity beats speed. We&apos;d rather get your application right the first time.&rdquo;
// //               </p> */}
// //             </div>
// //             <div className="relative z-10 text-sm text-blue-100">Christline Global Travel Consult — Accra, Ghana</div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* HOW IT WORKS */}
// //       <section id="how" className="py-24 bg-slate-900 text-white">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <div className="max-w-xl mb-12">
// //             <Eyebrow light>How It Works</Eyebrow>
// //             <h2 className="font-serif font-bold text-3xl sm:text-4xl">A clear path, from first message to boarding</h2>
// //           </div>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
// //             {STEPS.map((s) => (
// //               <div key={s.n} className={`bg-white/5 border-2 ${s.ring} rounded-2xl p-6`}>
// //                 <div className="flex items-center gap-3 font-mono text-xs font-bold text-amber-300">
// //                   <span className="w-9 h-9 rounded-full bg-white text-slate-900 font-serif font-bold flex items-center justify-center">{s.n}</span>
// //                   {s.tag}
// //                 </div>
// //                 <h4 className="font-bold mt-4">{s.title}</h4>
// //                 <p className="text-sm text-blue-100 mt-2">{s.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* TESTIMONIALS */}
// //       <section id="testimonials" className="py-24">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <div className="max-w-xl mb-12">
// //             <Eyebrow>Client Testimonials</Eyebrow>
// //             <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">What our clients say</h2>
// //           </div>
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {TESTIMONIALS.map((t, i) => (
// //               <div
// //                 key={t.name}
// //                 className={`bg-white border-2 border-slate-900 rounded-2xl p-7 flex flex-col gap-4 ${
// //                   i === 0 ? "shadow-[5px_5px_0_0_#dbeafe]" : i === 1 ? "shadow-[5px_5px_0_0_#fde68a]" : "shadow-[5px_5px_0_0_#fed7aa]"
// //                 }`}
// //               >
// //                 <div className="text-amber-400 text-sm tracking-widest">★★★★★</div>
// //                 <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
// //                 <div className="flex items-center gap-3 mt-auto">
// //                   {/* <img
// //                     src={`https://picsum.photos/seed/${t.seed}/100/100`}
// //                     alt={t.name}
// //                     className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
// //                     loading="lazy"
// //                   /> */}
// //                   <div>
// //                     <div className="font-bold text-sm text-slate-900">{t.name}</div>
// //                     <div className="font-mono text-xs text-slate-500">{t.route}</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* DESTINATIONS */}
// //       <section id="destinations" className="py-24 bg-slate-900 text-white">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <div className="max-w-xl mb-12">
// //             <Eyebrow light>Destinations</Eyebrow>
// //             <h2 className="font-serif font-bold text-3xl sm:text-4xl">Popular routes we support</h2>
// //             <p className="mt-4 text-blue-100">A selection of destinations we regularly assist clients with — if yours isn&apos;t listed, ask us.</p>
// //           </div>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
// //             {DESTINATIONS.map((d) => (
// //               <div key={d.name} className="relative h-36 rounded-2xl overflow-hidden border-2 border-white/25 hover:border-amber-300 transition-colors">
// //                 {/* REPLACE PHOTO: swap with a real landmark photo for this destination */}
// //                 <img src={`https://picsum.photos/seed/${d.seed}/300/300`} alt={d.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// //                 <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/20 to-transparent" />
// //                 <div className="relative z-10 h-full flex flex-col justify-end p-3 text-center">
// //                   <div className="text-2xl">{d.flag}</div>
// //                   <div className="font-bold text-xs mt-1">{d.name}</div>
// //                   <div className="font-mono text-[10px] text-amber-300 mt-0.5">{d.code}</div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* APPLY / FORM */}
// //       <section id="apply" className="py-24 bg-blue-50">
// //         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
// //           <div>
// //             <Eyebrow>Start Your Application</Eyebrow>
// //             <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900">Ready when you are</h2>
// //             <p className="mt-4 text-slate-600">Fill out the short form and our team will reach out to begin your consultation.</p>

// //             <div className="mt-8 space-y-0">
// //               {[
// //                 { icon: "📞", label: "WhatsApp", value: "+233 24 652 6851" },
// //                 { icon: "✉️", label: "Email", value: "christlineglobaltravelconsult@gmail.com" },
// //                 { icon: "📍", label: "Based in", value: "Accra, Ghana" },
// //               ].map((c, i, arr) => (
// //                 <div key={c.label} className={`flex items-center gap-4 py-4 border-dashed border-slate-900 ${i === 0 ? "border-t-2" : ""} border-b-2`}>
// //                   <div className="w-11 h-11 rounded-xl border-2 border-slate-900 bg-white flex items-center justify-center text-lg shadow-[3px_3px_0_0_#dbeafe]">
// //                     {c.icon}
// //                   </div>
// //                   <div>
// //                     <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">{c.label}</div>
// //                     <div className="font-bold text-slate-900">{c.value}</div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="bg-white border-4 border-slate-900 rounded-3xl p-2 shadow-[8px_8px_0_0_#fbbf24]">
// //             <div className="flex items-center gap-2 px-4 py-3 font-mono text-xs text-slate-500">
// //               <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
// //               <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
// //               <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
// //               &nbsp; application-form
// //             </div>
// //             {/*
// //               GOOGLE FORM EMBED
// //               1. Open your form in Google Forms > Send > the "<>" embed icon
// //               2. Copy the src URL from the provided <iframe>
// //               3. Replace the placeholder <div> below with:
// //                  <iframe src="YOUR_GOOGLE_FORM_EMBED_URL" className="w-full min-h-[520px] rounded-xl border-0" title="Application Form" />
// //             */}
// //             <div className="border-2 border-dashed border-slate-900 rounded-2xl min-h-[420px] flex items-center justify-center text-center p-8 bg-blue-50">
// //               <div>
                
// //                 <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
// //                   <strong className="text-slate-900"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBlu3d17F2pmfug4mV65ZSIKehTEJKptv7DsaCMuIbsGTnXA/viewform?embedded=true" className="w-full min-h-[520px] rounded-xl border-4 " title="Application Form">Loading…</iframe></strong><br />
                  
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FINAL CTA */}
// //       <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-950 to-blue-900 text-white text-center py-24">
// //         <div className="max-w-3xl mx-auto px-6 relative z-10">
// //           {/* <Eyebrow light>Ready to travel?</Eyebrow> */}
// //           <h2 className="font-serif font-bold text-4xl  text-orange-500 sm:text-5xl">Let&apos;s get your journey started.</h2>
// //           <p className="mt-4 text-slate-900 text-lg">Message us on WhatsApp for a quick, no-pressure free consultation.</p>
// //           <div className="mt-9 flex flex-wrap gap-4 justify-center">
// //             <PrimaryButton href={WHATSAPP_URL} className="bg-green-600 text-white">
// //               📞 WhatsApp Us Today
// //             </PrimaryButton>
// //             <PrimaryButton href="#apply" className="bg-orange-500 text-white">
// //               Book a Consultation
// //             </PrimaryButton>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FOOTER */}
// //       <footer className="bg-slate-950 text-blue-200 py-10 border-t-4 border-amber-400">
// //         <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm">
// //           <div className="flex items-center gap-2 text-white font-serif font-bold">
// //             <LogoMark className="w-7 h-7" />
// //             Christline Global Travel Consult
// //           </div>
// //           <div>christlineglobaltravelconsult@gmail.com &middot; +233 24 652 6851 &middot; Accra, Ghana</div>
// //           <div>&copy; 2026 Christline Global Travel Consult. All rights reserved.</div>
// //         </div>
// //       </footer>

// //       {/* Floating WhatsApp */}
// //       <a
// //         href={WHATSAPP_URL}
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         aria-label="Chat on WhatsApp"
// //         className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-emerald-400 border-4 border-slate-900 flex items-center justify-center text-2xl shadow-[5px_5px_0_0_#0f172a] hover:scale-105 hover:-rotate-3 transition-transform"
// //       >
// //         📞
// //       </a>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import heroimg from "./assets/heroimg.jpg";
// import logo from "./assets/logo.jpg";
// import img1 from "./assets/img1.jpg";

// const SERVICES = [
//   {
//     icon: "✈️",
//     title: "Visa Application Support",
//     desc: "Professional guidance with visa requirements, forms, appointments and application preparation.",
//   },
//   {
//     icon: "🎓",
//     title: "School Application",
//     desc: "Personalized support in choosing destinations, programs and opportunities that fit your goals.",
//   },
//   {
//     icon: "🏨",
//     title: "Flight & Accommodation",
//     desc: "Convenient assistance with flights, hotels and accommodation planning for your journey.",
//   },
//   {
//     icon: "📋",
//     title: "Documentation Guidance",
//     desc: "Clear document checklists and careful review to help you prepare your travel paperwork.",
//   },
//   {
//     icon: "🌍",
//     title: "Holiday & Tour Planning",
//     desc: "Beautifully planned holidays and tours designed around your destination, budget and preferences.",
//   },
//   {
//     icon: "💼",
//     title: "Business Travel",
//     desc: "Reliable travel coordination for professionals, companies and time-sensitive business trips.",
//   },
// ];

// const WHY = [
//   {
//     n: "01",
//     title: "Professional support",
//     desc: "We pay attention to the details that matter throughout your application.",
//   },
//   {
//     n: "02",
//     title: "Personalized consultation",
//     desc: "Your travel plans are unique, so our advice is tailored to your individual circumstances.",
//   },
//   {
//     n: "03",
//     title: "Clear communication",
//     desc: "We keep you informed about what is required and what happens next.",
//   },
//   {
//     n: "04",
//     title: "Practical experience",
//     desc: "We help simplify the complexities involved in travelling abroad.",
//   },
//   {
//     n: "05",
//     title: "Ghana-based support",
//     desc: "Accessible travel support from Accra whenever you need assistance.",
//   },
// ];

// const STEPS = [
//   {
//     n: "01",
//     title: "Consultation",
//     desc: "Tell us about your destination, purpose and travel plans.",
//   },
//   {
//     n: "02",
//     title: "Assessment",
//     desc: "We review your needs and explain the requirements clearly.",
//   },
//   {
//     n: "03",
//     title: "Application Support",
//     desc: "We guide you through the relevant application and documentation process.",
//   },
//   {
//     n: "04",
//     title: "Travel",
//     desc: "Get ready for your journey with greater confidence and peace of mind.",
//   },
// ];

// const TESTIMONIALS = [
//   {
//     name: "Vivian Fosuaa",
//     route: "Accra → London",
//     quote:
//       "The whole visa process felt confusing until Christline broke it down step by step. I always knew exactly what to do next.",
//   },
//   {
//     name: "Christiana Mensah",
//     route: "Accra → Toronto",
//     quote:
//       "Professional, patient, and honest about timelines. My documentation was accepted on the first submission.",
//   },
//   {
//     name: "Robert Mills",
//     route: "Accra → Dubai",
//     quote:
//       "From consultation to booking, everything was handled for our company trip. Christline made business travel simple.",
//   },
// ];

// const DESTINATIONS = [
//   {
//     flag: "🇬🇧",
//     name: "United Kingdom",
//     code: "ACC → LON",
//     image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
//   },
//   {
//     flag: "🇺🇸",
//     name: "United States",
//     code: "ACC → NYC",
//     image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80",
//   },
//   {
//     flag: "🇨🇦",
//     name: "Canada",
//     code: "ACC → YYZ",
//     image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
//   },
//   {
//     flag: "🇦🇪",
//     name: "United Arab Emirates",
//     code: "ACC → DXB",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
//   },
//   {
//     flag: "🇪🇺",
//     name: "Schengen Europe",
//     code: "ACC → CDG",
//     image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
//   },
//   {
//     flag: "🇦🇺",
//     name: "Australia",
//     code: "ACC → SYD",
//     image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
//   },
// ];

// const WHATSAPP_URL = "https://wa.me/233246526851";

// function PrimaryButton({ href, children, dark = false }) {
//   return (
//     <a
//       href={href}
//       target={href.startsWith("http") ? "_blank" : undefined}
//       rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
//       className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
//         dark
//           ? "bg-slate-950 text-white hover:bg-slate-800"
//           : "bg-orange-500 text-white hover:bg-orange-600"
//       }`}
//     >
//       {children}
//     </a>
//   );
// }

// function SectionLabel({ children, light = false }) {
//   return (
//     <div
//       className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${
//         light ? "text-orange-300" : "text-orange-500"
//       }`}
//     >
//       {children}
//     </div>
//   );
// }

// export default function ChristlineLandingPage() {
//   const [navOpen, setNavOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans">

//       {/* =========================
//           NAVIGATION
//       ========================== */}
//       <header className="fixed left-0 right-0 top-0 z-50">
//         <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
//           <div className="rounded-2xl border border-white/30 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-6">
//             <div className="flex items-center justify-between">

//               <a href="#" className="flex items-center gap-3">
//                 <img
//                   src={logo}
//                   alt="Christline Global Travel Consultancy"
//                   className="h-11 w-11 rounded-full object-cover"
//                 />

//                 <div className="hidden sm:block">
//                   <div className="text-sm font-bold tracking-wide text-slate-950">
//                     CHRISTLINE <span className="text-orange-500">GLOBAL</span>
//                   </div>
//                   <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
//                     Travel Consultancy
//                   </div>
//                 </div>
//               </a>

//               <div className="hidden items-center gap-8 lg:flex">
//                 <a
//                   href="#services"
//                   className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
//                 >
//                   Services
//                 </a>

//                 <a
//                   href="#about"
//                   className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
//                 >
//                   Why Us
//                 </a>

//                 <a
//                   href="#how"
//                   className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
//                 >
//                   Our Process
//                 </a>

//                 <a
//                   href="#destinations"
//                   className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
//                 >
//                   Destinations
//                 </a>

//                 <a
//                   href="#testimonials"
//                   className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
//                 >
//                   Reviews
//                 </a>
//               </div>

//               <div className="flex items-center gap-3">
//                 <a
//                   href="#apply"
//                   className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 sm:inline-flex"
//                 >
//                   Book Consultation
//                 </a>

//                 <button
//                   onClick={() => setNavOpen(!navOpen)}
//                   className="rounded-xl border border-slate-200 p-2 text-xl lg:hidden"
//                   aria-label="Toggle menu"
//                 >
//                   {navOpen ? "✕" : "☰"}
//                 </button>
//               </div>
//             </div>

//             {navOpen && (
//               <div className="mt-4 flex flex-col gap-4 border-t border-slate-200 pt-4 lg:hidden">
//                 {[
//                   ["Services", "#services"],
//                   ["Why Us", "#about"],
//                   ["Our Process", "#how"],
//                   ["Destinations", "#destinations"],
//                   ["Reviews", "#testimonials"],
//                   ["Book Consultation", "#apply"],
//                 ].map(([label, href]) => (
//                   <a
//                     key={label}
//                     href={href}
//                     onClick={() => setNavOpen(false)}
//                     className="text-sm font-medium text-slate-700"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         </nav>
//       </header>

//       {/* =========================
//           HERO
//       ========================== */}
//       <section className="relative flex min-h-screen items-center overflow-hidden">

//         {/* FULL HERO IMAGE */}
//         <img
//           src={heroimg}
//           alt="Traveller preparing for an international journey"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* DARK GRADIENT OVERLAY */}
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

//         {/* SUBTLE BOTTOM GRADIENT */}
//         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/60 to-transparent" />

//         <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:px-8 lg:px-10">

//           <div className="max-w-3xl">

//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
//               <span className="h-2 w-2 rounded-full bg-orange-400" />
//               Your journey starts here
//             </div>

//             <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
//               Travel further.
//               <br />
//               <span className="text-orange-400">Travel confidently.</span>
//             </h1>

//             <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
//               From visa applications and school admissions to flights,
//               accommodation and holiday planning, Christline Global Travel
//               Consultancy makes travelling abroad simpler.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-4">
//               <PrimaryButton href="#apply">
//                 Start Your Journey
//                 <span>→</span>
//               </PrimaryButton>

//               <a
//                 href={WHATSAPP_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
//               >
//                 WhatsApp Us
//               </a>
//             </div>

//           </div>

//           {/* HERO BOTTOM INFO */}
//           <div className="mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">

//             <div className="border-l border-white/30 pl-4">
//               <div className="text-2xl font-bold text-white">30+</div>
//               <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
//                 Destinations
//               </div>
//             </div>

//             <div className="border-l border-white/30 pl-4">
//               <div className="text-2xl font-bold text-white">360°</div>
//               <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
//                 Travel Support
//               </div>
//             </div>

//             <div className="hidden border-l border-white/30 pl-4 sm:block">
//               <div className="text-2xl font-bold text-white">Accra</div>
//               <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
//                 Ghana
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* SCROLL INDICATOR */}
//         <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-widest text-white/60 lg:flex">
//           <span>Explore</span>
//           <div className="h-px w-10 bg-white/40" />
//         </div>
//       </section>

//       {/* =========================
//           INTRO
//       ========================== */}
//       <section className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

//           <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

//             <div>
//               <SectionLabel>Christline Global</SectionLabel>

//               <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
//                 More than travel.
//                 <br />
//                 <span className="text-orange-500">
//                   We help you get there.
//                 </span>
//               </h2>
//             </div>

//             <div>
//               <p className="text-base leading-8 text-slate-600 sm:text-lg">
//                 Travelling internationally can feel overwhelming. There are
//                 documents to prepare, applications to complete, flights to
//                 arrange and countless details to consider.
//               </p>

//               <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
//                 Christline Global Travel Consultancy provides practical,
//                 personalized assistance to help you navigate your journey with
//                 clarity and confidence.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* =========================
//           SERVICES
//       ========================== */}
//       <section id="services" className="bg-slate-50 py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

//           <div className="mb-14 max-w-2xl">
//             <SectionLabel>Our Services</SectionLabel>

//             <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
//               Everything you need for your journey.
//             </h2>

//             <p className="mt-5 text-lg leading-8 text-slate-600">
//               Professional travel support from your first consultation to
//               getting ready to leave Ghana.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

//             {SERVICES.map((service) => (
//               <div
//                 key={service.title}
//                 className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-slate-200/60"
//               >
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl transition group-hover:bg-orange-500">
//                   {service.icon}
//                 </div>

//                 <h3 className="mt-7 text-xl font-bold text-slate-950">
//                   {service.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-slate-600">
//                   {service.desc}
//                 </p>

//                 <div className="mt-6 text-sm font-semibold text-orange-500">
//                   Learn more →
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* =========================
//           WHY CHOOSE US
//       ========================== */}
//       <section id="about" className="bg-white py-24 sm:py-32">
//         <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">

//           <div className="relative min-h-[500px] overflow-hidden rounded-[2rem]">
//             <img
//               src={img1}
//               alt="Christline Global Travel Consultancy"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

//             <div className="absolute bottom-0 left-0 p-8 sm:p-10">
//               <div className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
//                 Christline Global
//               </div>

//               <div className="mt-3 max-w-md text-3xl font-bold leading-tight text-white">
//                 Helping you move from travel plans to real journeys.
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col justify-center">

//             <SectionLabel>Why Choose Us</SectionLabel>

//             <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
//               Personal support.
//               <br />
//               <span className="text-orange-500">Professional service.</span>
//             </h2>

//             <p className="mt-6 text-base leading-8 text-slate-600">
//               We believe travel consultancy should be clear, honest and
//               personal. Our goal is to make the process easier for you while
//               giving you the information and support you need at every stage.
//             </p>

//             <div className="mt-9 space-y-1">

//               {WHY.map((item) => (
//                 <div
//                   key={item.n}
//                   className="flex gap-5 border-b border-slate-200 py-5"
//                 >
//                   <div className="text-sm font-bold text-orange-500">
//                     {item.n}
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-slate-950">
//                       {item.title}
//                     </h3>

//                     <p className="mt-1 text-sm leading-6 text-slate-500">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* =========================
//           PROCESS
//       ========================== */}
//       <section
//         id="how"
//         className="bg-slate-950 py-24 text-white sm:py-32"
//       >
//         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

//           <div className="max-w-2xl">
//             <SectionLabel light>Our Process</SectionLabel>

//             <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
//               A simple path to your next destination.
//             </h2>

//             <p className="mt-5 text-lg leading-8 text-white/60">
//               We break the process down into clear steps so you know what to
//               expect.
//             </p>
//           </div>

//           <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

//             {STEPS.map((step, index) => (
//               <div
//                 key={step.n}
//                 className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-orange-400/50"
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-bold text-orange-400">
//                     {step.n}
//                   </span>

//                   {index !== STEPS.length - 1 && (
//                     <span className="hidden text-white/20 lg:block">
//                       →
//                     </span>
//                   )}
//                 </div>

//                 <h3 className="mt-14 text-xl font-bold">
//                   {step.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-white/50">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* =========================
//           DESTINATIONS
//       ========================== */}
//       <section id="destinations" className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

//             <div>
//               <SectionLabel>Destinations</SectionLabel>

//               <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
//                 Where will you go next?
//               </h2>
//             </div>

//             <p className="max-w-md text-sm leading-7 text-slate-500">
//               These are some of the popular destinations we assist clients
//               with. Ask us about your preferred destination.
//             </p>

//           </div>

//           <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

//             {DESTINATIONS.map((destination) => (
//               <div
//                 key={destination.name}
//                 className="group relative h-64 overflow-hidden rounded-3xl"
//               >
//                 <img
//                   src={destination.image}
//                   alt={destination.name}
//                   className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

//                 <div className="absolute inset-x-0 bottom-0 p-5">
//                   <div className="text-2xl">{destination.flag}</div>

//                   <div className="mt-2 text-sm font-bold text-white">
//                     {destination.name}
//                   </div>

//                   <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-orange-300">
//                     {destination.code}
//                   </div>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* =========================
//           TESTIMONIALS
//       ========================== */}
//       <section id="testimonials" className="bg-slate-50 py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

//           <div className="max-w-2xl">
//             <SectionLabel>Client Reviews</SectionLabel>

//             <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
//               Trusted by travellers.
//             </h2>
//           </div>

//           <div className="mt-14 grid gap-5 md:grid-cols-3">

//             {TESTIMONIALS.map((testimonial) => (
//               <div
//                 key={testimonial.name}
//                 className="rounded-3xl border border-slate-200 bg-white p-8"
//               >
//                 <div className="text-sm tracking-[0.3em] text-orange-400">
//                   ★★★★★
//                 </div>

//                 <p className="mt-7 text-base leading-8 text-slate-600">
//                   “{testimonial.quote}”
//                 </p>

//                 <div className="mt-8 border-t border-slate-100 pt-6">
//                   <div className="font-bold text-slate-950">
//                     {testimonial.name}
//                   </div>

//                   <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
//                     {testimonial.route}
//                   </div>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* =========================
//           APPLICATION
//       ========================== */}
//       <section id="apply" className="bg-orange-50 py-24 sm:py-32">
//         <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">

//           <div className="flex flex-col justify-center">

//             <SectionLabel>Start Your Journey</SectionLabel>

//             <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
//               Ready to take the next step?
//             </h2>

//             <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
//               Complete the application form and our team will get in touch
//               with you to begin your consultation.
//             </p>

//             <div className="mt-9 space-y-4">

//               <a
//                 href={WHATSAPP_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-4 rounded-2xl bg-white p-4 transition hover:shadow-lg"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
//                   📱
//                 </div>

//                 <div>
//                   <div className="text-xs uppercase tracking-wider text-slate-400">
//                     WhatsApp
//                   </div>
//                   <div className="font-semibold text-slate-950">
//                     +233 24 652 6851
//                   </div>
//                 </div>
//               </a>

//               <div className="flex items-center gap-4 rounded-2xl bg-white p-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
//                   ✉️
//                 </div>

//                 <div>
//                   <div className="text-xs uppercase tracking-wider text-slate-400">
//                     Email
//                   </div>
//                   <div className="break-all font-semibold text-slate-950">
//                     christlineglobaltravelconsult@gmail.com
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 rounded-2xl bg-white p-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
//                   📍
//                 </div>

//                 <div>
//                   <div className="text-xs uppercase tracking-wider text-slate-400">
//                     Location
//                   </div>
//                   <div className="font-semibold text-slate-950">
//                     Accra, Ghana
//                   </div>
//                 </div>
//               </div>

//             </div>

//           </div>

//           {/* GOOGLE FORM */}
//           <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-orange-900/10">

//             <div className="mb-2 flex items-center gap-2 px-4 py-3">
//               <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
//               <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
//               <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

//               <span className="ml-2 text-xs font-medium text-slate-400">
//                 Consultation Application
//               </span>
//             </div>

//             <iframe
//               src="https://docs.google.com/forms/d/e/1FAIpQLSdBlu3d17F2pmfug4mV65ZSIKehTEJKptv7DsaCMuIbsGTnXA/viewform?embedded=true"
//               className="h-[700px] w-full rounded-2xl border-0"
//               title="Christline Global Travel Consultancy Application Form"
//             >
//               Loading…
//             </iframe>

//           </div>

//         </div>
//       </section>

//       {/* =========================
//           FINAL CTA
//       ========================== */}
//       <section className="relative overflow-hidden bg-slate-950 py-28 text-white">

//         <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl px-6 text-center">

//           <SectionLabel light>Ready to Travel?</SectionLabel>

//           <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
//             Your next journey could start today.
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
//             Tell us where you want to go. We’ll help you understand the next
//             steps.
//           </p>

//           <div className="mt-9 flex flex-wrap justify-center gap-4">

//             <PrimaryButton href={WHATSAPP_URL}>
//               WhatsApp Us
//             </PrimaryButton>

//             <a
//               href="#apply"
//               className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
//             >
//               Book a Consultation
//             </a>

//           </div>

//         </div>
//       </section>

//       {/* =========================
//           FOOTER
//       ========================== */}
//       <footer className="bg-slate-950 px-6 pb-10 text-white sm:px-8">

//         <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">

//           <div className="grid gap-10 md:grid-cols-3">

//             <div>
//               <div className="flex items-center gap-3">
//                 <img
//                   src={logo}
//                   alt="Christline Global Travel Consultancy"
//                   className="h-12 w-12 rounded-full object-cover"
//                 />

//                 <div>
//                   <div className="font-bold">
//                     CHRISTLINE <span className="text-orange-400">GLOBAL</span>
//                   </div>

//                   <div className="text-xs uppercase tracking-widest text-white/40">
//                     Travel Consultancy
//                   </div>
//                 </div>
//               </div>

//               <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
//                 Professional travel consultancy and personalized support for
//                 your journey abroad.
//               </p>
//             </div>

//             <div>
//               <div className="text-sm font-semibold uppercase tracking-widest text-white/60">
//                 Explore
//               </div>

//               <div className="mt-5 space-y-3 text-sm text-white/50">
//                 <a href="#services" className="block hover:text-white">
//                   Services
//                 </a>

//                 <a href="#about" className="block hover:text-white">
//                   Why Choose Us
//                 </a>

//                 <a href="#destinations" className="block hover:text-white">
//                   Destinations
//                 </a>

//                 <a href="#testimonials" className="block hover:text-white">
//                   Testimonials
//                 </a>
//               </div>
//             </div>

//             <div>
//               <div className="text-sm font-semibold uppercase tracking-widest text-white/60">
//                 Contact
//               </div>

//               <div className="mt-5 space-y-3 text-sm text-white/50">
//                 <div>+233 24 652 6851</div>
//                 <div className="break-all">
//                   christlineglobaltravelconsult@gmail.com
//                 </div>
//                 <div>Accra, Ghana</div>
//               </div>
//             </div>

//           </div>

//           <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
//             <div>
//               © 2026 Christline Global Travel Consultancy. All rights reserved.
//             </div>

//             <div>
//               Travel with confidence.
//             </div>
//           </div>

//         </div>
//       </footer>

//       {/* =========================
//           FLOATING WHATSAPP
//       ========================== */}
//       <a
//         href={WHATSAPP_URL}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat with Christline on WhatsApp"
//         className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl shadow-green-900/20 transition hover:scale-110 hover:bg-green-600"
//       >
//         💬
//       </a>
//     </div>
//   );
// }



import React, { useState } from "react";
import heroimg from "./assets/heroimg.jpg";
import logo from "./assets/logo.jpg";
import img1 from "./assets/img1.jpg";

const WHATSAPP_URL = "https://wa.me/233246526851";

const SERVICES = [
  {
    number: "01",
    title: "Visa Assistance",
    text: "Professional guidance through your visa application journey, from documentation to submission preparation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
        <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H19" />
        <path d="M8 7h7M8 10h5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Travel Consultancy",
    text: "Personalised travel guidance designed around your destination, purpose, budget and travel plans.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.35 3.3 5.18 3.3 8.5S14.2 18.15 12 20.5c-2.2-2.35-3.3-5.18-3.3-8.5S9.8 5.85 12 3.5Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Flight Booking",
    text: "Get help finding suitable flight options and planning your journey with greater confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 13.5 21 6l-5.5 12-3.2-5.1L7 16l-1.5-3.2L3 13.5Z" />
        <path d="m12.3 12.9 3.3 1.7" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Study Abroad",
    text: "Guidance for students exploring international education opportunities and study destinations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m3 9 9-4 9 4-9 4-9-4Z" />
        <path d="M7 11v5c2.9 2.3 7.1 2.3 10 0v-5" />
        <path d="M21 9v6" />
      </svg>
    ),
  },
];

const WHY = [
  {
    title: "Professional Guidance",
    text: "We help you understand the process and prepare with greater confidence.",
  },
  {
    title: "Personalised Service",
    text: "Your travel goals are different, so we provide guidance tailored to your situation.",
  },
  {
    title: "Attention to Detail",
    text: "We take documentation and application preparation seriously.",
  },
  {
    title: "Client-Focused",
    text: "Our goal is to make your travel planning experience clearer and less stressful.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Tell Us Your Plans",
    text: "Share your destination, travel purpose and what you need help with.",
  },
  {
    number: "02",
    title: "Get Expert Guidance",
    text: "We assess your needs and guide you through the appropriate process.",
  },
  {
    number: "03",
    title: "Prepare & Apply",
    text: "We help you organise the necessary information and documentation.",
  },
  {
    number: "04",
    title: "Travel With Confidence",
    text: "Move forward knowing you have received professional guidance.",
  },
];

const DESTINATIONS = [
  {
    name: "United Kingdom",
    short: "UK",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=85",
  },
  {
    name: "United States",
    short: "USA",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=85",
  },
  {
    name: "Canada",
    short: "CANADA",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=85",
  },
  {
    name: "United Arab Emirates",
    short: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
  },
  {
    name: "Europe",
    short: "EUROPE",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=85",
  },
  {
    name: "Australia",
    short: "AUSTRALIA",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=85",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Christline made the process much easier for me. I appreciated the professional guidance and attention to detail.",
    name: "Happy Client",
    role: "Travel Client",
  },
  {
    quote:
      "The team was helpful, responsive and made me understand what I needed to prepare before my application.",
    name: "Satisfied Client",
    role: "Visa Client",
  },
  {
    quote:
      "I loved the personalised approach. I never felt like I was just another application.",
    name: "Valued Client",
    role: "Travel Client",
  },
];

function PrimaryButton({ children, href = "#application", dark = false }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        dark
          ? "bg-white text-slate-950 hover:bg-orange-500 hover:text-white"
          : "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
      }`}
    >
      {children}
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <div
        className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] ${
          light ? "text-orange-400" : "text-orange-500"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </div>

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default function ChristlineLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-8">
          <nav className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/20 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5">
            <a href="#" className="flex items-center gap-3">
              <div className="h-11 w-11 overflow-hidden rounded-xl bg-white p-1 shadow-lg">
                <img
                  src={logo}
                  alt="Christline Global Travel Consultancy"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-none text-white">
                  CHRISTLINE
                </p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-white/70">
                  Global Travel Consultancy
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <a
                href="#home"
                className="text-sm font-medium text-white transition hover:text-orange-400"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-white/80 transition hover:text-orange-400"
              >
                Services
              </a>
              <a
                href="#destinations"
                className="text-sm font-medium text-white/80 transition hover:text-orange-400"
              >
                Destinations
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-white/80 transition hover:text-orange-400"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-white/80 transition hover:text-orange-400"
              >
                Contact
              </a>
            </div>

            <div className="hidden lg:block">
              <PrimaryButton href="#application">
                Start Your Journey
              </PrimaryButton>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </nav>

          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
              <div className="flex flex-col gap-1">
                {[
                  ["Home", "#home"],
                  ["Services", "#services"],
                  ["Destinations", "#destinations"],
                  ["About Us", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-orange-400"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="#application"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section
        id="home"
        className="relative flex min-h-[720px] items-center overflow-hidden sm:min-h-screen"
      >
        <img
          src={heroimg}
          alt="Beautiful travel destination"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Main overlay */}
        <div className="absolute inset-0 bg-slate-950/55" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Your Journey. Our Expertise.
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Travel further.
              <br />
              <span className="text-orange-400">Travel confidently.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Professional travel and visa consultancy services designed to
              help you navigate your international journey with clarity,
              confidence and personalised support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#application">
                Start Your Application
              </PrimaryButton>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Explore Our Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
              <div>
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-xs text-white/60">Travel Destinations</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">1:1</p>
                <p className="text-xs text-white/60">Personalised Guidance</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-white/60">Client Focused</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#services"
          className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition hover:text-white sm:flex"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">
            Explore
          </span>
          <span className="h-9 w-px bg-white/40" />
        </a>
      </section>

      {/* =========================
          SERVICES
      ========================== */}
      <section id="services" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Travel support built around your journey."
            text="From visa assistance to travel planning, we provide practical guidance to help you move from planning to travelling with confidence."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="absolute right-5 top-4 text-5xl font-bold text-slate-100 transition group-hover:text-orange-50">
                  {service.number}
                </div>

                <div className="relative">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <div className="h-6 w-6">{service.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>

                  <a
                    href="#application"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition group-hover:text-orange-500"
                  >
                    Learn more
                    <svg
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT / WHY US
      ========================== */}
      <section id="about" className="overflow-hidden bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-3xl border border-orange-200" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={img1}
                alt="Christline Global Travel Consultancy"
                className="h-[480px] w-full object-cover sm:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Christline Global
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Making international travel easier to navigate.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 hidden rounded-2xl bg-orange-500 px-6 py-5 shadow-xl sm:block">
              <p className="text-2xl font-bold text-white">Travel</p>
              <p className="text-xs font-medium text-white/80">
                with confidence
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why Christline"
              title="A better way to plan your international journey."
              text="We believe travel consultancy should feel personal, transparent and professional. Our approach is centred on helping you understand your options and prepare properly."
            />

            <div className="mt-10 space-y-6">
              {WHY.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <PrimaryButton href="#application">
                Speak With Us
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================== */}
      <section className="bg-slate-950 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple steps. Clear guidance."
            text="We make the process easier to understand, so you can focus on preparing for your journey."
            light
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-slate-950 p-7 transition hover:bg-slate-900 sm:p-8"
              >
                <span className="text-sm font-bold text-orange-400">
                  {step.number}
                </span>

                <h3 className="mt-10 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          DESTINATIONS
      ========================== */}
      <section id="destinations" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Popular Destinations"
              title="Where will your journey take you?"
              text="Explore some of the destinations clients consider for travel, study and new opportunities."
            />

            <a
              href="#application"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-orange-500"
            >
              Start planning
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((destination) => (
              <a
                key={destination.name}
                href="#application"
                className="group relative h-[310px] overflow-hidden rounded-3xl"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    {destination.short}
                  </p>

                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white">
                      {destination.name}
                    </h3>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition group-hover:bg-orange-500 group-hover:text-white">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          TESTIMONIALS
      ========================== */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Client Experience"
            title="People. Journeys. Possibilities."
            text="Our clients are at the heart of everything we do."
          />

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-left shadow-2xl sm:p-12 lg:p-16">
            <div className="flex gap-1 text-orange-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                </svg>
              ))}
            </div>

            <blockquote className="mt-8 text-2xl font-medium leading-9 text-white sm:text-3xl sm:leading-10">
              “{TESTIMONIALS[activeTestimonial].quote}”
            </blockquote>

            <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-bold text-white">
                  {TESTIMONIALS[activeTestimonial].name}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {TESTIMONIALS[activeTestimonial].role}
                </p>
              </div>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeTestimonial === index
                        ? "w-8 bg-orange-500"
                        : "w-2 bg-slate-600"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          APPLICATION
      ========================== */}
      <section id="application" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[2rem] bg-slate-950 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-14">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                  <span className="h-px w-8 bg-orange-400" />
                  Get Started
                </div>

                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Ready to start your journey?
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-400">
                  Tell us what you need and our team will get back to you with
                  the appropriate guidance.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M4 4h16v16H4z" />
                        <path d="m4 7 8 5 8-5" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Email
                      </p>
                      <a
                        href="mailto:christlineglobaltravelconsult@gmail.com"
                        className="mt-1 block text-sm text-white hover:text-orange-400"
                      >
                        christlineglobaltravelconsult@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 5.18 2 2 0 0 1 4.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 10.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Phone
                      </p>
                      <a
                        href="tel:+233246526851"
                        className="mt-1 block text-sm text-white hover:text-orange-400"
                      >
                        +233 24 652 6851
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdBlu3d17F2pmfug4mV65ZSIKehTEJKptv7DsaCMuIbsGTnXA/viewform?embedded=true"
                  width="100%"
                  height="850"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Christline Global Travel Consultancy Application Form"
                  className="block"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="relative overflow-hidden bg-orange-500 py-20 sm:py-24">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-slate-950/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
            Your next chapter starts here
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's make your travel plans happen.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Whether you are travelling, studying or exploring new
            opportunities, Christline Global Travel Consultancy is ready to
            guide you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="#application" dark>
              Start Your Journey
            </PrimaryButton>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-xl bg-white p-1">
                  <img
                    src={logo}
                    alt="Christline Global Travel Consultancy"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="font-bold">CHRISTLINE</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                    Global Travel Consultancy
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
                Professional travel and visa consultancy services helping you
                navigate your international journey with confidence.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.52 0 .18 5.34.18 11.89c0 2.1.55 4.15 1.6 5.96L.07 24l6.3-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.45-8.43ZM12.08 21.77h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.88 9.88 0 1 1 8.37 4.63Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold">Company</h3>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="#about"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  About Us
                </a>

                <a
                  href="#services"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  Our Services
                </a>

                <a
                  href="#destinations"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  Destinations
                </a>

                <a
                  href="#application"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  Apply
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">Services</h3>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="#application"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  Visa Assistance
                </a>

                <a
                  href="#application"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  Travel Consultancy
                </a>

                <a
                  href="#application"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  Flight Booking
                </a>

                <a
                  href="#application"
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  Study Abroad
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">Contact</h3>

              <div className="mt-5 space-y-4">
                <a
                  href="tel:+233246526851"
                  className="block text-sm leading-6 text-slate-400 transition hover:text-orange-400"
                >
                  +233 24 652 6851
                </a>

                <a
                  href="mailto:christlineglobaltravelconsult@gmail.com"
                  className="block break-all text-sm leading-6 text-slate-400 transition hover:text-orange-400"
                >
                  christlineglobaltravelconsult@gmail.com
                </a>

                <p className="text-sm leading-6 text-slate-400">
                  Accra, Ghana
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Christline Global Travel
              Consultancy. All rights reserved.
            </p>

            <p className="text-xs text-slate-600">
              Travel further. Travel confidently.
            </p>
          </div>
        </div>
      </footer>

      {/* =========================
          FLOATING WHATSAPP
      ========================== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Christline on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
      >
        <span className="hidden rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white shadow-xl transition group-hover:block">
          Chat with us
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-900/30 transition-all duration-300 hover:scale-110 hover:bg-green-600">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.52 0 .18 5.34.18 11.89c0 2.1.55 4.15 1.6 5.96L.07 24l6.3-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.45-8.43ZM12.08 21.77h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.88 9.88 0 1 1 8.37 4.63Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </span>
      </a>
    </div>
  );
}