import React from "react";

function Delivery(props){
    const{
        item,
        value
    }=props

    if(item.hasOwnProperty("delivery") && value !==""){
        return(
            <span className="free_delivery">
                {props.value}
            </span>
        )
    }
}

export default Delivery;