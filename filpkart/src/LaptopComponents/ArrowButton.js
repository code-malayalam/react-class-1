import React from "react";
import arrowsvg from "./../LaptopSvg/lapCarouselArrow.svg";
import styled from "styled-components";
function ArrowButton(props) {


  
  return (
    <>
    {props.isRight ? <Right onClick={props.onclick}>
        <img src={arrowsvg} />
      </Right>: <Left onClick={props.onclick}>
        <img src={arrowsvg} />
      </Left>}
      
     
    </>
  );
}

const Right = styled.button`
  position: absolute;
  top: 35%;
  right: 0;
  transform: rotate(180deg);
  width: 40px;
  height: 100px;
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);
  background-color: hsla(0, 0%, 100%, 0.98);
  border: none;
  cursor: pointer;
  z-index: 6;
`;
const Left = styled.button`
  position: absolute;
  top: 35%;
  width: 40px;
  height: 100px;
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);
  background-color: hsla(0, 0%, 100%, 0.98);
  border: none;
  cursor: pointer;
  z-index: 6;
`;


export default ArrowButton;
// "mainitems": ["Men's Top Wear", "Men Footerware", "Women Western"],
// "Men's Top Wear": ["all", "Men's T-shirt", "Men's Casual Shirts"],
// "Men's T-shirt": ["all", "Men's Casual Shoes", "Men's Sports"],
// "Women Western": ["Women Tops", "Women Dresses", "Women T-shirts"]