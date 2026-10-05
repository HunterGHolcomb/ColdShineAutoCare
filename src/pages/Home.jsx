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
              <p>Professional care. Mobile convenience. A finish youâ€™ll notice the second you see your car.</p>
            </div>
          </Reveal>
          <Reveal><ServiceGrid dark /></Reveal>
          <div className="section-link-row"><Link to="/services">View Every Service <span>â†—</span></Link></div>
        </div>
      </section>

      <section className="standard-split">
        <div className="standard-image"><img src={asset('mobile-detailing.webp')} alt="Glossy detailed vehicle" /></div>
        <div className="standard-copy">
          <Reveal>
            <p className="eyebrow"><span></span> The ColdShine Standard</p>
            <h2 className="display-heading">IF IT'S NOT<br /><em>GLOSSY,</em> WE'RE<br />NOT DONE.</h2>
            <p>From daily drivers to weekend cars, every vehicle gets the same obsessive attention to detail. We come to you across the DFW"&VãÂ÷à¢ÆF—b6Æ74æÖSÒ&Ö–æ’×7FBÖw&–B#à¢ÆF—cãÇ7G&öæsãRãÂ÷7G&öæsãÇ6ÖÆÃävöövÆR&F–æsÂ÷6ÖÆÃãÂöF—cà¢ÆF—cãÇ7G&öæsãb³Â÷7G&öæsãÇ6ÖÆÃå&Wf–Ww3Â÷6ÖÆÃãÂöF—cà¢ÆF—cãÇ7G&öæsäDesÂ÷7G&öæsãÇ6ÖÆÃåvR6öÖRFò–÷SÂ÷6ÖÆÃãÂöF—cà¢ÂöF—cà¢ÄÆ–æ²6Æ74æÖSÒ&'WGFöâ6–B"FóÒ"ö6öçF7B#å7F'B–÷W"FWF–ÂÇ7ãî(isÂ÷7ããÂôÆ–æ³à¢Âõ&WfVÃà¢ÂöF—cà¢Â÷6V7F–öãà ¢Ç6V7F–öâ6Æ74æÖSÒ'6V7F–öâF&²×6V7F–öâ†öÖR×&Wf–Ww2#à¢ÆF—b6Æ74æÖSÒ'6†VÆÂ#à¢Å&WfVÃà¢ÆF—b6Æ74æÖSÒ'&Wf–Ww2Ö†VF–ær×&÷r#à¢ÆF—cà¢Ç6Æ74æÖSÒ&W–V'&÷rçVÖ&W&VB#ãÇ7G&öæsã#Â÷7G&öæsãÇ7ããÂ÷7ãâ7W7FöÖW"Æ÷fSÂ÷à¢Æƒ"6Æ74æÖSÒ&F—7Æ’Ö†VF–ær#äDôâuBD´SÆ'"óãÆVÓäõU"tõ$Bdõ"•BãÂöVÓãÂöƒ#à¢ÂöF—cà¢ÆF—b6Æ74æÖSÒ'6–FR×&F–ær#ãÇ7â6Æ74æÖSÒ&6–B×7F'2#î)ˆ^)ˆ^)ˆ^)ˆ^)˜SÂ÷7ããÇ6ÖÆÃãRãvöövÆR&F–æsÂ÷6ÖÆÃãÂöF—cà¢ÂöF—cà¢Âõ&WfVÃà¢Å&WfVÃãÅ&Wf–Wt6&G26öæFVç6VBóãÂõ&WfVÃà¢ÆF—b6Æ74æÖSÒ'6V7F–öâÖÆ–æ²×&÷r#ãÄÆ–æ²FóÒ"÷&Wf–Ww2#å&VBÆÂ&Wf–Ww2Ç7ãî(isÂ÷7ããÂôÆ–æ³ãÂöF—cà¢ÂöF—cà¢Â÷6V7F–öãà ¢Ä&–t7Fóà¢Âóà¢§Ğ