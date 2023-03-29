import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderSearchBar from './HeaderSearchBar'
import './headerDes.css'
import SignIn from './SignIn'
import Like from './Like'
import Basket from './Basket'


function HeaderDes() {
    return (
        <div className='header_logo'>
            <HeaderLogo />
            <HeaderSearchBar />
            <SignIn />
            <Like />
            <Basket />
        </div>
    )
}

export default HeaderDes