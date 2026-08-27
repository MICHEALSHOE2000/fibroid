import Image from "next/image";
import {
  ArrowRight, BadgeCheck, BookOpen, Check, ChevronRight, CircleAlert,
  Clock3, HeartPulse, Leaf, LockKeyhole, MessageCircle, PackageCheck,
  Phone, ScanLine, ShieldCheck, Sparkles, Stethoscope, Truck,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/2349130961697?text=Hello%20Dr.%20Victor%2C%20I%27m%20interested%20in%20your%20fibroid%20treatment%20products.";

const symptoms = [
  { title: "Heavy or prolonged periods", text: "Bleeding that lasts longer than usual, includes clots, or affects daily life deserves medical attention.", icon: Clock3 },
  { title: "Pelvic pressure or pain", text: "A feeling of fullness, lower abdominal discomfort, painful periods, or lower-back pain can occur.", icon: HeartPulse },
  { title: "Bladder or bowel pressure", text: "Frequent urination, difficulty emptying the bladder, constipation, or bloating may be linked to fibroid size and position.", icon: ScanLine },
  { title: "Fertility concerns", text: "Some fibroids may affect conception or pregnancy, but the effect depends on their type, location, and size.", icon: Sparkles },
];

const fibroidTypes = [
  { number: "01", title: "Intramural", text: "Develops within the muscular wall of the womb and may contribute to heavy bleeding, pain, or pressure." },
  { number: "02", title: "Submucosal", text: "Grows toward the inner cavity of the womb and is more often associated with heavy bleeding or fertility concerns." },
  { number: "03", title: "Subserosal", text: "Grows toward the outer surface of the womb and may cause pressure on nearby organs as it becomes larger." },
];

const gallery = [
  { src: "/utero-clear-front.jpeg", alt: "Front view of Utero Clear 60-capsule herbal wellness product bottle", label: "Front of pack" },
  { src: "/utero-clear-label.jpeg", alt: "Utero Clear package label showing dosage guidance, batch details and printed registration number", label: "Pack details" },
  { src: "/utero-clear-ingredients.jpeg", alt: "Utero Clear bottle label showing stated uses and herbal extract blend", label: "Blend information" },
  { src: "/utero-clear-product.jpeg", alt: "Full product view of Utero Clear herbal wellness capsules", label: "Product view" },
];

const faqs = [
  { question: "Can fibroids be confirmed from symptoms alone?", answer: "No. Symptoms can suggest a problem, but a clinician may recommend an examination and an ultrasound to confirm whether fibroids are present, as well as their size, number, and location." },
  { question: "Does every fibroid need treatment?", answer: "No. Some fibroids cause no symptoms and may only need monitoring. Treatment choices depend on your symptoms, scan findings, overall health, and pregnancy plans." },
  { question: "What information should I send on WhatsApp?", answer: "You can share your age range, main symptoms, how long they have lasted, any recent scan summary, current medicines, and whether you are pregnant, breastfeeding, or trying to conceive. Do not send information you are uncomfortable sharing." },
  { question: "Is Utero Clear a replacement for hospital care?", answer: "No. Utero Clear is presented as a herbal wellness product and should not replace diagnosis, prescribed medicine, emergency care, or advice from a qualified gynaecology professional." },
  { question: "How do I ask about price and delivery?", answer: "Tap any green WhatsApp button. Your message will already be written; send it to ask for the current package, usage information, availability, and delivery options." },
];

function WhatsAppButton({ label, location, secondary = false }: { label: string; location: string; secondary?: boolean }) {
  return (
    <a className={secondary ? "button button-secondary" : "button button-whatsapp"} href={whatsappUrl} target="_blank" rel="noreferrer" data-cta-location={location} aria-label={`${label} on WhatsApp`}>
      <MessageCircle aria-hidden="true" size={20} strokeWidth={2.2} />
      <span>{label}</span><ArrowRight aria-hidden="true" size={18} />
    </a>
  );
}

function FibroidDiagram() {
  return (
    <svg className="fibroid-diagram" viewBox="0 0 560 480" role="img" aria-labelledby="diagram-title diagram-desc">
      <title id="diagram-title">Simplified diagram of common fibroid locations</title>
      <desc id="diagram-desc">A simplified womb diagram showing examples of intramural, submucosal, and subserosal fibroid locations.</desc>
      <defs>
        <linearGradient id="uterusFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f5c8c4" /><stop offset="1" stopColor="#d89f9c" /></linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#4b2521" floodOpacity=".16" /></filter>
      </defs>
      <path d="M86 92c55-39 102-24 145 29l25 31c14 17 34 17 48 0l25-31c43-53 90-68 145-29" fill="none" stroke="#c98c88" strokeLinecap="round" strokeWidth="28" />
      <ellipse cx="78" cy="86" rx="36" ry="24" fill="#e5afab" /><ellipse cx="482" cy="86" rx="36" ry="24" fill="#e5afab" />
      <path d="M181 127c-32 31-47 79-40 129 8 57 44 89 75 108 25 16 42 38 49 66h30c7-28 24-50 49-66 31-19 67-51 75-108 7-50-8-98-40-129-31 35-63 48-99 48s-68-13-99-48Z" fill="url(#uterusFill)" filter="url(#softShadow)" stroke="#b67773" strokeWidth="5" />
      <path d="M225 191c-20 23-29 52-25 83 5 36 28 60 49 74 15 10 25 25 31 45 6-20 16-35 31-45 21-14 44-38 49-74 4-31-5-60-25-83-17 15-35 22-55 22s-38-7-55-22Z" fill="#fff7f5" opacity=".85" />
      <circle cx="182" cy="229" r="35" fill="#8a3439" stroke="#fff6f4" strokeWidth="6" /><circle cx="279" cy="255" r="27" fill="#b44d53" stroke="#fff6f4" strokeWidth="6" /><circle cx="410" cy="270" r="42" fill="#6f2930" stroke="#fff6f4" strokeWidth="6" />
      <g fill="#47201f" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="700"><text x="68" y="218">Intramural</text><text x="240" y="304">Submucosal</text><text x="385" y="332">Subserosal</text></g>
      <g stroke="#6f3431" strokeWidth="2" strokeDasharray="5 6"><path d="M145 216h-28" /><path d="M279 285v12" /><path d="M410 313v11" /></g>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="utility-bar"><div className="container utility-inner"><span><BookOpen size={15} aria-hidden="true" /> Educational fibroid care resource</span><a href="tel:+2349130961697"><Phone size={15} aria-hidden="true" /> 091 3096 1697</a></div></div>
      <header className="site-header"><div className="container nav-wrap">
        <a className="brand" href="#top" aria-label="Utero Clear home"><span className="brand-mark" aria-hidden="true"><Leaf size={22} /></span><span><strong>Utero Clear</strong><small>Women&apos;s wellness support</small></span></a>
        <nav aria-label="Main navigation"><a href="#understand">Understand fibroids</a><a href="#product">The product</a><a href="#questions">Questions</a></nav>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-cta-location="navigation"><MessageCircle size={18} aria-hidden="true" /> Chat privately</a>
      </div></header>

      <section className="hero" id="top"><div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container hero-grid"><div className="hero-copy">
          <p className="eyebrow"><span /> A calmer first step for fibroid concerns</p>
          <h1>Understand what your body may be telling you—then take an<em> informed next step.</em></h1>
          <p className="hero-lead">Clear, compassionate fibroid education and private WhatsApp guidance about Utero Clear, a herbal women&apos;s wellness product.</p>
          <div className="hero-actions"><WhatsAppButton label="Speak with Dr. Victor" location="hero" /><a className="text-link" href="#understand">Learn about fibroids <ChevronRight size={18} aria-hidden="true" /></a></div>
          <div className="privacy-note"><LockKeyhole size={18} aria-hidden="true" /><p><strong>Your first message is already written.</strong>You choose what health information to share.</p></div>
        </div><div className="hero-visual"><div className="product-stage">
          <span className="stage-label">Real product photography</span><div className="stage-ring" aria-hidden="true" />
          <Image className="hero-product-image" src="/utero-clear-front.jpeg" alt="Utero Clear herbal wellness capsules in a 60-capsule bottle" width={750} height={1000} priority />
          <div className="floating-card floating-card-top"><BadgeCheck size={19} aria-hidden="true" /><span><strong>60 capsules</strong>As shown on the pack</span></div>
          <div className="floating-card floating-card-bottom"><MessageCircle size={19} aria-hidden="true" /><span><strong>Private enquiry</strong>Direct on WhatsApp</span></div>
        </div></div></div>
      </section>

      <section className="trust-strip" aria-label="Service highlights"><div className="container trust-grid">
        <div><ShieldCheck size={23} aria-hidden="true" /><span><strong>Education first</strong>Clear, responsible information</span></div>
        <div><PackageCheck size={23} aria-hidden="true" /><span><strong>Real pack shown</strong>See the actual product label</span></div>
        <div><LockKeyhole size={23} aria-hidden="true" /><span><strong>Private conversation</strong>You control what you share</span></div>
        <div><Truck size={23} aria-hidden="true" /><span><strong>Delivery enquiry</strong>Ask for current availability</span></div>
      </div></section>

      <section className="section symptoms-section" id="understand"><div className="container">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> Know the signs</p><h2>Fibroids can feel different for every woman.</h2></div><p>Fibroids are common, non-cancerous growths that develop in or around the womb. Some cause no symptoms; others affect bleeding, comfort, energy, or fertility. Only a proper assessment can tell what is happening in your case.</p></div>
        <div className="symptom-grid">{symptoms.map(({ title, text, icon: Icon }, index) => <article className="symptom-card" key={title}><div className="icon-tile"><Icon size={25} aria-hidden="true" /></div><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="source-note"><BookOpen size={18} aria-hidden="true" /><p>Education on this page is aligned with patient guidance from ACOG and the NHS. It is not a diagnosis.</p></div>
      </div></section>

      <section className="section anatomy-section"><div className="container anatomy-grid">
        <div className="diagram-card"><span className="diagram-badge">Educational illustration</span><FibroidDiagram /><p>Not to scale. Your ultrasound report is the reliable guide to location and size.</p></div>
        <div className="anatomy-copy"><p className="eyebrow light"><span /> Location matters</p><h2>“Fibroid” is not one single experience.</h2><p className="section-intro">Symptoms and treatment decisions may depend on where a fibroid grows, how large it is, how many are present, and your pregnancy plans.</p><div className="type-list">{fibroidTypes.map((type) => <article key={type.title}><span>{type.number}</span><div><h3>{type.title}</h3><p>{type.text}</p></div></article>)}</div></div>
      </div></section>

      <section className="section pathway-section"><div className="container pathway-grid">
        <div className="pathway-copy"><p className="eyebrow"><span /> A sensible care pathway</p><h2>Do not guess. Start with the right information.</h2><p>A confident decision begins with understanding your symptoms and, where appropriate, getting a clinical assessment or ultrasound.</p><WhatsAppButton label="Ask a private question" location="care-pathway" secondary /></div>
        <ol className="steps-list"><li><span>1</span><div><h3>Describe what has changed</h3><p>Note your bleeding pattern, pain, pressure symptoms, cycle changes, and how they affect daily life.</p></div></li><li><span>2</span><div><h3>Confirm with appropriate care</h3><p>A qualified clinician may recommend an examination, ultrasound, or blood tests, especially where heavy bleeding may cause anaemia.</p></div></li><li><span>3</span><div><h3>Discuss suitable options</h3><p>Use your results, medical history, and fertility goals to discuss monitoring, medical care, procedures, or supportive wellness choices.</p></div></li></ol>
      </div></section>

      <section className="section product-section" id="product"><div className="container product-grid">
        <div className="product-gallery"><div className="gallery-main"><Image src="/utero-clear-product.jpeg" alt="Utero Clear product bottle photographed from the front" width={750} height={1000} /><span>Actual product</span></div><div className="gallery-thumbs">{gallery.slice(0, 3).map((item) => <figure key={item.src}><Image src={item.src} alt={item.alt} width={750} height={1000} /><figcaption>{item.label}</figcaption></figure>)}</div></div>
        <div className="product-copy"><p className="eyebrow"><span /> Meet Utero Clear</p><h2>Herbal women&apos;s wellness support—with the pack details visible.</h2><p className="section-intro">Utero Clear is presented on its label as a herbal plant extract women&apos;s wellness formula. We show the real bottle so you can see the product information before making an enquiry.</p>
          <div className="pack-facts"><div><strong>60</strong><span>capsules per bottle</span></div><div><strong>A7-2963</strong><span>NAFDAC Reg. No. printed on pack</span></div><div><strong>Herbal</strong><span>extract blend stated on label</span></div></div>
          <div className="important-card"><CircleAlert size={22} aria-hidden="true" /><div><h3>Important before use</h3><p>Ask for clear usage guidance and disclose current medicines, pregnancy, breastfeeding, fertility treatment, allergies, and ongoing medical care before starting any supplement.</p></div></div>
          <ul className="check-list"><li><Check size={18} aria-hidden="true" /> Ask about the current package and availability</li><li><Check size={18} aria-hidden="true" /> Request product and usage information</li><li><Check size={18} aria-hidden="true" /> Discuss delivery options for your location</li></ul>
          <WhatsAppButton label="Get product information" location="product" /><p className="micro-copy">Opening WhatsApp does not commit you to a purchase.</p>
        </div>
      </div></section>

      <section className="section proof-section"><div className="container"><div className="section-heading centered"><p className="eyebrow"><span /> Transparent product view</p><h2>Look at the bottle before you ask about it.</h2><p>Front, side, stated blend, dosage area, batch information, and the registration number printed on this supplied pack.</p></div>
        <div className="photo-grid">{gallery.map((item) => <figure key={item.src}><Image src={item.src} alt={item.alt} width={750} height={1000} /><figcaption><BadgeCheck size={17} aria-hidden="true" /> {item.label}</figcaption></figure>)}</div>
        <div className="verification-note"><ShieldCheck size={22} aria-hidden="true" /><p><strong>Verify regulated products independently.</strong> The number A7-2963 is visible on the supplied pack. Check the product name, manufacturer, and current status in the official NAFDAC Greenbook before purchase.</p><a href="https://greenbook.nafdac.gov.ng/" target="_blank" rel="noreferrer">Open NAFDAC Greenbook <ArrowRight size={17} aria-hidden="true" /></a></div>
      </div></section>

      <section className="section whatsapp-section"><div className="container whatsapp-card">
        <div className="chat-illustration" aria-hidden="true"><div className="chat-top"><span /> WhatsApp</div><div className="chat-day">Today</div><div className="chat-bubble">Hello Dr. Victor, I&apos;m interested in your fibroid treatment products.<small>✓✓</small></div><div className="chat-input">Message <MessageCircle size={18} /></div></div>
        <div className="whatsapp-copy"><p className="eyebrow light"><span /> One tap to begin</p><h2>Your question is personal. The conversation can be simple.</h2><p>Tap the button and WhatsApp opens with your first message ready. You can then ask about product details, the current package, and delivery.</p><div className="mini-benefits"><span><LockKeyhole size={17} /> Private enquiry</span><span><MessageCircle size={17} /> No long form</span><span><Phone size={17} /> 091 3096 1697</span></div><WhatsAppButton label="Open my WhatsApp message" location="whatsapp-section" /></div>
      </div></section>

      <section className="section faq-section" id="questions"><div className="container faq-grid"><div className="faq-intro"><p className="eyebrow"><span /> Before you decide</p><h2>Questions women often ask.</h2><p>Good health decisions start with honest information. These answers are educational and general.</p><div className="expert-note"><Stethoscope size={22} aria-hidden="true" /><p><strong>Still unsure?</strong> Ask your question privately before making a purchase.</p></div></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className="urgent-section"><div className="container urgent-card"><CircleAlert size={27} aria-hidden="true" /><div><h2>Seek urgent medical care when symptoms are severe.</h2><p>Get urgent help for very heavy bleeding, fainting, chest pain, shortness of breath, sudden severe pelvic pain, pregnancy with bleeding or pain, or symptoms that feel like an emergency.</p></div></div></section>

      <section className="final-cta"><div className="container final-cta-inner"><div><p className="eyebrow light"><span /> Take the next clear step</p><h2>Ask first. Understand the product. Decide with confidence.</h2></div><div><WhatsAppButton label="Chat with Dr. Victor" location="final-cta" /><p><Phone size={15} aria-hidden="true" /> WhatsApp: 091 3096 1697</p></div></div></section>

      <footer><div className="container footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><Leaf size={22} /></span><span><strong>Utero Clear</strong><small>Women&apos;s wellness support</small></span></a><p>Educational fibroid information and private Utero Clear product enquiries via WhatsApp.</p></div><div><h3>Explore</h3><a href="#understand">Understand fibroids</a><a href="#product">The product</a><a href="#questions">Common questions</a></div><div><h3>Trusted education</h3><a href="https://www.acog.org/womens-health/faqs/uterine-fibroids" target="_blank" rel="noreferrer">ACOG fibroid guidance</a><a href="https://www.nhs.uk/conditions/fibroids/" target="_blank" rel="noreferrer">NHS fibroid guidance</a><a href="https://greenbook.nafdac.gov.ng/" target="_blank" rel="noreferrer">NAFDAC Greenbook</a></div><div><h3>Contact</h3><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: 091 3096 1697</a><p>For product information and delivery enquiries.</p></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Utero Clear. All rights reserved.</p><p className="disclaimer">This website provides general education and product information. It does not diagnose, cure, treat, or prevent disease and does not replace advice from a qualified healthcare professional. Individual results vary.</p></div></footer>

      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" data-cta-location="sticky-mobile" aria-label="Chat with Dr. Victor on WhatsApp"><MessageCircle size={21} aria-hidden="true" /> Chat on WhatsApp</a>
    </main>
  );
}
