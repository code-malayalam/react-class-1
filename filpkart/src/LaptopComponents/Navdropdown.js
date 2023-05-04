import React, { useState } from "react";
import styled from "styled-components";
import DropdownInside from "../components/DropdownInside";

function Navdropdown(props) {
  let mainitems = props.value;
  console.log(mainitems, "this is main items");

  let [subitem, setSubitem] = useState();
  let [actives, setActives] = useState("");
  let clickhandler = (item, index) => {
    setSubitem(item);
     console.log(index);
     
    setActives("active");
  };
  let RemoveFn = () => {
    setSubitem();
  };

  console.log(subitem, "this is the sub item");

  return (
    <>
      <Test
        onMouseLeave={() => {
          RemoveFn();
        }}
      >
        <Toflex>
          {mainitems?.map((item, index) => {
            return (
              <MainList>
                <List
                   
                  className={ `index ${actives}`}
                  onMouseOver={() => {
                    clickhandler(item, index);
                  }}
                >
                  {item.mainitems}
                </List>
              </MainList>
            );
          })}
        </Toflex>
        <DropdownInside value={subitem} />
      </Test>
    </>
  );
}
const Test = styled.div`
  background: #f9f9f9;
  text-align: 400;
  position: absolute;
  z-index: 1;
  display: flex;
`;
const MainList = styled.div``;
const Toflex = styled.div`
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
`;
const List = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 12px;
  min-height: 40px;
  font-weight: 500;
  min-width: 230px;
  background: white;
  &.active {
    background-color: #f9f9f9;
    color: #2874f0;
    font-weight: 500;
  }
`;

export default Navdropdown;
