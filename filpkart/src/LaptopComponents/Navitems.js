import { useState } from "react";
import { useEffect } from "react";
import NavCard from "./NavCard";
import styled from "styled-components";

function Navitems() {
  const [itemdata, setData] = useState([]);
  let fetchdata = () =>
    fetch("./lapdata.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.laptopNav);
      });
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Totalnav>
      <NavCard items={itemdata} />
    </Totalnav>
  );
}
const Totalnav = styled.div`
  height: 114px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  display: flex;
`;

export default Navitems;
