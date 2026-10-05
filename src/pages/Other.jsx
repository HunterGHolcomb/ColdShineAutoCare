import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Layout'
import { BigCta, PageHero } from '../components/Common'
import { email, phoneDisplay, phoneHref, services } from '../data'
import { asset } from '../utils'

export function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="The Work"
        title="CLEAN CARS."
        accent="CLEAR RESULTS."
        copy="The site is built around one standard: the vehicle should look noticeably better when the work is done."
        image="mobile-detailing.webp"
      />
      <section className="section dark-section work-page">
        <div className="shell">
          <Reveal><p className="eyebrow numbered"><strong>01</strong><span></span> Detail Portfolio</p><h2 className="display-heading">THE FINISH<br /><em>SPEAKS FIRST.</em></h2></Reveal>
          <div className="work-mosaic">
            {[['hero-detailing.webp','Full exterior detail'],['interior-detailing.webp','Interior detailing'],['headlight-polishing.webp','Headlight restoration'],['mobile-detailing.webp','Mobile detailing']].map(([image,label],index) => (
              <Reveal className={`work-tile tile-${index + 1}`} key={image}>
                <img src={asset(image)} alt={label} />
                <div className="work-caption"><span>0{index + 1}</span><strong>{label}</strong></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BigCta />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Cold Shine Auto Care LLC"
        title="DETAILING BUILT"
        accent="AROUND THE FINISH."
        copy="Based in McKinney and mobile throughout DFW, ColdShine combines convenience with the obsessive finish work customers expect from a dedicated detailer."
        image="hero-detailing.webp"
      />
      <section className="section cream-section">
        <div className="shell about-grid">
          <Reveal><div><p className="eyebrow numbered"><strong>01</strong><span></span> The Standard</p><h2 className="display-heading">NO RUSHED<br /><em>FINISHES.</em></h2></div></Reveal>
          <Reveal><div className="prose"><p>The business is structured around mobile service and visible results. Customers can book focused maintenance work, a complete detail, or higher-level finish services depending on what the vehicle needs.</p><p>The common thread across every service is attention to the final presentation: clean lines, improved gloss and a vehicle that feels cared for.</p><Link className="text-arrow" to="/services">Explore Services ↗</Link></div></Reveal>
        </div>
      </section>
      <section className="section dark-section">
        <div className="shell trust-grid">
          <Reveal><div><strong>24/7</strong><span>Open</span><p>Contact the business when it is convenient for you.</p></div></Reveal>
          <Reveal><div><strong>5.0</strong><span>Google Rating</span><p>A perfect current review score from 16 customers.</p></div></Reveal>
          <Reveal><div><strong>DFW</strong><span>Mobile</span><p>Based in McKinney and serving surrounding Dallas–Fort Worth communities.</p></div></Reveal>
        </div>
      </section>
      <BigCta />
    </>
  )
}

export function ContactPage() {
  const [form, setForm] = useState({ name: '', vehicle: '', service: '', details: '' })
  const update = (event) => setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  const sendText = (event) => {
    event.preventDefault()
    const message = `Hi ColdShine! My name is ${form.name}. I drive a ${form.vehicle}. I'm interested in ${form.service || 'detailing'}.${form.details ? ` Details: ${form.details}` : ''} Can I get a quote?`
    window.location.href = `sms:+12149453694?&body=${encodeURIComponent(message)}`
  }

  return (
    <>
      <PageHero
        eyebrow="Booking + Quotes"
        title="TELL US WHAT"
        accent="YOU DRIVE."
        copy="Choose a service, tell us about the vehicle, and start the conversation."
        image="mobile-detailing.webp"
      />
      <section className="section contact-page cream-section">
        <div className="shell contact-layout">
          <Reveal>
            <div className="contact-info">
              <p className="eyebrow numbered"><strong>01</strong><span></span> Contact ColdShine</p>
              <h2 className="display-heading">LET'S GET<br /><em>IT BOOKED.</em></h2>
              <div className="contact-detail-list">
                <a href={phoneHref}><span>Phone</span><strong>{phoneDisplay}</strong></a>
                <a href={`mailto:${email}`}><span>Email</span><strong>{email}</strong></a>
                <div><span>Based in</span><strong>McKinney, Texas</strong></div>
                <div><span>Service area</span><strong>Mobile throughout DFW</strong></div>
                <div><span>Hours</span><strong>Open 24 hours</strong></div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form className="quote-form" onSubmit={sendText}>
              <div className="form-heading"><span>Quote Request</span><strong>Start with the basics.</strong></div>
              <label><span>Name</span><input required name="name" value={form.name} onChange={update} placeholder="Your name" /></label>
              <label><span>Vehicle</span><input required name="vehicle" value={form.vehicle} onChange={update} placeholder="Year, make and model" /></label>
              <label><span>Service</span><select name="service" value={form.service} onChange={update}><option value="">Choose a service</option>{services.map((service) => <option key={service.slug}>{service.name}</option>)}</select></label>
              <label><span>Anything else?</span><textarea name="details" value={form.details} onChange={update} rows="5" placeholder="Condition, location, timing, or what you want addressed" /></label>
              <button className="button acid" type="submit">Text ColdShine For A Quote ↗</button>
              <small>This opens your device’s messaging app. The website does not store the form submission.</small>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="not-found">
      <div className="shell"><p className="eyebrow"><span></span>404</p><h1>PAGE NOT<br /><em>FOUND.</em></h1><Link className="button acid" to="/">Back Home ↗</Link></div>
    </section>
  )
}
