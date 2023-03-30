import React, {useState, useEffect} from "react";
import './ScrollDiv.css'


function ScrollCategories(){
  const [scrollData, setScrollData] = useState([])

  const fetchScroll = () => {
    fetch("./data.json")
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      setScrollData(data.scrollSection)
    })
  }

  useEffect(() => {
    fetchScroll()
  }, [])
   
  // console.log(scrollData)

  return(
    <div className="scroll-container">
      {
        scrollData.map(items => {
          return(
            <div key={items.id} className="categories">
              <img className="cImg" src={items.img}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ScrollCategories