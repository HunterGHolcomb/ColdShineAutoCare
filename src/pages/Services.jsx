import { useEffect, useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Layout'
import { BigCta, PageHero, RelatedServices, ServiceGrid } from '../components/Common'
import { phoneDisplay, phoneHref, primaryServices, services } from '../data'
import { asset } from '../utils'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="ColdShine Services"
        title="EVERYTHING YOUR"
        accent="CAR NEEDS."
        copy="From maintenance washes to paint correction and coatings, choose the level of care that fits your vehicle."
        image="mobile-detailing.webp"
      >
        <div className="button-row"><Link className="button acid" to="/contact">Get a Quote ↗</Link></div>
      </PageHero>

      <section className="section cream-section">
        <div className="shell">
          <Reveal>
            <div className="split-intro on-cream">
              <div><p className="eyebrow numbered"><strong>01</strong><span></span> Core Services</p><h2 className="display-heading">THE BIG<br /><em>TRANSFORMATIONS.</em></h2></div>
              <p>These are the services that define the ColdShine experience: complete detailing, finish correction, protection and maintenance.</p>
            </div>
          </Reveal>
          <Reveal><ServiceGrid /></Reveal>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <Reveal>
            <div className="split-intro">
              <div><p className="eyebrow numbered"><strong>02</strong><span></span> Specialty Services</p><h2 className="display-heading">FOCUSED CARE.<br /><em>NO SHORTCUTS.</em></h2></div>
              <p>Book a single focused service when the full vehicle does not need a complete reset.</p>
            </div>
          </Reveal>
          <div className="specialty-list">
            {services.filter((s) => !primaryServices.some((p) => p.slug === s.slug)).map((service, index) => (
              <Reveal key={service.slug}>
                <Link className="specialty-row" to={`/services/${service.slug}`}>
                  <span>0{index + 1}</span><h3>{service.name}</h3><p>{service.short}</p><b>↗</b>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BigCta />
    </>
  )
}

export function ServicePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = useMemo(() => services.find((item) => item.slug === slug), [slug])

  useEffect(() => {
    if (!service) navigate('/services', { replace: true })
  }, [service, navigate])

  if (!service) return null

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.name.split(' ').slice(0, -1).join(' ') || service.name}
        accent={service.name.split(' ').slice(-1)[0]}
        copy={service.intro}
        image={service.image}
      >
        <div className="button-row">
          <Link className="button acid" to="/contact">Get a Quote ↗</Link>
          <a className="button ghost" href={phoneHref}>Call {phoneDisplay}</a>
        </div>
      </PageHero>

      <section className="section cream-section service-detail-section">
        <div className="shell service-detail-grid">
          <Reveal>
            <div className="service-detail-copy">
              <p className="eyebrow numbered"><strong>01</strong><span></span> What It Includes</p>
              <h2 className="display-heading">DETAILS THAT<br /><em>ADD UP.</em></h2>
              <p>{service.short}</p>
            </div>
          </Reveal>
          <Reveal>
            <ol className="included-list">
              {service.includes.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>)}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="service-story">
        <div className="service-story-image"><img src={asset(service.image)} alt={`${service.name} by ColdShine Auto Care`} /></div>
        <div className="service-story-copy">
          <Reveal>
            <p className="eyebrow numbered"><strong>02</strong><span></span> Best For</p>
            <h2 className="display-heading">WHEN THIS<br /><em>SERVICE FITS.</em></h2>
            <ul className="ideal-list">{service.ideal.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="button acid" to="/contact">Request This Service ↗</Link>
          </Reveal>
        </div>
      </section>

      <RelatedServices currentSlug={slug} />
      <BigCta compact />
    </>
  )
}
