import React from "react";
import { useState, useEffect } from "react";
import TotalItem from "./TotalItem";
import styled from "styled-components";

function Maincontainerpage() {
  const [data, setData] = useState([]);
  const [datatwo, setDatatwo] = useState([]);
  const [datathree, setDatathree] = useState([])
  const fetchData = async () => {
    const response = await fetch("./lapdata.json");
    const json = await response.json();
    if (json) {
      setData(json.ProductDeatilsone);
      setDatatwo(json.ProductDeatilstwo);
      setDatathree(json.ProductDeatilsthree)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Fitcontent>
        <TotalItem data={data} />
        <TotalItem data={datatwo} />
        <TotalItem data={datathree} />
      </Fitcontent>
    </>
  );
}
const Fitcontent = styled.div`
  width: fit-content;
  margin: auto;
`;

export default Maincontainerpage;
