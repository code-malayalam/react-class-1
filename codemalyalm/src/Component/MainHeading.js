
import React, { useEffect, useState } from "react";
import './../styles.css';

function MainHeading(){
    const [data , update ] = useState([]);

    const fetchData = () =>{
        fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/EstyReactServer/discoverlist.json")
        .then((response) => response.json())
        .then((data) => {
            update(data)
           })
    }

    useEffect(() => {
        fetchData();
    },[]);
    return(
        <section className="main-heading">
        <div className="all-headings">
          <div className="haeding-text">
            <h2>Discover one-of-a-kind items from independent creators</h2>
          </div>
          <div className="image-texts">
            <ul className="image-container">
                {data.map((item) => (

      <li><img src={item.imglink} className={item.class}/><span>{item.caption}</span>
      </li>
    
      ))}
   </ul>
          </div>
        </div>
      </section>
        
    )
}

export default MainHeading