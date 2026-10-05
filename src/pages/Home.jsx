import { Link } from 'react-router-dom'
import { Reveal } from '../components/Layout'
import { BigCta, Hero, ReviewCards, ServiceGrid, ServiceTicker } from '../components/Common'
import { asset } from '../utils'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTicker />

      <section className="section dark-section home-services-preview">
        <div className="shell">
          <Reveal>
            <div className="split-intro">
              <div>
                <p className="eyebrow numbered"><strong>01</strong><span></span> What We Do</p>
                <h2 className="display-heading">BUILT TO MAKE<br /><em>YOUR CAR POP.</em></h2>
              </div>
              <p>Professional care. Mobile convenience. A finish you’ll notice the second you see your car.</p>
            </div>
          </Reveal>
          <Reveal><ServiceGrid dark /></Reveal>
          <div className="section-link-row"><Link to="/services">View Every Service <span>↗</span></Link></div>
        </div>
      </section>

      <section className="standard-split">
        <div className="standard-image"><img src={asset('mobile-detailing.webp')} alt="Glossy detailed vehicle" /></div>
        <div className="standard-copy">
          <Reveal>
            <p className="eyebrow"><span></span> The ColdShine Standard</p>
            <h2 className="display-heading">IF IT'S NOT<br /><em>GLOSSY,</em> WE'RE<br />NOT DONE.</h2>
            <p>From daily drivers to weekend cars, every vehicle gets the same obsessive attention to detail. We come to you across the DFW area.</p>
            <div className="mini-stat-grid">
              <div><strong>5.0</strong><small>Google Rating</small></div>
              <div><strong>16+</strong><small>Reviews</small></div>
              <div><strong>DFW</strong><small>We Come To You</small></div>
            </div>
            <Link className="button acid" to="/contact">Start Your Detail <span>↗</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="section dark-section home-reviews">
        <div className="shell">
          <Reveal>
            <div className="reviews-heading-row">
              <div>
                <p className="eyebrow numbered"><strong>02</strong><span></span> Customer Love</p>
                <h2 className="display-heading">DON'T TAKE<br /><em>OUR WORD FOR IT.</em></h2>
              </div>
              <div className="side-rating"><span className="acid-stars">★★★★★</span><small>5.0 Google Rating</small></div>
            </div>
          </Reveal>
          <Reveal><ReviewCards condensed /></Reveal>
          <div className="section-link-row"><Link to="/reviews">Read All Reviews <span>↗</span></Link></div>
        </div>
      </section>

      <BigCta />
    </>
  )
}
