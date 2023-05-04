import Header from "./LaptopComponents/Header";
import LaptopCarousel from "./LaptopComponents/LaptopCarousel";
import Maincontainerpage from "./LaptopComponents/Maincontainerpage";
import Navitems from "./LaptopComponents/Navitems";
import styled from "styled-components";

function LaptopItem() {
  return (
    <TotalLaptop>
      <Header />
      <Navitems />
      <Backgroundclr>
      <Widthpage>
      <LaptopCarousel />
      <Maincontainerpage />
      </Widthpage>
      </Backgroundclr>
    </TotalLaptop>
  );
}

const Widthpage = styled.div`
max-width:1400px
margin:auto;`
const Backgroundclr = styled.div`
background-color: #f1f3f6;
`
const TotalLaptop = styled.div`
`

export default LaptopItem;

