import React, {  useEffect } from "react";
import './offerzone.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchFlipkartData } from "../reducers/userInfo";

function OfferZone() {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.flipkartData.data;
    })

    useEffect(() => {
        dispatch(fetchFlipkartData)
    })

    return (
        <>
            <div className="offer_zone_container">
                {
                    data?.offerZoneData?.map((item) => {
                        return (
                            <div className="offer_img_container" key={item.id}>
                                <img key={item.id} src={item.img} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="today_offer">
                {
                    data?.todayOffer?.map((item) => {
                        return (
                            <div className="offer" key={item.id}>
                                <img key={item.id} src={item.img} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default OfferZone;