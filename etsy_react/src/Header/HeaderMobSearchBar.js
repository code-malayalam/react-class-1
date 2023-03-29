import React from 'react'
import './headerMobSearchBar.css'
import hamburger from '../assets/hamburger.svg'
import search from '../assets/search.svg'

function HeaderMobSearchBar() {
    return (
        <div className="mob_header_search_bar">
            <div className="mob_hamburger">
               <img src={hamburger} />
            </div>
            <div className="mob_nav_search_button">
                <input
                    type="text"
                    className="mob_search"
                    placeholder="Search for anything"
                />

                <button className="mob_search_button">
                    <img src={search} />
                </button>
            </div>
        </div>
    )
}

export default HeaderMobSearchBar