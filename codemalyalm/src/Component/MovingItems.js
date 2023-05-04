import React,{useState, useEffect} from "react";
import './../styles.css'


function MovingItems(){
    const [data, update] = useState([])
    const fetchData = () => {
        fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/server/selectionItems.json")
        .then((response) => response.json())
        .then((data) => {

            update(data)
            
        })
    }
    useEffect(() => {
        fetchData();
    },[])
    return(
        <section class="shop-selection">
        <section class="total-card-holder">
            {data.map((item) => (
      <div>
        <img src={item.imageURl}/>
        <span>{item.caption}</span>
      </div>

            ))}
    
   </section>
      </section>
    )

}

export default MovingItems