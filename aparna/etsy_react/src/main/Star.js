import React from "react";
import FiveStars from '../Assets/FiveStars.svg'
import halfStars from '../Assets/halfStars.svg'

export function StarGenerator(props) {
   let starArray = []
  let { star } = props.item;
  // console.log(star)

  if(star >= 5){
    star = 5
  }

  console.log(star)

  function toLoopStars(){
    // console.log(props)
    for(let i = 0; i < Math.floor(star); i++){
      // console.log(FiveStars, Math.floor(props))
      starArray.push(<span><img src={FiveStars} /></span>)

      // starArray.push(FiveStars)
      
    }
    if(star - Math.floor(star) !== 0){
      starArray.push(<span><img src={halfStars} /></span>)
    }

    return starArray
  }
  
  // toLoopStars(star)
  // console.log(starArray)
  return (
    <>
      {toLoopStars()}
    </>
  )

}
//  function ProduceStar(){
//   starArray.forEach(item => {
//     console.log(<img src={item}></img>)
//     return <img src={item}></img>
//   })
// }
// ProduceStar()

// export default StarGenerator