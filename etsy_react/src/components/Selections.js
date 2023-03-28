import React, { useState, useEffect } from "react";
import "./Selections.css";

function Selection() {
  const [selectionData, setSelectionData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSelectionData(data.selectionObjects);
      });
  }, []);

  return (
    <div className="selections">
      <div className="selection_container">
        <div className="selection_heading">
          <div className="selection_link">
            <h2>Shop our selections</h2>
            <img
              src="data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 12 24%22%3E%3Cpath fill%3D%22%23222222%22 d%3D%22M11.3,12.7L12,12l-0.7-0.7l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,11H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.2l-2.3,2.3 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3C7.3,16.7,11.3,12.7,11.3,12.7z%22%2F%3E%3C%2Fsvg%3E"
              className="arrow"
            />
          </div>
          <p>Curated collections hand-picked by Etsy editors</p>
        </div>
        <div className="selection_items">
          {selectionData.map((item) => {
            return (
              <div className="selection_item" key={item.text}>
                <div className="selection_item_container">
                  <div className="selection_item_content">
                    <div className="selection_img">
                      <img src={item.imgURL} />
                    </div>
                    <div className="selection_item_info">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Selection;
