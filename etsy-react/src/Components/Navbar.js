import React, { useEffect, useState } from "react";
import gift from "../Assets/gift.svg"

function NavBar() {
  const [nav, setdData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => data.json())
      .then((data) => {
        setdData(data);
      });
  }, []);

  return (
    <ul className="element">
      {nav.map((item) => {
        return (
          <li key={item.title}>
            {listItems(item.img)}
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

function listItems(img) {
  if (img !== "") {
    return (
      <img src={gift}></img>
    );
  }
}

export default NavBar;
