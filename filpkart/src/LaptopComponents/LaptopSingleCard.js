import React, { useEffect } from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";

function LaptopSingleCard(props) {
  const itemdetails = props.itemDetails;
  const [state, setState] = useState(true);
  const [translation, setTranslation] = useState(0);
  const [scroll, setScroll] = useState(5);
  const [widthCard, setWidthCard] = useState(0);
  // const [stateone, setStateone] = useState(false)
  // const [stateTwo, setStaeTwo] = useState(true)
  const refCard = useRef(0);
  let stateone = false
  let stateTwo = true
  
  let Totaltransion = (Math.abs(translation) + 1150)
  useEffect(() => {
    setWidthCard(refCard.current.clientWidth);
    
  }, [itemdetails]);

  let TotalLength = itemdetails?.length;
  if (TotalLength - scroll < 5) {
    
    let Lowlen = TotalLength - scroll;
    setScroll(Lowlen);
  }
  console.log(Totaltransion);
  

    if (Totaltransion !== (widthCard*TotalLength) && translation !== 0){
      stateone =true
      stateTwo = false  
    }

  



  const RigntMovement = () => {
    setTranslation(-widthCard * scroll);
    setScroll(scroll + 5);
    console.log(scroll, "this is scroll");
    if (scroll >= TotalLength - 5) {
      setScroll(5);
      setState(false);
      
    }else{

    }
  };


  console.log(widthCard,"this is width");
  console.log(scroll, "this is scroll");
  console.log(TotalLength, "this is total length");


  const LeftMovement = () => {
    setTranslation(translation + 5 * widthCard);
    setScroll(scroll + 5);
    if (scroll >= TotalLength - 5) {
      setState(true);
      setScroll(5);
      setTranslation(0);
    }
  };
  return (
    <>
      <TotalCard>
      { stateTwo &&( state ? (
          <ArrowButton isRight={true} onclick={RigntMovement} />
        ) : (
          <ArrowButton onclick={LeftMovement} />
        ))}
        {stateone && <ArrowButton isRight={true} onclick={RigntMovement} />} {stateone && <ArrowButton onclick={LeftMovement} />}
        
        <TotalCardItems style={{ transform: `translateX(${translation}px)` }}>
          {itemdetails?.map((item) => {
            return (
              <>
                <Card ref={refCard} >
                  <ImageItem>
                    <img src={item.itemImgage} />
                  </ImageItem>
                  <DetailItems>
                    <span>{item.itemdetails}</span>
                    <span>{item.itemOffers}</span>
                  </DetailItems>
                </Card>
              </>
            );
          })}
        </TotalCardItems>
      </TotalCard>
    </>
  );
}
const Card = styled.div`
  padding: 25px 15px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  max-height: 366px;
  text-align: center;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    opacity: 1;
    max-width: 100%;
    max-height: 100%;
  }
`;
const ImageItem = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const TotalCard = styled.div`
  display: flex;
`;
const TotalCardItems = styled.div`
  display: flex;
  transition: transform 1s ease;
`;

export default LaptopSingleCard;
