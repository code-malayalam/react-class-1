import React from "react";
import star from "./star.svg";
import halfStar from "./halfStar.svg";

function CreateStars(props) {
  const { starno } = props;
  let str = [];

  for (let i = 0; i < Math.floor(starno); i++) {
    str.push(<img src={star} key={i} />);
  }
  if (Math.floor(starno) !== starno) {
    str.push(<img src={halfStar} key="half" />);
  }
  return str;
}

export default CreateStars;
