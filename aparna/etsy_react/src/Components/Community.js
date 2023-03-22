import React, {  useState, useEffect } from "react";
import "./style.css";
import FetchData from "./functions";

function CommunityItems() {

  // const [newData, setData] = useState([])

  const [cItems, setCitems] = useState([]);

  useEffect(() => {
    fetch("./data1.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setCitems(data.whatEtsyDo);
      });
  }, []);

   return (<div className="what-we-do">
      {cItems.map((item) => {
        return (
              <div key={item.title} className="community">
                <h3 className="community-title">{item.title}</h3>
                <div className="community-content">
                  <span className="prev-content">{item.content}</span>
                  <span className="style">{item.contentPart}</span>
                </div>
              </div>
        );
      })}
  </div>)
}

export default CommunityItems;
