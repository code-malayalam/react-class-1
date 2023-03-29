import React from 'react'
import Athenus from './Athenus'
import Deals from './Deals'
import DiscoverItems from './DiscoverItems'
import Popular from './Popular'
import SellerItems from './SellerItems'

function Categories() {
    return (
        <>
            <SellerItems />
            <DiscoverItems />            
            <Deals />
            <Popular />
            <Athenus />
        </>
    )
}

export default Categories