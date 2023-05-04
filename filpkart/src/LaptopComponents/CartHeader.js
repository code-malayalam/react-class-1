import cart from "./../LaptopSvg/laptopcart.svg";

import styled from "styled-components";

function CartHeader() { 
  return (
    <TotalCardHeader>
      <img src={cart} />
      <span>Cart</span>
    </TotalCardHeader>
  );
}
const TotalCardHeader = styled.div`
  color: white;
`;
export default CartHeader;
