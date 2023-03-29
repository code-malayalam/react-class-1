import React, { useEffect, useState } from "react";
import fetchData from "../functions/fetchData";
import  giftSvg  from "/home/anushavs/Desktop/etsy_web_cloning_ams/etsy-react/src/svg/gift.svg";
import '../components/NavList/NavList.css'

function NavList() {
    const [nav, setNav] = useState([]);

    useEffect(() => {
        async function navData() {
            const navResponse = await fetchData()
            setNav(navResponse)
        }
        navData();
    }, [])

    return (
        <div className="categories">
            <ul className="category_list" id="category_list">
                {nav?.categories?.map((item) => {
                    return (
                        <List key={item.id} item={item} />
                    )
                })
                }
            </ul>
        </div>
    )
}

function List(props) {
    // console.log(props)
    const {
        title,
        img
    } = props.item

    if (props.item.hasOwnProperty('img') && img !== "") {
        return (
            <>
                <img src={giftSvg}/>
                <li>
                    {title}
                </li>
            </>
        )
    } else {
        return (
            <li>
                {title}
            </li>
        )
    }

}

export default NavList;
