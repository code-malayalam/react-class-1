import React from 'react'
import './DiscoverCategoriesCard.css'

function DiscoverCategoriesCard(props){

    const {
        imgURL,
        listText
    } = props.item

    return (
        <div className='discover-categories-card'>
            <div className='card-img'>
                <img src={imgURL} />
            </div>
            <div className='card-text'>
                {listText}    
            </div>
        </div>
    )
}

export default DiscoverCategoriesCard