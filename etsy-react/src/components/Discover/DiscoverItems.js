import React from "react";
import { useState, useEffect } from "react";
import fetchData from "../../functions/fetchData";

function DiscoverItems() {
    const [discoverItems, setDiscoverItems] = useState([]);

    useEffect(() => {
        async function navData() {
            const discoverItemsResponse = await fetchData()
            setDiscoverItems(discoverItemsResponse)
        }
        navData()
    }, [])
    return (
        <div className="overviews">
            <div className="overview_background"></div>
            <div className="overview_container" id="overview_container">
                {
                    discoverItems?.overviewCardItems?.map((item) => {
                        return (
                            <DiscoverCard
                                key={item.id}
                                url={item.url}
                                text={item.text}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

function DiscoverCard(props) {
    const {
        url,
        text,
        id
    } = props

    return (
        <div className="overview">
            <div className="img_container">
                <img src={url} key={id} />
            </div>
            <div className="img_text" key={id}>
                {text}
            </div>
        </div>
    )
}

export default DiscoverItems;