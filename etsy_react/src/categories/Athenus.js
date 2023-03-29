import React, { useState, useEffect } from 'react'
import './athenus.css'
import WishListButton from './WishListButton'

function Athenus() {
    
    const [athenus, setData] = useState([])

    useEffect(() => {
        fetch('./athenus.json')
            .then((data) => {
                // console.log(data)
                return data.json()
            })
            .then((data) => {
                setData(data)
            })
    }, [])

    return (
        <div className="athenus">
            <div className='athenus_heading'>
                <div className='athenus_header'>
                    <p>Recently viewed & more</p>
                </div>
                <div className='athenus_subheading'>
                    <p>Show more from the <span>ATHENUS</span> shop</p>
                </div>
            </div>
            <div className="athenus_cards"> 
                {athenus.map((item) => {
                    return (
                        <div key={item.url}>
                            <div className="athenus_card">
                                <div className="athenus_card_img">
                                    <img src={item.url} />
                                </div>
                                <div className='price'>
                                    <div className='new_price'>
                                        {item.currencySymbol} {item.newPrice}
                                    </div>
                                    {athenusNewPrice(item.oldPrice, item.symbol)}
                                </div>
                                <div className="wishlist_items">                                 
                                    <WishListButton />
                           </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function athenusNewPrice(oldPrice, symbol){
    if(oldPrice !== "") {
        return (
            <div className="old_price">
                {symbol}{oldPrice}
            </div>
        )
    }
}
export default Athenus