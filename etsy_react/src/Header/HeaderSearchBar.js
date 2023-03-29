import React from 'react'
import './headerSearchbar.css'
import search from '../assets/search.svg'

function HeaderSearchBar() {
    return (
        <div className='search_bar'>
            <input type="text" className="search" placeholder="Search for anything" />
            <button className="search_button">
            <img src={search} />
            </button>
        </div>
    )
}

export default HeaderSearchBar