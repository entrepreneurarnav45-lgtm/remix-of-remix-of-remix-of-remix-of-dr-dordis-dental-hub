import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  ArrowRight, Bone, Check, ChevronDown, CircleDot, Cross, Gem, Heart,
  MapPin, Menu, MessageCircle, Phone, Play, ShieldCheck, Smile, Sparkles,
  Stethoscope, X,
} from "lucide-react";
import doctorAsset from "@/assets/dr-jehan-dordi.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import receptionAsset from "@/assets/reception.jpg.asset.json";
import treatmentAsset from "@/assets/treatment-room.jpg.asset.json";
import equipmentAsset from "@/assets/equipment.jpg.asset.json";
import welcomeAsset from "@/assets/welcome.jpg.asset.json";
import exteriorAsset from "@/assets/exterior.jpg.asset.json";
import clinicDoctorAsset from "@/assets/doctor-clinic.jpg.asset.json";
import beforeAsset from "@/assets/smile-before.jpg.asset.json";
import afterAsset from "@/assets/smile-after.jpg.asset.json";
import clinicTourAsset from "@/assets/clinic-tour.mp4.asset.json";
import treatmentVideoAsset from "@/assets/treatment-suite.mp4.asset.json";
import meetDoctorVideoAsset from "@/assets/meet-dr-jehan.mp4.asset.json";
import clinicalCareVideoAsset from "@/assets/clinical-care.mp4.asset.json";
import implantExplainer from "@/assets/implant-explainer-2d.mp4.asset.json";
import implants2d from "@/assets/2d-dental-implants.mp4.asset.json";
import smileMakeover2d from "@/assets/2d-smile-makeover.mp4.asset.json";
import rootCanal2d from "@/assets/2d-root-canal.mp4.asset.json";
import whitening2d from "@/assets/2d-teeth-whitening.mp4.asset.json";
import crownsBridges2d from "@/assets/2d-crowns-bridges.mp4.asset.json";
import veneers2d from "@/assets/2d-dental-veneers.mp4.asset.json";
import prosthodontic2d from "@/assets/2d-prosthodontic.mp4.asset.json";
import fillings2d from "@/assets/2d-tooth-coloured-fillings.mp4.asset.json";
import dentures2d from "@/assets/2d-dentures.mp4.asset.json";
import preventive2d from "@/assets/2d-preventive.mp4.asset.json";

const phoneHref = "tel:+919587726969";
const whatsappHref = "https://wa.me/919587726969?text=Hello%20Dr.%20Dordi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20dental%20services.";
const mapHref = "https://share.google/c5LGRXtPl9jLguEqM";
const address = "1st Floor, Highfield Ascot, 105, VIP Rd, Beside International Finance Centre, Opposite Palm Avenue, Vesu, Surat, Gujarat, India";

const services = [
  ["Dental Implants", "A biocompatible titanium implant replaces a missing tooth root and supports a carefully crafted crown, helping restore comfortable chewing and a natural appearance.", Bone],
  ["Smile Makeover", "A personalised plan may combine suitable cosmetic and restorative treatments to improve tooth shape, colour and proportion while keeping the smile naturally balanced.", Sparkles],
  ["Root Canal Treatment", "Infected tissue is carefully removed from inside the tooth before it is cleaned and sealed, helping relieve discomfort and preserve the natural tooth.", Cross],
  ["Teeth Whitening", "Professionally supervised whitening gently reduces staining and discolouration, helping brighten the smile while the treatment is tailored to your teeth and sensitivity.", Smile],
  ["Dental Crowns & Bridges", "Custom crowns protect and rebuild damaged teeth, while bridges replace missing teeth to support comfortable function, appearance and bite alignment.", Gem],
  ["Dental Veneers", "Thin ceramic restorations are bonded to the front of selected teeth to refine shape, spacing or colour with carefully planned tooth preparation.", CircleDot],
  ["Prosthodontic Treatment", "Specialist restorative planning combines suitable prosthetic options to address complex tooth damage or loss, with the aim of improving comfort, function and appearance.", Stethoscope],
  ["Tooth-Coloured Fillings", "Composite material repairs decay or minor damage and is shaped to blend with the surrounding tooth, helping restore strength and a natural finish.", ShieldCheck],
  ["Complete & Partial Dentures", "Custom removable appliances replace several or all missing teeth, supporting facial form and helping make everyday speaking and eating more comfortable.", Heart],
  ["Preventive & General Dental Care", "Regular examinations, professional cleaning and tailored guidance help identify concerns early and support healthy teeth and gums over time.", Check],
] as const;

const nav = [["Home", "home"], ["About Dr. Dordi", "doctor"], ["Services", "services"], ["Before & After", "results"], ["Clinic", "clinic"], ["Gallery", "gallery"], ["Videos", "videos"], ["Contact", "contact"]] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Dordis Dental Hub | Dentist & Prosthodontic Care in Vesu, Surat" },
      { name: "description", content: "Personalized dental and prosthodontic care by Dr. Jehan Dordi (B.D.S., M.D.S., F.A.G.E.) at Dr Dordis Dental Hub in Vesu, Surat." },
      { property: "og:title", content: "Dr Dordis Dental Hub | Dentist in Vesu, Surat" },
      { property: "og:description", content: "Advanced, personalized dental and prosthodontic care in a modern clinical environment in Vesu, Surat." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Dentist", name: "Dr Dordis Dental Hub", telephone: "+91 95877 26969", address: { "@type": "PostalAddress", streetAddress: "1st Floor, Highfield Ascot, 105, VIP Rd, Vesu", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" }, employee: { "@type": "Person", name: "Dr. Jehan Dordi", jobTitle: "MDS Prosthodontics & Crown and Bridge & Oral Implantology" } }) }],
  }),
  component: Index,
});

function ActionLink({ type, className = "" }: { type: "whatsapp" | "call" | "map"; className?: string }) {
  const data: [string, string, ComponentType<LucideProps>] = type === "whatsapp" ? [whatsappHref, "WhatsApp", MessageCircle] : type === "call" ? [phoneHref, "Call Now", Phone] : [mapHref, "Get Directions", MapPin];
  const [href, label, Icon] = data;
  return <a href={href as string} target={type === "call" ? undefined : "_blank"} rel={type === "call" ? undefined : "noreferrer"} className={`inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${className}`}><Icon className="size-4" />{label}</a>;
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p><h2 className="text-4xl leading-[1.08] text-primary md:text-5xl">{title}</h2>{copy && <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{copy}</p>}</div>;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState<number | null>(null);
  const [slider, setSlider] = useState(52);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [video, setVideo] = useState<{ src: string; title: string } | null>(null);
  const gallery: Array<[string, string]> = [[receptionAsset.url, "Reception and clinic welcome"], [treatmentAsset.url, "Treatment room and dental chair"], [equipmentAsset.url, "Clinical equipment"], [welcomeAsset.url, "Clinic welcome area"], [exteriorAsset.url, "Dr Dordis Dental Hub exterior"]];
  const serviceVideos = [implants2d.url, smileMakeover2d.url, rootCanal2d.url, whitening2d.url, crownsBridges2d.url, veneers2d.url, prosthodontic2d.url, fillings2d.url, dentures2d.url, preventive2d.url];
  const videos: Array<[string, string, string]> = [[clinicTourAsset.url, receptionAsset.url, "A welcome to the clinic"], [treatmentVideoAsset.url, treatmentAsset.url, "Inside the treatment suite"], [meetDoctorVideoAsset.url, doctorAsset.url, "Dr. Jehan Dordi at the clinic"], [clinicalCareVideoAsset.url, clinicDoctorAsset.url, "A closer look at clinical care"]];

  return <main className="overflow-x-hidden bg-background pb-16 text-foreground md:pb-0">
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-5 lg:px-8">
        <a href="#home" className="mr-auto flex items-center gap-3" aria-label="Dr Dordis Dental Hub home"><img src={logoAsset.url} alt="Dr Dordis Dental Hub logo" width="48" height="48" className="size-11 shrink-0 rounded-full object-contain" /><span className="leading-tight"><b className="block font-display text-lg font-normal text-primary">Dr Dordi's</b><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Dental Hub</span></span></a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-semibold text-muted-foreground transition-colors hover:text-primary">{label}</a>)}</nav>
        <div className="hidden gap-2 md:flex"><ActionLink type="whatsapp" className="h-10 border border-border bg-card text-primary" /><ActionLink type="call" className="h-10 bg-primary text-primary-foreground" /></div>
        <button onClick={() => setMenu(!menu)} aria-label="Toggle navigation" className="grid size-10 place-items-center rounded-md border border-border xl:hidden">{menu ? <X /> : <Menu />}</button>
      </div>
      {menu && <nav className="border-t border-border bg-background px-5 py-4 xl:hidden">{nav.map(([label, id]) => <a onClick={() => setMenu(false)} key={id} href={`#${id}`} className="block border-b border-border/60 py-3 text-sm font-semibold">{label}</a>)}</nav>}
    </header>

    <section id="home" className="relative border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 text-center lg:px-8 lg:py-20">
        <div className="relative z-10 mx-auto flex flex-col items-center"><div className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-accent/30 bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground"><span className="size-2 rounded-full bg-accent" />Dr. Jehan Dordi · B.D.S., M.D.S., F.A.G.E. · Gold Medalist</div><h1 className="max-w-3xl text-5xl leading-[0.98] text-primary md:text-7xl lg:text-[5.7rem]">Advanced Dental Care.<br /><span className="text-accent">Confident Smiles.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Personalized dental and prosthodontic care in a modern clinical environment in Vesu, Surat.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><ActionLink type="whatsapp" className="bg-accent text-accent-foreground" /><ActionLink type="call" className="bg-primary text-primary-foreground" /><ActionLink type="map" className="border border-border bg-card text-primary" /></div><div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-border pt-5 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Check className="size-4 text-accent" />Specialist prosthodontic care</span><span className="flex items-center gap-2"><Check className="size-4 text-accent" />Modern clinical environment</span></div></div>
        <div className="relative mx-auto mt-2 aspect-video w-full max-w-5xl overflow-hidden rounded-md bg-primary shadow-xl"><video src={clinicTourAsset.url} autoPlay muted loop playsInline preload="metadata" aria-label="A video tour of Dr Dordis Dental Hub" className="h-full w-full object-cover" /><div className="pointer-events-none absolute inset-x-0 bottom-0 bg-primary/75 px-4 py-3 text-left text-sm font-semibold text-primary-foreground md:px-6">Inside Dr Dordis Dental Hub</div></div>
      </div>
    </section>

    <section id="doctor" className="py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:px-8"><div className="relative"><img src={doctorAsset.url} alt="Portrait of Dr. Jehan Dordi" loading="lazy" width="1400" height="933" className="aspect-[4/5] w-full rounded-md object-cover" /><div className="absolute bottom-5 right-5 max-w-[16rem] rounded-md bg-background p-5 shadow-xl"><p className="font-display text-lg leading-6 text-primary">MDS Prosthodontics & Crown and Bridge & Oral Implantology</p><p className="mt-2 text-xs leading-5 text-muted-foreground">B.D.S., M.D.S., F.A.G.E. · Gold Medalist</p></div></div><div><SectionTitle eyebrow="About the dentist" title="Meet Dr. Jehan Dordi" copy="Dr. Jehan Dordi (B.D.S., M.D.S., F.A.G.E., Gold Medalist) brings a patient-centric approach to dental and prosthodontic care—taking time to understand each concern, explain the available options clearly, and plan treatment around long-term comfort, function and aesthetics." /><div className="mt-10 grid gap-4 sm:grid-cols-2"><div className="border-l-2 border-accent pl-5"><h3 className="text-xl text-primary">Thoughtful planning</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Every recommendation begins with careful assessment and a clear conversation.</p></div><div className="border-l-2 border-accent pl-5"><h3 className="text-xl text-primary">Personalized care</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Treatment choices are considered around individual needs, comfort and priorities.</p></div></div></div></div></section>

    <section id="clinic" className="bg-primary py-24 text-primary-foreground lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">Dr Dordis Dental Hub</p><h2 className="text-4xl leading-tight md:text-5xl">A modern clinical space designed around your comfort.</h2><p className="mt-6 max-w-xl leading-7 text-primary-foreground/70">From the welcome area to the treatment suite, the clinic brings together a calm atmosphere, contemporary equipment and a thoughtful care experience.</p><div className="mt-9 flex gap-3"><ActionLink type="map" className="bg-background text-primary" /><ActionLink type="call" className="border border-primary-foreground/25 text-primary-foreground" /></div></div><div className="grid grid-cols-2 gap-3"><img src={receptionAsset.url} alt="Reception at Dr Dordis Dental Hub" loading="lazy" className="aspect-[4/5] w-full rounded-md object-cover" /><img src={treatmentAsset.url} alt="Modern dental treatment room" loading="lazy" className="mt-10 aspect-[4/5] w-full rounded-md object-cover" /></div></div></section>

    <section className="py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div className="rounded-md bg-secondary p-8 md:p-12"><Stethoscope className="size-10 text-accent" /><p className="mt-20 text-sm font-bold uppercase tracking-[0.16em] text-accent">Specialist focus</p><h2 className="mt-3 text-4xl text-primary">Prosthodontic expertise</h2></div><div><p className="text-2xl leading-10 text-primary md:text-3xl">Prosthodontics focuses on restoring and replacing damaged or missing teeth—helping rebuild a smile's appearance, comfort and function.</p><p className="mt-6 leading-7 text-muted-foreground">This may include crowns, bridges, dentures, implant-supported restorations and carefully coordinated full-mouth rehabilitation. Dr. Dordi approaches complex needs in clear, patient-friendly steps.</p></div></div></section>

    <section id="services" className="border-y border-border bg-muted/45 py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Services & treatments" title="Care for function, health and aesthetics" copy="Explore treatments available at Dr Dordis Dental Hub. Open any service for a concise overview and treatment visualization." /><div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">{services.map(([title, desc, Icon], i) => <article key={title} className="bg-card"><button onClick={() => setService(service === i ? null : i)} className="flex w-full items-center gap-4 p-5 text-left md:gap-5 md:p-8" aria-expanded={service === i}><span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-accent"><Icon className="size-5" /></span><span className="mr-auto"><span className="block font-display text-xl text-primary">{title}</span><span className="mt-1 block text-sm text-muted-foreground">Treatment overview</span></span><ChevronDown className={`size-5 shrink-0 transition-transform ${service === i ? "rotate-180" : ""}`} /></button>{service === i && <div className="px-5 pb-6 md:px-8 md:pb-8"><video key={`${title}-${service}`} src={serviceVideos[i]} autoPlay muted loop playsInline preload="metadata" aria-label={`${title} treatment visualization`} className="aspect-video w-full rounded-md bg-muted object-cover" /><p className="mt-5 text-sm leading-6 text-muted-foreground">{desc}</p><div className="mt-4"><ActionLink type="whatsapp" className="h-9 bg-primary text-primary-foreground" /></div></div>}</article>)}</div><p className="mt-5 text-xs leading-5 text-muted-foreground">Animated treatment visuals are for general education. Your dentist will explain the approach suitable for your individual needs.</p></div></section>

    <section id="results" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Smile transformations" title="Before & after" copy="Move the slider to compare an illustrative treatment outcome." /><p className="max-w-xs text-xs leading-5 text-muted-foreground">Illustrative visualization. Individual results may vary depending on treatment needs.</p></div><div className="relative mt-12 aspect-[3/2] max-h-[700px] overflow-hidden rounded-md bg-muted"><img src={afterAsset.url} alt="Illustrative smile after treatment" loading="lazy" width="1200" height="800" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${slider}%` }}><img src={beforeAsset.url} alt="Illustrative smile before treatment" loading="lazy" width="1200" height="800" className="h-full max-w-none object-cover" style={{ width: `${10000 / slider}%` }} /></div><div className="pointer-events-none absolute inset-y-0 w-0.5 bg-background" style={{ left: `${slider}%` }}><span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-primary shadow-lg">↔</span></div><span className="absolute left-4 top-4 rounded bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Before</span><span className="absolute right-4 top-4 rounded bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">After</span><input aria-label="Compare before and after smile" type="range" min="8" max="92" value={slider} onChange={(e) => setSlider(Number(e.target.value))} className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0" /></div></div></section>

    <section id="gallery" className="bg-primary py-24 text-primary-foreground lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="The clinic" title="Inside Dr Dordis Dental Hub" copy="A closer look at the welcome areas, clinical equipment and treatment environment." /><div className="mt-12 grid auto-rows-[230px] grid-cols-2 gap-3 md:grid-cols-4">{gallery.map(([src, alt], i) => <button key={src} onClick={() => setLightbox(src)} className={`group overflow-hidden rounded-md ${i === 0 ? "row-span-2" : ""} ${i === 1 ? "col-span-2" : ""}`} aria-label={`View ${alt}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></button>)}</div></div></section>

    <section id="videos" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Video presentation" title="Experience the clinic" copy="Step inside the clinic, see the treatment environment and meet Dr. Dordi before your visit." /><div className="mt-12 grid gap-x-5 gap-y-10 md:grid-cols-2">{videos.map(([src, poster, title]) => <button key={title} onClick={() => setVideo({ src, title })} className="group text-left"><div className="relative aspect-video overflow-hidden rounded-md"><img src={poster} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 grid place-items-center bg-primary/15"><span className="grid size-14 place-items-center rounded-full bg-background text-primary shadow-lg"><Play className="ml-1 size-5 fill-current" /></span></span></div><h3 className="mt-4 text-2xl text-primary">{title}</h3><p className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">Watch presentation <ArrowRight className="size-3" /></p></button>)}</div></div></section>

    <section className="border-y border-border bg-secondary/45 py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Our approach" title="Why Dr Dordis Dental Hub" /><div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{["Personalized Dental Care", "Prosthodontic Expertise", "Modern Clinical Environment", "Patient-Focused Approach", "Comfortable Dental Experiences"].map((x, i) => <div key={x} className="bg-background p-7"><span className="font-display text-3xl text-accent">0{i + 1}</span><h3 className="mt-12 text-xl leading-6 text-primary">{x}</h3></div>)}</div></div></section>

    <section id="contact" className="py-24 lg:py-32"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><SectionTitle eyebrow="Vesu, Surat" title="Visit Dr Dordis Dental Hub" /><div className="mt-9 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-accent" /><div><p className="font-semibold text-primary">Clinic address</p><p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">{address}</p><p className="mt-2 text-xs font-semibold text-accent">Beside International Finance Centre · Opposite Palm Avenue</p></div></div><div className="flex gap-4"><Phone className="mt-1 size-5 text-accent" /><div><p className="font-semibold text-primary">Direct contact</p><a href={phoneHref} className="mt-1 block text-sm text-muted-foreground">+91 95877 26969</a></div></div><div className="flex gap-4"><CircleDot className="mt-1 size-5 text-accent" /><div><p className="font-semibold text-primary">Clinic hours & parking</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Please call or message the clinic to confirm current opening hours and parking guidance before your visit.</p></div></div></div><div className="mt-9 flex flex-wrap gap-3"><ActionLink type="call" className="bg-primary text-primary-foreground" /><ActionLink type="whatsapp" className="bg-accent text-accent-foreground" /><ActionLink type="map" className="border border-border bg-card text-primary" /></div></div><div className="min-h-[460px] overflow-hidden rounded-md border border-border bg-muted"><iframe title="Map to Dr Dordis Dental Hub" src="https://www.google.com/maps?q=Dr+Dordi%27s+Dental+Hub,+Highfield+Ascot,+VIP+Road,+Vesu,+Surat,+Gujarat&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[460px] w-full" /></div></div></div></section>

    <footer className="bg-primary px-5 pb-28 pt-16 text-primary-foreground md:pb-16"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-3"><div><p className="font-display text-2xl">Dr Dordi's Dental Hub</p><p className="mt-3 text-sm text-primary-foreground/60">Personalized dental and prosthodontic care in Vesu, Surat.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Quick links</p><div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">{nav.slice(1, 7).map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground">{label}</a>)}</div></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Need urgent dental guidance?</p><p className="mt-3 text-sm text-primary-foreground/60">Call the clinic directly to describe your concern and confirm availability.</p><a href={phoneHref} className="mt-4 inline-flex items-center gap-2 font-semibold"><Phone className="size-4" />+91 95877 26969</a></div></div><div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50">© 2026 Dr Dordis Dental Hub. Clinical information is general and does not replace an individual dental assessment.</div></div></footer>

    <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-md border border-border bg-background p-2 shadow-2xl md:hidden"><ActionLink type="whatsapp" className="bg-accent text-accent-foreground" /><ActionLink type="call" className="bg-primary text-primary-foreground" /></div>

    {lightbox && <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[70] grid place-items-center bg-primary/90 p-5" role="dialog" aria-modal="true"><button onClick={() => setLightbox(null)} aria-label="Close image" className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-background text-primary"><X /></button><img onClick={(e) => e.stopPropagation()} src={lightbox} alt="Expanded clinic view" className="max-h-[86vh] max-w-6xl rounded-md object-contain" /></div>}
    {video && <div onClick={() => setVideo(null)} className="fixed inset-0 z-[70] grid place-items-center bg-primary/90 p-5" role="dialog" aria-modal="true"><div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl"><div className="mb-3 flex items-center justify-between text-primary-foreground"><h3 className="text-2xl">{video.title}</h3><button onClick={() => setVideo(null)} aria-label="Close video" className="grid size-10 place-items-center rounded-full border border-primary-foreground/30"><X /></button></div><video src={video.src} controls autoPlay className="aspect-video w-full rounded-md bg-primary" /></div></div>}
  </main>;
}
