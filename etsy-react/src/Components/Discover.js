import React, { useState, useEffect } from "react";

function Discover() {
  const [dis, setData] = useState([]);

  useEffect(() => {
    fetch("./discoverData.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  // console.log(dis);
  return (
    <div className="discover-list">
      <h2>Discover one-of-a-kind items from independent creator</h2>
      <div className="discvr-grp">
        {dis.map((item) => {
          return (
            <div className="discover-item" key={item.img}>
              <div className="discover-img">
                <img src={item.img} />
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Discover;
