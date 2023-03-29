import React from 'react'
import './footerThree.css'
import renewable from '../assets/renewable.svg'
import bgthree from '../assets/bgthree.svg'

function FooterThree() {
    return(
        <div className="etsy_footer_section_three">
             <div className="etsy_poweredby_svg_bg">
            <img src={bgthree} />
          </div>
          <div className="etsy_poweredby">
            <img src={renewable} />
            <p>Etsy is powered by 100% renewable electricity.</p>
          </div>
        </div>
    )
}

export default FooterThree