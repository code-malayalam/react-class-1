import { useState } from "react";
import React, { useEffect } from "react";
import './MovingNav.css'

function MovingNav(){
const [itemdata , setdata] = useState([])
let fetchdata = () => {fetch("/data.json")
.then(response => response.json())
.then(data => {
    setdata(data)

    // console.log(data);
})

}
useEffect(() =>{
    fetchdata()
},[])


 return(
    <div className="total-container-nav">
        { itemdata.navItem?.map((item,index) => {
            // console.log(item);
           return <div className="images" key={index}><img src={item}/></div>
        })}
    </div>
 )



}
export default MovingNav 