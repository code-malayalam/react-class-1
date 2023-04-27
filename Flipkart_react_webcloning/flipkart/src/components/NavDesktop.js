import React, { useEffect } from "react";
import './navDesktop.css';
import arrowDown from "../svg/dropdownNavDesktop.svg"
import { useDispatch, useSelector } from "react-redux";
import { fetchFlipkartData } from "../reducers/userInfo";

export default function NavDesktop() {

    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.flipkartData.data;
    })

    useEffect(()=>{
        dispatch(fetchFlipkartData)
    })

    return (
        <div className="nav_container">
            <div className="nav">
                {
                    data?.headerNavItemsDesktop?.map((item) => {
                        return (
                            <div className="navlist">
                                <div className="desktop_nav_item_container" key={item.id}>
                                    <div className="nav_img_container">
                                        <img src={item.img} />
                                    </div>
                                    <div className="text">
                                        <p>{item.text}</p>
                                        <Dropdown item={item} />
                                    </div>
                                </div>

                                <DropDownList item={item} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

function Dropdown(props) {
    const {
        more
    } = props.item;

    if (props.item.hasOwnProperty('more')) {
        return (
            <img src={arrowDown} />
        )
    }
}

function DropDownList(props) {

    const {
        item
    } = props

    if (item.hasOwnProperty('dropDown')) {
        return (
            <div className="drop_down_fashion">
                <div className="drop_down_list_container">
                    {
                        item?.dropDown.map((item) => {
                            return (
                                <div className={`main_list_heading heading_txt`}>
                                    <p className="head">{item.heading}</p>
                                    <SecondaryList item={item} />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function SecondaryList(props) {
    console.log(props.item)

    console.log(props.item.hasOwnProperty('dropDownItems'))

    if (props.item.hasOwnProperty('dropDownItems')) {
        return (
            <div className={`collection collection_men_top_wear`}>
                {
                    props.item?.dropDownItems.map((list) => {
                        return (
                            <>
                                <p className="collection_heading">{list.heading}</p>
                                {
                                    list?.items.map((item) => {
                                        return (
                                            <p>{item}</p>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        )
    }

}

