import React from "react";
import FiveStars from '../Assets/FiveStars.svg'
import halfStars from '../Assets/halfStars.svg'

export function StarGenerator(props) {
  let { star } = props.item;
  console.log(star)
  let starArray = []

  if(star >= 5){
    star = 5
  }


  function toLoopStars(star){
    for(let i = 0; i < Math.floor(star); i++){
      console.log(FiveStars, Math.floor(star))
      starArray.push(<img src={FiveStars}></img>)
      // console.log(starArray[0].props)
      
    }
    if(star - Math.floor(star) !== 0){
      starArray.push(<img src={halfStars}></img>)
    }
    // return <>{starArray}</>
    // console.log(starArray)
  }

 toLoopStars(star)
}
