import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { primaryServices, reviews, phoneHref, email, services } from '../data'
import { asset } from '../utils'
import { Reveal } from './Layout'

export function Hero() {
  const imageRef = useRef(null)

  useEffect(() => {
    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        if (imageRef.current) {
          const offset = Math.min(window.scrollY * 0.08, 55)
          imageRef.current.style.transform = `scale(1.06) translateY(${offset}px)`
        }
        raf = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="home-hero">
      <div className="home-hero-media">
        <img ref={imageRef} src={asset('hero-detailing.webp')} alt="Professional mobile auto detailing" />
        <div className="home-hero-shade"></div>
      </div>
      <div className="shell home-hero-inner">
        <Reveal className="hero-copy-block">
          <p className="eyebrow"><span></span> Mobile Detailing · McKinney, TX · DFW</p>
          <h1>THE DETAIL<br /><em>DIFFERENCE.</em></h1>
          <p className="hero-description">Premium mobile auto detailing that brings the shop-quality finish directly to your driveway.</p>
          <div className="button-row">
            <Link className="button acid" to="/contact">Book Your Detail <span>↗</span></Link>
            <Link className="button ghost" to="/services">Explore Services <span>↓</span></Link>
          </div>
          <div className="hero-proof">
            <strong>5.0</strong>
            <span className="acid-stars">★★★★★</span>
            <small>16 Google Reviews</small>
            <i></i>
            <small>Proudly Serving DFW</small>
          </div>
        </Reveal>
      </div>
      <div className="vertical-scroll">Scroll <span>↑</span></div>
    </section>
  )
}

export function ServiceTicker() {
  const labels = ['Exterior Detailing', 'Paint Correction', 'Ceramic Coating', 'Headlight Restoration', 'Interior Detailing']
  return (
    <div className="service-ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...labels, ...labels].map((label, index) => (
          <span key={`${label}-${index}`}><b>✦</b>{label}</span>
        ))}
      </div>
    </div>
  )
}

export function ServiceGrid({ limit, dark = false }) {
  const list = limit ? primaryServices.slice(0, limit) : primaryServices
  return (
    <div className={`service-grid ${dark ? 'dark-grid' : ''}`}>
      {list.map((service, index) => (
        <Link className="service-card" key={service.slug} to={`/services/${service.slug}`}>
          <span className="service-index">0{index + 1}</span>
          <h3>{service.name}</h3>
          <p>{service.short}</p>
          <span className="service-link">View Service ↗</span>
        </Link>
      ))}
    </div>
  )
}

export function ReviewCards({ condensed = false }) {
  return (
    <div className={`review-grid ${condensed ? 'condensed' : ''}`}>
      {reviews.map((review, index) => (
        <article className="review-card" key={review.text}>
          <div className="review-stars"><span className="acid-stars">★★★★★</span><small>5.0</small></div>
          <blockquote>“{review.text}”</blockquote>
          <footer>{review.source}</footer>
          <span className="review-number">0{index + 1}</span>
        </article>
      ))}
    </div>
  )
}

export function PageHero({ eyebrow, title, accent, copy, image = 'hero-detailing.webp', children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-media"><img src={asset(image)} alt="" /></div>
      <div className="page-hero-shade"></div>
      <div className="shell page-hero-content">
        <Reveal>
          <p className="eyebrow"><span></span>{eyebrow}</p>
          <h1>{title}<br /><em>{accent}</em></h1>
          {copy && <p className="page-hero-copy">{copy}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export function RelatedServices({ currentSlug }) {
  const related = services.filter((service) => service.slug !== currentSlug).slice(0, 3)
  return (
    <section className="section dark-section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow"><span></span> Explore More</p>
          <h2 className="display-heading smaller">OTHER WAYS TO<br /><em>UPGRADE THE FINISH.</em></h2>
        </Reveal>
        <div className="related-grid">
          {related.map((service) => (
            <Reveal key={service.slug}>
              <Link className="related-card" to={`/services/${service.slug}`}>
                <img src={asset(service.image)} alt="" />
                <div><span>{service.eyebrow}</span><h3>{service.name}</h3><b>View Service ↗</b></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BigCta({ compact = false }) {
  return (
    <section className={`big-cta ${compact ? 'compact' : ''}`}>
      <div className="big-cta-media"><img src={asset('hero-detailing.webp')} alt="" /></div>
      <div className="big-cta-shade"></div>
      <div className="big-cta-content">
        <Reveal>
          <p className="eyebrow"><span></span> Mobile Detailing · DFW</p>
          <h2>READY TO MAKE<br /><em>YOUR CAR SHINE?</em></h2>
          <p>Tell us what you drive. We’ll take care of the rest.</p>
          <div className="button-row centered"><a className="button acid" href={phoneHref}>Call 214-945-3694 ↗</a><a className="email-link" href={`mailto:${email}`}>{email}</a></div>
        </Reveal>
      </div>
    </section>
  )
}
