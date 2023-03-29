import React from 'react'
import './mobHeader.css'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import basket from '../assets/basket.svg'

function MobHeader() {
    return (
        <div className='mob_header'>
        <div className="etsy_logo">
      <img src={logo} />
            
        </div>
        <div className="header_icons">
            <div className="mob_signin">
                <p>Sign in</p>
            </div>
            <div className="mob_like">
            <img src={like} />
            
            </div>
            <div className="mobile_basket">
            <img src={basket}/>
            </div>
        </div>
        </div>
    )
}

export default MobHeader