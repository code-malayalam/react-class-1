import React, { useState, useEffect } from 'react'
import './discoverItem.css'

function DiscoverItems() {
    const [discover, setData] = useState([])

    useEffect(() => {
        fetch('/discover.json')
            .then((data) => {
                // console.log(data.json)
                return data.json()
            })
            .then((data) => {
                setData(data)
                // console.log(data)
            })
    }, [])

    return (
        <div className='discover'>
            <div className="discover_heading">
                <p className="dis">Discover one-of-a-kind items from independent creators</p>
            </div>
            <div className="discover_main_section">
                <div className='discover_background'></div>
            </div>
            <div className="discover_cards">
                {discover.map((item) => {
                    // console.log(item)
                    return (
                        <div key={item.url}>
                            <div className="discover_card">
                                <div className="discover_card_img">
                                    <img src={item.url} />
                                </div>
                                <div className="discover_card_name">
                                    {item.name}
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )

}

export default DiscoverItems