import React, { useEffect, useState } from "react";
import './carousel.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchFlipkartData } from "../reducers/userInfo";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.flipkartData.data;
    })

    useEffect(()=>{
        dispatch(fetchFlipkartData())
    },[])

    const carouselScroll = () => {
        if (currentIndex === data.carouselImages.length - 1) {
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

    return (
        <div className="carousel_container">
            <div className="carousel_img_container">
                {
                    data?.carouselImages?.map((item, idx) => {
                        return (
                            <div className="carousel_item" key={item.id}>
                                <img key={item.id} src={item.img} 
                                style={{ transform: `translate(-${currentIndex * 100}vw)` }} 
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="carousel_point_container">
                <div className="carousel_points">
                    {
                        data?.carouselImages?.map((item) => {
                            return (
                                <div key={item.id} className="carousel_point" >
                                </div>
                            )
                        })
                    }
                </div>
                <div className="carousel_single_point">
                    <div className="point" style={{ transform: `translate(${currentIndex * 12}px) scaleX(1)` }}></div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;