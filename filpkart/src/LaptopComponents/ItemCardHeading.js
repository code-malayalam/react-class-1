import React from "react";

import styled from "styled-components";

function ItemCardHeading(props) {
  
  const { itemheading, itemheadingimg } = props.data;
  return (
    <TotalHeading>
      {
        <Headingbtn style={{ backgroundImage: `URL(${itemheadingimg})` }}>
          <span className="heading-content">{itemheading}</span>
          <button className="button-lap">view all</button>
        </Headingbtn>
      }
    </TotalHeading>
  );
}
const TotalHeading = styled.div`
position: relative;
z-index:5;
background:white;`

const Headingbtn = styled.div`
  background-position: 0px bottom;
  background-repeat: no-repeat;
  height: 190px;
  padding: 28px 10px 124px;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: fit-content;
  text-align: center;
  justify-content: flex-end;

  span {
    font-size: 30px;
    width: 243px;
    line-height: 1.38;
    font-weight: 400;
  }

  button {
    background: #2874f0;
    margin-top: 40px;
    color: #fff;
    margin-inline: auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border: none;
    max-width: 96px;
    /* display: inline-block; */
    border-radius: 2px;
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
`;
export default ItemCardHeading;
