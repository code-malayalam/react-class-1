import React, {useState, useEffect} from "react";
import './Fashion.css'


function FashionContainer() {
  const[fItems, setFitems] = useState([])

  useEffect(() => {
    fetch("./data1.json")
    .then((data)=> {
      return data.json()
    })
    .then((data) => {
      console.log(data)
      setFitems(data.fashionEtsy)

      console.log(fItems)
    })
  },[])

  return (
<div className="fashion-finds">
  <div className="fashion-box">
    <div className="fashion-sub">
      <div className="fashion-container">
        <div className="fashion-header">
          <p className="text-caption">Editor's Picks</p>
          <h1 className="text-title">Fashion Finds</h1>
          <a className="arrow-text">Shop these unique Finds</a>
        </div>

        {/* loop here */}
        <div className="fashion">
          {fItems.map((item) => {
            console.log(item)
            return(
              <div>
                <div key={item.id} className="pick-fashion">
                <div className="height-placeholder">
                  <img className="fashion-img" src={item.imgURL}></img>
                  <p className="price-Btn">
                    <span className="price-box">
                      <span>
                        <span className="currency-symbol currency">{item.symbol}</span>
                        <span className="currency-value currency">{item.price}</span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
                <div className="video-container">
                  <video src="https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/trim.56C3DA93-B2EB-4964-9148-15715E86D876_mivitf.mp4" type="video/mp4"></video>
                </div>
                {item.playButton !== "" ? (
                  <button className="play-button">{item.playButton}</button>
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
</div>
)
        
}

export default FashionContainer



