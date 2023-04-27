import React, { useState, useEffect } from "react";
import CarouselContainer from "./CarouselContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux-toolkit/dataReducer";

function BeautyAndFood() {
  const [slideLeft, setSlideLeft] = useState(0);
  const bg = `https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90`;

  //   const [beautyData, setBeautyData] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("./data.json");
  //       const json = await res.json();
  //       setBeautyData(json.beautyAndFood);
  //     };
  //     fetchData();
  //   }, []);

  const dispatch = useDispatch();

  const details = useSelector((state) => {
    return state.data.data.beautyAndFood;
  });

//   console.log(details)
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleRightClick = () => {
    const container = document.querySelector(".Beauty");

    const width = window.innerWidth - 230;

    container.scrollLeft += width;

    setSlideLeft((container.scrollLeft += width));
  };

  const handleLeftClick = () => {
    const container = document.querySelector(".Beauty");

    const width = window.innerWidth - 230;

    container.scrollLeft -= width;

    setSlideLeft((container.scrollLeft -= width));
  };

  return (
    <CarouselContainer
      heading="Beauty ,Food, Toys & more"
      handleLeftClick={handleLeftClick}
      handleRightClick={handleRightClick}
      data={details}
      // data={beautyData}
      backgroundImage={bg}
      slideLeft={slideLeft}
      innerWidth={window.innerWidth - 230}
    />
  );
}

export default BeautyAndFood;
