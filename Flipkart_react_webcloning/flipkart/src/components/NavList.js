import React, { useEffect } from 'react';
import './navlist.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlipkartData } from '../reducers/userInfo';

function NavList() {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.flipkartData.data;
    })

    useEffect(() => {
        dispatch(fetchFlipkartData)
    })

    return (
        <div className='nav_list_container'>
            {
                data?.navitems?.map((item) => {
                    return (
                        <div className='item_container' key={item.id}>
                            <img src={item.img} key={item.id} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavList;