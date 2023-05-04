import arrow from "./../LaptopSvg/arrowHeader.svg";
import styled from "styled-components";

function MoreHeader() {
  return (
    <Totalmore>
      <span>More</span>
      <img src={arrow} />
    </Totalmore>
  );
}
const Totalmore = styled.div`
  display: flex;
  gap: 3px;
  color: white;
  img {
    transform: rotate(270deg);
  }
`;
export default MoreHeader;
