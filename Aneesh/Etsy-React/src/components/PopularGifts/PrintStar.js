import React from "react";
import HalfStar from '../../svgs/HalfStar.svg'
import FullStar from '../../svgs/FullStar.svg'

function PrintStar(props) {
  let { rating } = props;

  if (rating >= 5) {
    rating = 5;
  }

  function loopStar() { 
    let starArr = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      starArr.push(<span key={i}><img src={FullStar}/></span>);
    }
    if (rating - Math.floor(rating) !== 0) {
      starArr.push(<span key={5}><img src={HalfStar} /></span>);
    }

    return starArr;
  }

  const starList = loopStar(rating);

  return (<>{starList}</>);
}

export default PrintStar;
