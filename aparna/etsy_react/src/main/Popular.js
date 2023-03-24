import React, { useState, useEffect } from "react";
import "./style.css";


const FiveStars = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path></svg>`;

const halfStars = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width = "12px" height="24px"><path className="foreground" d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"></path></svg> 
`;
let Heart = <svg
Xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
aria-hidden="true"
focusable="false"
fill="red"
>
<path
  fill="red"
  d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"
></path>
</svg>

const playButton = (
  <svg
    Xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <polygon points="4 4 4 20 20 12 4 4"></polygon>
  </svg>
);

function PopularItems() {
  const [pItems, setPitems] = useState([]);
  const [active, setActive] = useState(false);
  const [image, setImage]   = useState('') 

    
 let changeColor = (item) => {
  setActive(!active)
    if(!active){
      return (Heart = <svg Xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="#a61a2e"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z"></path></svg>)
    }if(active){
      return (Heart = <svg
      Xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="red"
      >
      <path
        fill="red"
        d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"
      ></path>
      </svg>)
    }
  }

const handleFilter = () => {
  const inputValue = document.querySelector('.price-input')
  console.log(pItems)
  const newPriceArray = pItems.filter((price) => ((Math.floor(price.actualPrice - price.actualPrice * (price.discount / 100))) >= +inputValue.value))
  setPitems(newPriceArray)
  console.log(newPriceArray)
}
  
  useEffect(() => {
    fetch("./data1.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data)
        setPitems(data.popularItems);
      });
  }, []);

  return (

    <div className="popular-container">
      <div className="popular-header">
        <h2 className="popular-heading-name">Popular gifts right now</h2>
      </div>
      <div className="price-filter">
        <input className="price-input" type="number"></input>
        <button className="filter" onClick={() => handleFilter()}>filter</button>
      </div>
      <ul className="popular-sub-container">
        {pItems.map((item) => {
          return (
            <div key={item.url} className="popular-inner">
              <li className="giftList"></li>
              <div className="popular-img-container" >
              <VideoMaker item={item}>
                </VideoMaker>
                {/* <img src={item.url} className="imagePop"></img> */}
                <div className="tooltip-container">{item.tooltipText}</div>
                <button
                  className="heart-button "
                  id="heart_button"
                  onClick={
                    () => {
                    changeColor(item);
                  }} >
                    {Heart}
                </button>
                <GeneratePlayButton item={item}/>
              </div>

              <div className="content-container">
                <p className="content-title">{item.title}</p>
                <div className="rating-container">
                  <div className="star-container">
                    <StarGenerator item={item} />
                    <p className="reviews">{item.reviews}</p>
                  </div>
                  <div className="price-container">
                    <p className="marketPrice">
                      {item.symbol}
                      <MarketPrice item={item} />
                    </p>
                    <p className="actual-price">{item.actualPrice}</p>
                    <p className="discount-percent">{item.discount} % off</p>
                  </div>
                </div>
                    <div className="delivery-text">{item.delivery !== "" ? <div className="delivery-offer">{item.delivery}</div> : ""}</div>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

function VideoMaker(item) {
  const{
    videoURL,
    url
  }=item.item

  function foo(url){
    return url
  }
  // console.log(url)

  if (videoURL !== "") {
    return <video 
    className="video" 
    src={videoURL} 
    muted={true}
    autoPlay={false}
    onMouseEnter={handlePlay}
    width="100%"
    height="100%"
    onMouseLeave={handlePause}
    poster={url}
    
    ></video>;
  } else{
    return <video 
    className="video" 
    width="100%"
    height="100%"
    poster={url}
    ></video>
  }
}

function handlePlay(evnt){
  evnt.target.play()
}

function handlePause(evnt){
  evnt.target.pause()
  evnt.target.load()
}

function StarGenerator(props) {
  const { star } = props.item;
  // console.log(star)

  if (star % 1 === 0) {
    const printedStars = FiveStars.repeat(star);
    return <span dangerouslySetInnerHTML={{ __html: printedStars }} />;
  } else {
    const printedStars = FiveStars.repeat(Math.floor(star)) + halfStars;
    return <span dangerouslySetInnerHTML={{ __html: printedStars }} />;
  }
}

function MarketPrice(props) {
  const { actualPrice, discount } = props.item;
  return Math.floor(actualPrice - actualPrice * (discount / 100));
}

function GeneratePlayButton(item) {
  if (item.item.playButton !== "") {
    return (
      <button
        className="play-button"
      >{playButton}</button>
    )
  }else{
    return ""
  }
}


export default PopularItems;
