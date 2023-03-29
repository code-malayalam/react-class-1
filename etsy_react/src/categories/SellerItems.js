import React, { useState, useEffect } from 'react'
import sellergift from '../assets/sellergift.svg'
import './SellerItems.css'

function SellerItems(props) {
    const [category, setData] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setData(data)
                // console.log(data)
            })
    }, [])
 
    return (
        <div className='seller_items'>
            <ul className="categories">
                {category.map((item) => {
                    // console.log(item)
                    return (
                        <div key={item.list}>
                            <li>
                            {giftSvg(item.img)}
                                {item.list}</li>
                           <div></div>
                        </div>
                    )
                })
                }
            </ul>
        </div>
    )
}

// *******************************************************

function giftSvg(image){
    if (image !=="") {
        return (
            <div className='giftSvg'>
                <img src={sellergift}/>
                </div>
        )
    }
}


export default SellerItems