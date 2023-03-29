import React, { useEffect, useState, useRef } from "react";
import { halfSVG, starSVG, btnSVG, redWish, whiteWish } from "./Constant";

function Gifts() {
  const [gift, setGift] = useState([]);
  

  useEffect(() => {
    fetch("./Gift.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setGift(data);
      });
  }, []);

  //--------------function for filtering price-------------

  const element = useRef();
  function onListChange(data) {
    const filterVal = +element.current.value;
    const filteredVal = gift.filter(
      (item) => newPrice(item.old, item.offer) > filterVal
    );
    setGift(filteredVal);
  }

  //--------------function for wish button------------------

  const [like, setLike] = useState(whiteWish);
  function handleLike() {
  if(like.key===whiteWish.key){
    setLike(redWish)
  }else {
    setLike(whiteWish)
  }
}

  //----------------------------------------------------------

  return (
    <>
      <div className="popular">
        <h2>Popular gifts right now</h2>
        <div className="filter-price">
          <input
            className="filter-input"
            type="number"
            placeholder="Filter"
            ref={element}
          ></input>
          <button className="filter-btn" onClick={onListChange}>
            Filter
          </button>
        </div>
      </div>
      <div className="gift-popular">
        {gift.map((item) => {
          return (
            <div className="gift" key={item.message}>
              <p>{item.message}</p>
              <div className="gift-img">
                <img src={item.img} />
                <div
                  className="wish-btn"
                  onClick={handleLike}>
                    {like}
                </div>
                {vdoBtn(item)}
                <div className="gift-vdo">{playVideo(item)}</div>
              </div>
              <div className="gift-text">
                <h3>{item.heading}</h3>
                <div className="all-str">
                  {ratingStar(item.rating)}
                  <span> {item.rate}</span>
                </div>
              </div>
              <div className="offr">
                <span>
                  {item.rupeeSymbol}
                  {newPrice(item.old, item.offer)}
                  <a href="" className="org-price">
                    {" "}
                    {item.rupeeSymbol}
                    {item.old}
                  </a>
                </span>
                <span className="off">({item.offer}% off)</span>
              </div>
              {freeDelivery(item)}
              <div className="gift-vdo"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

//----------function to star rating---------------

function Star() {
  return <div className="rate-str">{starSVG}</div>;
}
function HalfStar() {
  return <div className="rate-str">{halfSVG}</div>;
}

function ratingStar(str) {
  const strArr = [];
  for (let i = 0; i < Math.floor(str); i++) {
    strArr.push(<Star />);
  }
  if (Math.floor(str) < str) {
    strArr.push(<HalfStar />);
  }
  return <>{strArr}</>;
}

//-----------function to calculate new price-------------

function newPrice(old, offer) {
  return Number((Math.floor(old) * (100 - offer)) / 100).toFixed(0);
}

//---------------free delivery function------------------

function freeDelivery(item) {
  if (item.free !== "") {
    return (
      <a href="" className="free">
        {item.free}
      </a>
    );
  }
}

//------------------function for video button------------

function vdoBtn(item) {
  if (item.video !== "") {
    return <div className="vdo-btn">{btnSVG}</div>;
  }
}

//------------function to play video------------------------

function playVideo(item) {
  if (item.video !== "") {
    return <video src={item.video} autoPlay muted="muted"></video>;
  }
}

export default Gifts;
