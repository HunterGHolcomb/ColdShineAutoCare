import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { email, phoneDisplay, phoneHref, primaryServices } from '../data'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo({ top: 0, behavior: 'auto' }), [pathname])
  return null
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return ref
}

export function Reveal({ children, className = '' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal is-visible ${className}`.trim()}>
      {children}
    </div>
  )
}

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="ColdShine home">
      <span className="brand-mark" aria-hidden="true"><i></i><i></i></span>
      <span className="brand-word">COLDSHINE</span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span><span></span>
        </button>
        <nav className={`site-nav ${open ? 'open' : ''}`}>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/our-work">Our Work</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/about">About</NavLink>
          <Link className="header-cta" to="/contact">Get a Quote <span>↗</span></Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand-block">
          <Brand />
          <p>Premium mobile auto detailing based in McKinney and serving the DFW area.</p>
          <div className="footer-rating"><span>5.0</span><span className="acid-stars">★★★★★</span><small>16 Google reviews</small></div>
        </div>
        <div>
          <h4>Navigate</h4>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Popular Services</h4>
          <div className="footer-links">
            {primaryServices.slice(0, 5).map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>{service.name}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="footer-links contact-links">
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <span>McKinney, Texas</span>
            <span>Mobile throughout DFW</span>
            <span>Open 24 hours</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} Cold Shine Auto Care LLC</span>
        <span>Built for the detail difference.</span>
      </div>
    </footer>
  )
}

export function Layout({ children }) {
  useEffect(() => {
    const handleInternalNavigation = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor || anchor.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      let url
      try {
        url = new URL(anchor.href, window.location.origin)
      } catch {
        return
      }

      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname && url.search === window.location.search) return

      event.preventDefault()
      window.location.assign(url.pathname + url.search + url.hash)
    }

    document.addEventListener('click', handleInternalNavigation, true)
    return () => document.removeEventListener('click', handleInternalNavigation, true)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
