
import ItemCardHeading from "./ItemCardHeading";
import LaptopSingleCard from "./LaptopSingleCard";
import styled from "styled-components";

function TotalItem({ data }) {
  return (
    <Totalitem >
      <ItemCardHeading data={data} />
      <LaptopSingleCard itemDetails={data.itemdetails} ></LaptopSingleCard>
    </Totalitem>
  );
}

const Totalitem = styled.div`
  display: flex;
  max-width: 1440px;
  overflow: hidden;
  margin: auto;
  margin-top: 10px;
  background-color: white;
  position: relative;

`;

export default TotalItem;
