import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";

function LaptopCarousel() {
  const [carouseldata, setCarouseldata] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [transition, setTranstion] = useState(0.3);
  const [time, setTime] = useState(10000);
  const [flag, setFlag] = useState(false);

  let fetchdata = async () => {
    try {
      const respose = await fetch("./lapdata.json");
      const json = await respose.json();
      setCarouseldata(json.carousel);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      {
        flag ? Leftclick() : UpdateIndex();
      }
      setFlag(false);
    }, time);
    return () => {
      clearInterval(interval);
    };
  }, [visibleIndex]);

  let UpdateIndex = () => {
    if (visibleIndex == carouseldata?.length - 1) {
      setTime(10);
      setVisibleIndex(1);
      setTranstion(0);
    } else {
      setVisibleIndex(visibleIndex + 1);
      setTranstion(0.3);
      setTime(2000);
    }
  };
  let Leftclick = () => {
    if (visibleIndex === 0) {
      setTime(10);
      setVisibleIndex(carouseldata?.length - 2);
      setTranstion(0);
      setFlag(true);
    } else {
      setVisibleIndex(visibleIndex - 1);
      setTranstion(0.3);
      setTime(2000);
    }
  };

  return (
    <>
      <CarouselContainer>
        <ArrowButton
          isRight={true}
          onclick={() => {
            UpdateIndex();
          }}
        />
        <ArrowButton
          onclick={() => {
            Leftclick();
            // UpdateIndex();
          }}
        />
        <SingleContainer
          style={{
            transform: `translateX(-${visibleIndex * 100}%)`,
            transition: `transform ${transition}s ease-in-out`,
          }}
        >
          {carouseldata?.map((item) => {
            return (
              <Imagecontainer key={item.id}>
                <img src={item.img} />
              </Imagecontainer>
            );
          })}
        </SingleContainer>
      </CarouselContainer>
    </>
  );
}
const CarouselContainer = styled.div`
  max-width: 1440px;
  overflow: hidden;
  position: relative;
  margin: auto;
`;
const SingleContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Imagecontainer = styled.div`
  width: 100%;
`;

export default LaptopCarousel;
