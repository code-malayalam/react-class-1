import React, { useEffect, useState } from "react";
import "./mobSummerCards.css"

function CreateMobSummerCards(){
  const[SummerCards, setSummerCards] = useState([])

  useEffect(()=>{
    fetch("./data.json")
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      setSummerCards(data.mobSummerCards)
    })
  },[])


  return(
    <div className="m_summer_container">
      <div className="top-heading-container">
        <img src="https://rukminim1.flixcart.com/fk-p-reco/750/200/images/Reco_GCD_SFCS_ffd23f.jpg?q=90"/>
      </div>
      <div className="heading-flex">
        <div className="cool-summer">
          <div className="cool-summer-text">Shop for a Cool Summer</div>
          <div className="chevron-box">
            <div className="chevron-arrow">
              <img src="https://rukminim1.flixcart.com/www/70/70/promos/04/08/2021/a76dff7e-d644-455c-9bb1-76ab974c4c5e.png?q=90"/>
            </div>
          </div>
        </div>
        <div className="deal-container">
          <div className="deal-section">
            <div className="deals">
              <div className="cards">
                {SummerCards.map(items => {
                  return(
                    <div className="card-items-section" key={items.img}>
                      <div className="card">
                        <div className="card-item">
                          <div className="card-image-container">
                            <div className="card-img">
                              <img src={items.img}/>
                            </div>
                          </div>
                          <div className="card-text-container">
                            <div className="text-caption">
                              {items.title}
                            </div>
                            <div className="text-deals">
                              {items.deals}
                            </div>
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
    </div>
  )
}

export default CreateMobSummerCards