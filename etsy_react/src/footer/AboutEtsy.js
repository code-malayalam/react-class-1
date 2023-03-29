import React from 'react'
import './aboutEtsy.css'
import countries from '../assets/countries.svg'

function AboutEtsy(){
return(
    <div className='about_etsy'>
        <div className='more_about_etsy'>
            <div className='etsy_countries'>
            <img src={countries} />
              <p>India</p>
              <p>|</p>
              <p>English (UK)</p>
              <p>|</p>
              <p>₹ (INR)</p>
            </div>
            <div className="etsy_terms">
                <div className='etsy_copyright'>
                <p>© 2023 Etsy, Inc.</p>
                </div>
                <div className="etsy_privacy">
                    <a href="#">Terms of use</a>
                    <a href="#">Privacy</a>
                    <a href="#">Interest-based ads</a>
                    <a href="#">Regions</a>
                </div>
            </div>
        </div>
    </div>
)
}

export default AboutEtsy