import React, { useState, useEffect, useRef } from 'react'
import { playButtonSVG, ratingStarHalfSVG, WishlistSVG } from '../Constants'
import ratingStarSVG from '../assets/ratingStarSVG.svg'
import halfRatingStar from '../assets/halfRatingStar.svg'
import playbutton from '../assets/playbutton.svg'
import './popular.css'
import WishListButton from './WishListButton'


function Popular(props) {
    const [data, setData] = useState([])
    const [item, setItem]= useState([])
    const priceValue = useRef()

    const {
        onClick
    } = props

    useEffect(() => {
        fetch('popular.json')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setData(data)
                setItem(data)
            })
        }, [])
        console.log(item)

    const onListChange = () => {
        console.log(priceValue.current.value)
        const priceRate = +priceValue.current.value
        console.log(item)

        const newFilter = item.filter((element) => calculateActualPrice(element.oldPrice, element.offer) >= priceRate)
    
        setData(newFilter)

        console.log(newFilter)
    } 

    return (
        <div className="popular">
            <div className="popular_card_section">
                <div className="popular_heading">
                    Popular gifts right now
                </div>
                <div className="popular_filter_button" >
                    <input type="number" className="popular_filter " placeholder="Filter Price" ref={priceValue} />
                    <button className="popular_button" onClick={onListChange}>&#x3e;</button>
                </div>  

            </div>
            <div className='popular_cards'>
                {data.map((item) => {
                    return (   
                        <div className="popular_key" key={item.url}>
                            <div className="popular_card">
                                <div className="popular_image">
                                    <img src={item.url} />
                                    <PlayVideo item={item} />
                                    <div>{playButton(item.button)}</div>
                                </div>
                                <div className="popular_name">
                                    {item.name}
                                </div>
                                <div className="popular_ratings">
                                    {RatingStars(item.rating)}
                                    <div className="rated">
                                        ({item.raters})
                                    </div>
                                </div> 
                                <div className="popular_amount" >
                                    <div className="popular_price" onChange={onClick}>
                                        {item.symbol}{calculateActualPrice(item.oldPrice, item.offer)} 
                                    </div>
                                    <div className="popular_offer">
                                        <div className="popular_oldprice">
                                            {item.symbol}{item.oldPrice}
                                        </div>
                                        <div className="new_offer">
                                            {item.offer}% off on
                                        </div>
                                    </div>
                                </div>
                                {popularDelivery(item.delivery)}
                                <div className="wishlist_items">
                                    <WishListButton />
                                </div>
                                <div className="popular_detail">
                                    {item.detail}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//  **************************************************************
function calculateActualPrice(oldPrice, offer) {
    return (
        Number(Math.floor(oldPrice) * (100 - offer) / 100).toFixed(0)
    )
}
// ***************************************************************** 

function Star() {
    return (<div className='rating_star'>
        <img src={ratingStarSVG}/>
        </div>)
}
function HalfStar() {
    return (<div className='rating_star'>
        <img src={halfRatingStar}/>
        </div>)
}

function RatingStars(props) {
     let ratingArr = [];
    for (let i = 0; i < Math.floor(props); i++) {
        ratingArr.push(<Star />)
    }
    if (Math.floor(props) < props) {
        ratingArr.push(<HalfStar />)
    }
    return (<>{ratingArr}</>)
}
// ***************************************************************************************

function PlayButton() {
    return (<button className="play_button">
        <img src={playbutton}/>
    </button>)
}
function playButton(button) {
    if (button !== "") {
        return (
            <PlayButton />
        )
    }
}  
// ******************************************************************************************

function popularDelivery(delivery) {
    if (delivery !== "") {
        return (<div className="popular_delivery">{delivery}</div>)
    }
}
// *******************************************************************************************

function PlayVideo(props) {
    const {
        videoURL
    } = props.item
    // console.log(videoURL)
    if (videoURL !== "") {
        return (<video className='play_video' src={videoURL}
            autoPlay={true}
            muted={true}
            type="video/mp4"
            onMouseOver={video}
        />)
    }
}

function video(e) {
    e.target.play()
}
// ************************************************************************************

export default Popular