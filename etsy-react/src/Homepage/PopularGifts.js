import React, { useState, useEffect } from "react";
import { popularHeadingText } from "../components/Constants";
import PopularCards from "../components/PopularGifts/PopularCards";
import fetchData from "../functions/fetchData";
import '../components/PopularGifts/popularGift.css';

function PopularGifts() {

    const [gift, setGift] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        async function PopularGiftsData() {
            const popularResponse = await fetchData();
            setGift(popularResponse.popularCardItems)
        }
        PopularGiftsData();
    }, [])

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleFilter = () => {
        const filterValue = Number(inputValue)
        const filterItems = gift.filter((item) => {
            const price = Number(Math.floor(item.oldPrice * (100 - item.discount) / 100).toFixed(0));
            return filterValue < price
        })
        setGift(filterItems)
    }

    return (
        <div className="popular_gifts">
            <div className="popular_gifts_filter">
                <input className="filter_input" type="number" onChange={handleChange} />
                <button onClick={handleFilter} className="filter_btn">Filter</button>
            </div>
            <p className="deals popular">{popularHeadingText}
            </p>
            <div className="popular_container">
                {
                    gift.map((item) => {
                        return (
                            <PopularCards item={item} key={item.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopularGifts;