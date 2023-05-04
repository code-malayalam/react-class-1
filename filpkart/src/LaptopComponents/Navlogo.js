import styled from "styled-components";
function Navlogo() {
  return (
    <TotalItem>
      <div className="filpkart">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          style={{ width: "75px" }}
        />
      </div>
      <Exploreplus>
        <span>Explore</span>
        <p>plus</p>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
          style={{ width: "10px", height: "10px" }}
        />
      </Exploreplus>
    </TotalItem>
  );
}
const TotalItem = styled.div`
  span {
    color: white;
  }
  p {
    margin: 0;
    color: #ffe500;
  }
`;
const Exploreplus = styled.div`
  font-style: italic;
  display: flex;
  /* font-family: font2; */
  font-size: 11px;
`;

export default Navlogo;
