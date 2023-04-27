import React, { useEffect, useState } from "react";
import "./MobileOffer.css";

function MobileOffer() {
  const [offerDataOne, setOfferDataOne] = useState([]);
  const [offerDataTwo, setOfferDataTwo] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  //   const [error, setError] = useState(null);
  //   const [error1, setError1] = useState(null);

  //   useEffect(() => {
  //     fetch("./Data.json")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setOfferDataOne(data.mobileOffersData1);
  //       })

  //   });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./Data.json");
      const json = await res.json();
      setOfferDataOne(json.mobileOffersData1);
    };
    fetchData();
  }, [setOfferDataOne]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setOfferDataTwo(json.mobileOffersData2);
    };
    fetchData();
  }, [setOfferDataTwo]);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);

    return () => window.removeEventListener("resize", setWindowWidth);
  }, []);
  return (
    <div className="mobile_offer_container">
      <div className="offer_container top">
        {offerDataOne.map((item, index) => {
          return (
            <div
              className="top_offer_img_container"
              key={index}
              style={{ width: width / offerDataOne.length }}
            >
              <img src={item.imgURL} />
            </div>
          );
        })}
      </div>
      <div className="offer_container bottom">
        {offerDataTwo.map((item, index) => {
          return (
            <div
              className="bottom_offer_img_container"
              key={index}
              style={{ width: width / offerDataTwo.length }}
            >
              <img src={item.imgURL} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MobileOffer;
