import React, { useEffect, useRef, useState } from "react";
import CarouselContainer from "./CarouselContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux-toolkit/dataReducer";

function BestOfElectronics() {
  const [elecData, setElecData] = useState([]);
  const [slideLeft, setSlideLeft] = useState(0);
  const bg = `https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90`;

  const slideRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setElecData(json.bestOfElectronics);
    };
    fetchData();
  }, [setElecData]);
  //   const dispatch = useDispatch();

  //   const details = useSelector((state) => {
  //     return state.dataInfo.data;
  //   });

  //   useEffect(() => {
  //     dispatch(fetchData());
  //   }, [dispatch]);

  const handleRightClick = () => {
    const container = document.querySelector(".Best");

    const width = window.innerWidth - 230;

    container.scrollLeft += width;

    setSlideLeft((container.scrollLeft += width));
    console.log(slideLeft);
    console.log(window.innerWidth);
  };

  const handleLeftClick = () => {
    const container = document.querySelector(".Best");

    const width = window.innerWidth - 230;

    container.scrollLeft -= width;

    setSlideLeft((container.scrollLeft -= width));
  };

  return (
    <>
      <CarouselContainer
        heading="Best of Electronics"
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        data={elecData}
        // data={details.bestOfElectronics}
        backgroundImage={bg}
        slideRef={slideRef}
        slideLeft={slideLeft}
        innerWidth={window.innerWidth - 230}
      />
    </>
  );
}

export default BestOfElectronics;
