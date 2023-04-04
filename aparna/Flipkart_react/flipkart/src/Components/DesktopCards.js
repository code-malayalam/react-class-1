import React, { useEffect, useState } from "react";
import './DesktopCards.css'
import LeftBtn from '../Assets/LeftBtn.svg'
import RightBtn from '../Assets/RightBtn.svg'

function CreateDesktopCards(){
  const [eItems, setEItems] = useState([])

  useEffect(() => {
    fetch("./data.json")
    .then((data) => {
      return data.json()
    })
    .then((data)=>{
      setEItems(data.electronics)
    })
  },[])



  return(
    <div className="electronics-container">
      <div className="best-of-electronics">
        <div className="electronics-section">
            <h2 className="text-heading">Best of Electronics</h2>
            <div className="view-container">
              <div className="view-all">VIEW ALL</div>
            </div>
        </div>
      </div>
      <div className="electronics-equipment">
        <div className="electronics-items">
          {eItems.map(items => {
            return(
              <div className="electronics-items-list" key={items.title}>
                <div className="e-image">
                  <img src={items.img}/>
                </div>
                <div className="e-title">{items.title}</div>
                <div className="e-price">{items.price}</div>
                <div className="e-description">{items.description}</div>
              </div>
            )
          })}
          <div className="left-btn-box">
            <div className="left-btn-img">
              <img src={LeftBtn}/>
            </div>
          </div>
          <div className="right-btn-box">
            <div className="right-btn-img">
              <img src={RightBtn}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateDesktopCards