import React, { useEffect, useRef, useState } from "react";
import "./TopOffers.css";
import CarouselContainer from "./CarouselContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux-toolkit/dataReducer";

function TopOffers() {
  const [offersData, setOffersData] = useState([]);
  const [slideLeft, setSlideLeft] = useState(0);
  const bg = `https://rukminim1.flixcart.com/fk-p-flap/278/278/image/0b22f4bdbe5b032a.jpg?q=90`;

  const slideRef = useRef(null);
  const width = window.innerWidth - 230;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setOffersData(json.topOffers);
    };
    fetchData();
  }, [setOffersData]);

  //   const dispatch = useDispatch();

  //   const details = useSelector((state) => {
  //     return state.dataInfo.data;
  //   });

  //   useEffect(() => {
  //     dispatch(fetchData());
  //   }, [dispatch]);

  const handleRightClick = () => {
    const container = document.querySelector(".Top");

    container.scrollLeft += width;
    setSlideLeft((container.scrollLeft += width));

    console.log(width);

    console.log(slideRef.current.style.width);
  };

  const handleLeftClick = () => {
    const container = document.querySelector(".Top");

    container.scrollLeft -= width;
    setSlideLeft((container.scrollLeft -= width));
  };

  return (
    <CarouselContainer
      heading="Top Offers"
      handleLeftClick={handleLeftClick}
      handleRightClick={handleRightClick}
      data={offersData}
      //   data={details.topOffers}
      backgroundImage={bg}
      slideLeft={slideLeft}
      innerWidth={window.innerWidth - 230}
      slideRef={slideRef}
    />
  );
}
export default TopOffers;
