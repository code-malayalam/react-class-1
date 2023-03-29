import React , {useState} from 'react'
import { WishlistclickedSVG, WishlistSVG } from '../Constants';
import wishlistsvg from '../assets/wishlistsvg.svg';
import wishlistclicked from '../assets/wishlistclicked.svg'


function WishListButton() {
    const [wishlist, setWishlist] = useState(false);
    return(
        <div className="wishlistButton">
            <button onClick={() => setWishlist((prevWishList) => !prevWishList)
            }>
                 {wishlist ?  <img src={wishlistclicked} />: <img src={wishlistsvg}/>   }
            </button>
        </div>
    )
}        

export default WishListButton 