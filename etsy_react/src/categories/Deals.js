import React, { useState, useEffect } from 'react'
import './Deals.css'

function Deals() {
    const [deals, setData] = useState([])

    useEffect(() => {
        fetch('./deals.json')
            .then((data) => {
                // console.log({hello:data})
                return data.json()
            })
            .then((data) => {
                setData(data)
                // console.log(data)

            })
    }, [])


    return (
        <div className='deals'>
            <div className="deals_header">
                <p className="deals_day">Deals of the day</p>
                <p className="shop_deals">Shop all deals &#10132;</p>
            </div>
            <div className='deals_cards'>
                {deals.map((item) => {
                    // console.log(item)
                    return (
                        <div key={item.url}>
                            <div className="deal_card">
                                <div className='deal_image'>
                                    <img src={item.url} />
                                </div>
                                <div className='deals_off'>             
                                {item.offer}
                                </div>
                                <div className='deals_name'>                
                                {item.name}
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}

export default Deals