import React, { useEffect } from "react";
import styled from "styled-components";

function DropdownInside(props) {
  let item = props?.value?.list;
  return (
    <Total>
      {item?.map((sub) => {
        return <List>{sub}</List>;
      })}
    </Total>
  );
}
const List = styled.li`
   list-style: none;
    display: flex;
    align-items:center;
    font-size: 14px;
    padding:12px;
    min-height:40px;
    font-weight:500;
    min-width:230px;
    background: white;
    &:hover{
      background-color: #f9f9f9;
    color: #2874f0;
    font-weight: 500;
    }
    
`;
const Total = styled.div`
  display: flex;
  flex-direction: column;
`;

export default DropdownInside;
