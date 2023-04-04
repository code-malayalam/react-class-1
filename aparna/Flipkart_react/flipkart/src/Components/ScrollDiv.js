import React, {useState, useEffect} from "react";
import './ScrollDiv.css'
import DesktopScrollCategories from "./DesktopScrollDiv";


function ScrollCategories(){
  const [scrollData, setScrollData] = useState([])
  const [matches, setMatches] = useState(window.matchMedia("(min-width:978px)").matches)

  useEffect(() => {
    window
    .matchMedia("(min-width : 978px)")
    .addEventListener('change', e => setMatches(e.matches))
  }, [])
  
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
   

 

  return(
    <>
    {!matches && (
      <>
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
    </div></>
    )}
    {
      matches && (<><DesktopScrollCategories/></>)
    }
    </>
  )
}

export default ScrollCategories

 

