import React from 'react'
import EtsyLogoSection from './Etsy-logo-section'
import MenuOptions from './MenuOptions'
import './MobileHeader.css'
import MobileLogin from './MobileLogin'
import MobileSearch from './MobileSearch'

 
function MobileHeader(){
    return (
        <div className='mobile'>
           <EtsyLogoSection />
            <MobileLogin />
            <MobileSearch />
        </div>
    )
}

export default MobileHeader