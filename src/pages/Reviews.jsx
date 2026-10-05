import { Reveal } from '../components/Layout'
import { BigCta, PageHero, ReviewCards } from '../components/Common'

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="5.0 Google Rating · 16 Reviews"
        title="DON'T TAKE"
        accent="OUR WORD FOR IT."
        copy="ColdShine has earned a perfect Google rating from customers who care about the same thing we do: the finished result."
        image="hero-detailing.webp"
      />

      <section className="section cream-section review-page-section">
        <div className="shell">
          <Reveal>
            <div className="review-summary">
              <div className="giant-rating"><strong>5.0</strong><span className="acid-stars">★★★★★</span><small>16 Google reviews</small></div>
              <div><p className="eyebrow numbered"><strong>01</strong><span></span> Customer Love</p><h2 className="display-heading">REAL CARS.<br /><em>REAL RESULTS.</em></h2></div>
            </div>
          </Reveal>
          <Reveal><ReviewCards /></Reveal>
        </div>
      </section>

      <section className="section dark-section review-trust-section">
        <div className="shell trust-grid">
          <Reveal><div><strong>5.0</strong><span>Google Rating</span><p>Perfect rating across the current review profile.</p></div></Reveal>
          <Reveal><div><strong>16</strong><span>Reviews</span><p>Customer feedback focused on quality, value and visible results.</p></div></Reveal>
          <Reveal><div><strong>DFW</strong><span>Mobile Service</span><p>ColdShine brings the detailing setup to the customer.</p></div></Reveal>
        </div>
      </section>
      <BigCta />
    </>
  )
}
