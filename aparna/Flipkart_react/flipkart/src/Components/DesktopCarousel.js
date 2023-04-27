import React, { useState, useEffect } from "react";
import LeftBtn from "../Assets/LeftBtn.svg";
import RightBtn from "../Assets/RightBtn.svg";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarouselData } from "../reducers/carousel";
import Slider from 'react-slick';


function DesktopCarousel() {

  
  // const [visibleIndex, setVisibleIndex] = useState(0);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCarouselData())
  }, [])

  const image = useSelector((state) => {
    return state.carousel.data.DesktopCarouselItems
  });


  return (
    <div>
        <Slider autoplay autoplaySpeed={2000} infinite initialSlide={2} >
        {image?.map((items) => {
          console.log(items)
          return (
              <div key={items.id} >
                 <img src={items.img} className="dt-banner" width="100%" height="300px"/>
               </div>
          );
        })}
        </Slider>
      </div>
  );
}

export default DesktopCarousel;
