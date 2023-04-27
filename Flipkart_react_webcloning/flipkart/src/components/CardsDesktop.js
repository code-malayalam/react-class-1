import React, { useState, useEffect } from "react";
import './cardsDesktop.css';
import Card from "./Cards";
import slideLeft from '../svg/slideLeft.svg';
import slideRight from '../svg/slideRight.svg';
import { useDispatch, useSelector } from "react-redux";
import { fetchFlipkartData } from "../reducers/userInfo";

function CardsDesktop() {

    const [electronicsValue, setElectronicsValue] = useState(0);
    const [beautyValue, setBeautyValue] = useState(0);
    const [summerValue, setSummerValue] = useState(0);
    const [essentialsValue, setEssentialsValue] = useState(0);

    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.flipkartData.data;
    })

    useEffect(()=>{
        dispatch(fetchFlipkartData())
    },[])

    const handleClickElectronicsRight = () => {
        const length = document.querySelector('.cards_desktop').getBoundingClientRect().width
        console.log("clicked")
        console.log(length / 464)
        if (electronicsValue <= (length / 464)) {
            setElectronicsValue(electronicsValue + 1)
        }
    }

    const handleClickElectronicsLeft = () => {
        if (electronicsValue >= 0) {
            setElectronicsValue(electronicsValue - 1)
        }
    }

    const handleClickBeautyRight = () => {
        const length = document.querySelector('.cards_desktop').getBoundingClientRect().width
        console.log(length / 464)
        if (beautyValue <= (length / 464)) {
            setBeautyValue(beautyValue + 1)
        }
    }

    const handleClickBeautyLeft = () => {
        if (beautyValue >= 0) {
            setBeautyValue(beautyValue - 1)
        }
    }

    const handleClickSummerRight = () => {
        const length = document.querySelector('.cards_desktop').getBoundingClientRect().width
        console.log(length / 464)
        if (summerValue <= (length / 464)) {
            setSummerValue(summerValue + 1)
        }
    }

    const handleClickSummerLeft = () => {
        if (summerValue >= 0) {
            setSummerValue(summerValue - 1)
        }
    }

    const handleClickEssentialsRight = () => {
        const length = document.querySelector('.cards_desktop').getBoundingClientRect().width
        console.log(length / 464)
        if (essentialsValue <= (length / 464)) {
            setEssentialsValue(essentialsValue + 1)
        }
    }

    const handleClickEssentialsLeft = () => {
        if (essentialsValue >= 0) {
            setEssentialsValue(essentialsValue - 1)
        }
    }

    return (
        <div className="cards_container_section_desktop">
            <div className="cards_container_desktop">
                <div className="card_section_heading_desktop">
                    <div className="heading">Best of Electronics</div>
                    <div className="view_all">VIEW ALL</div>
                </div>
                <div className="cards_desktop">
                    <div className="slide_left_cards" onClick={handleClickElectronicsLeft}>
                        <img src={slideLeft} />
                    </div>
                    <Card cards={data.electronics} value={electronicsValue} />
                    <div className="slide_right_cards" onClick={handleClickElectronicsRight}>
                        <img src={slideRight} />
                    </div>
                </div>
            </div>
            <div className="cards_container_desktop">
                <div className="card_section_heading_desktop">
                    <div className="heading">Beauty, Food, Toys & more</div>
                    <div className="view_all">VIEW ALL</div>
                </div>
                <div className="cards_desktop">
                    <div className="slide_left_cards" onClick={handleClickBeautyLeft}>
                        <img src={slideLeft} />
                    </div>
                    <Card cards={data.BeautyFoodToys} value={beautyValue} />
                    <div className="slide_right_cards" onClick={handleClickBeautyRight}>
                        <img src={slideRight} />
                    </div>
                </div>
            </div>
            <div className="cards_container_desktop">
                <div className="card_section_heading_desktop">
                    <div className="heading">Shop for a Cool Summer</div>
                    <div className="view_all">VIEW ALL</div>
                </div>

                <div className="cards_desktop">
                    <div className="slide_left_cards" onClick={handleClickSummerLeft}>
                        <img src={slideLeft} />
                    </div>
                    <Card cards={data.coolSummer} value={summerValue} />
                    <div className="slide_right_cards" onClick={handleClickSummerRight}>
                        <img src={slideRight} />
                    </div>
                </div>
            </div>
            <div className="cards_container_desktop">
                <div className="card_section_heading_desktop">
                    <div className="heading">Shop Monthly Essentials</div>
                    <div className="view_all">VIEW ALL</div>
                </div>
                <div className="cards_desktop">
                    <div className="slide_left_cards" onClick={handleClickEssentialsLeft}>
                        <img src={slideLeft} />
                    </div>
                    <Card cards={data.monthlyEssentials} value={essentialsValue} />
                    <div className="slide_right_cards" onClick={handleClickEssentialsRight}>
                        <img src={slideRight} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardsDesktop;