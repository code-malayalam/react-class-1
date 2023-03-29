import React from 'react'
import MobHeader from './MobHeader'
import './headerMob.css'
import HeaderMobSearchBar from './HeaderMobSearchBar'

function HeaderMob(){
    return (
        <div className="header">
            <MobHeader />
            <HeaderMobSearchBar />
        </div>
    )
}

export default HeaderMob