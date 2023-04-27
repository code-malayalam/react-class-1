import React, { useEffect, useState } from "react";
import './carousel.css';
import slideLeft from '../svg/slideLeft.svg';
import slideRight from '../svg/slideRight.svg';
import { useDispatch, useSelector } from "react-redux";
import { fetchFlipkartData } from "../reducers/userInfo";

function CarouselDeskTop() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.flipkartData.data;
    })

    useEffect(()=>{
        dispatch(fetchFlipkartData);
    })

    const carouselScroll = () => {
        if (currentIndex === data.desktopCarousel.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            carouselScroll()
        }, 3000)
        return () => clearInterval(interval)
    })

    const handleClickRight = () => {
        setCurrentIndex(currentIndex + 1)
        console.log(currentIndex)
    }

    const handleClickLeft = () => {
        setCurrentIndex(currentIndex - 1)
    }

    return (
        <div className="desktop_container">
            <div className="border"></div>
            <div className="carousel_desktop_container">
                <div className="carousel_img_container">
                    <div className="slide_left" onClick={handleClickLeft}>
                        <img src={slideLeft} />
                    </div>
                    <div className="carousel_container_desktop">
                        {
                            data?.desktopCarousel?.map((item) => {
                                return (

                                    <img key={item.id} src={item.img}
                                        style={{ transform: `translate(-${currentIndex * 100}%)` }}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="slide_right" onClick={handleClickRight}>
                        <img src={slideRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarouselDeskTop;