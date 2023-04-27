import React, { useEffect, useState } from "react";
import './PopularPicks.css'
import ToysAndFoodCards from "./ToysFoodCards";

function PopularPicks(){
  const[cardItems, setCardItems] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width : 978px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width : 978px)")
      .addEventListener("change", (e) => setMatches(e.matches))
  })

  useEffect(() => {
    fetch("./data.json")
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      setCardItems(data.bestDeals)
    })
  },[])

  
  return(
    <>
      {!matches && (
        <>
          <div className="popular-container">
       <div className="top-heading-container">
        <img src="https://rukminim1.flixcart.com/fk-p-reco/750/200/images/Reco_new_morpheus_D3CCF0.jpg?q=90"/> 
       </div>
        <div className="heading-flex">
          <div className="popular-picks">
            <div className="popular-text">Add To Your Wishlist</div>
          </div>
          <div className="view-box">
            <div className="view-all">View all</div>
          </div>
        </div>
        <div className="deal-container">
          <div className="deal-section">
            <div className="deals">
              <div className="cards">
                {cardItems.map(items => {
                  return(
                    <div className="card-items-section" key={items.id}>
                      <div className="card">
                        <div className="card-item">
                          <div className="card-image-container">
                            <div className="card-img">
                            <img src={items.img}/>
                            </div>
                          </div>
                          <div className="card-text-container">
                            <div className="text-caption">{items.caption}</div>
                            <div className="text-deals">{items.deals}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    </div>        
        </>
      )}
      {
        matches && (<><ToysAndFoodCards/></>)
      }
    </>
  )
}

export default PopularPicks