import React, { useEffect, useState } from "react";
import "./Cards.css";
import CreateDesktopCards from "./DesktopCards";

function CreateCards() {
  const [card, setCard] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width : 978px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width : 978px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setCard(data.cardSection);
      });
  }, []);

  return (
    <>
      {!matches && (
        <>
          <div className="card-container">
            <div className="card-section">
              {card.map((items) => {
                return (
                  <div className="individual-card" key={items}>
                    <img src={items} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      {
        matches && (<><CreateDesktopCards/></>)
      }
    </>
  );
}

export default CreateCards;
