import React from 'react'
import './like.css'
import like from '../assets/like.svg'

function Like() {
    return (
        <div className='like'>
            <img src={like} />
        </div>
    )
}

export default Like