import React, {useState, useEffect} from "react";
import "./style.css"


function DisplayIcons(){

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch("./data1.json")
    .then((data => {
      return data.json();
    }))
    .then((data) => {
      setIcons(data.socialIcons)
    })
  }, [])

  return(
    <ul className="icons-container">
      {
      icons.map((item) => {
        // console.log(item)
          return(
            // <li key={item.icon} className="icons-list">
            //   <Social item = {item}/>
            // </li>
            <Social item = {item}/>
          )
        })
      }
    </ul>
  )

  function Social(props) {
    const{
      icon,
      id
    } = props.item

    const sIcon = icon
    return (<li key={id} className="icons-list"  dangerouslySetInnerHTML={{__html: sIcon} }/>)
  }

}

export default DisplayIcons