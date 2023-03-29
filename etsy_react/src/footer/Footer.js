import React from 'react'
import FooterMainDes from './FooterMainDes'
import AboutEtsy from './AboutEtsy'
import FooterEtsy from './FooterEtsy'
import FooterMainSection from './FooterMainSection'
import FooterThree from './FooterThree'
import Offers from './Offers'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <FooterEtsy />
                <Offers />
                <FooterThree />
                <FooterMainSection />
                <FooterMainDes />
                <AboutEtsy />
            </div>
        </div>
    )
}

export default Footer