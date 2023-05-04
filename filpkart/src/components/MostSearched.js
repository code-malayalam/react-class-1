import React,{useEffect, useState} from "react";
import './MostSearched.css'

function MostSearch(){
    const [itemdata, setItemdata] = useState([])

    let fetchdata = () => {
        fetch('/data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data.mostsearch);
            setItemdata(data.mostsearch)
            
        })

    }

    useEffect(() => {
        fetchdata()
    },[])
    return(
        <div className="most-searched">
            {itemdata?.map(item => {
              return  <div className="search-items"><img src={item}/></div>
            })}
        </div>
    )
}


export default MostSearch