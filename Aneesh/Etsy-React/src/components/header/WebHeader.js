import React from 'react'
import './WebHeader.css'
import EtsyLogoSection from './Etsy-logo-section'
import Form from './Form'
import LoginWishlistSection from './LoginWishlist'

function WebHeader(){
    return (
        <div className='website'>
            <EtsyLogoSection />
            <Form />
            <LoginWishlistSection />
        </div>
    )
}

export default WebHeader