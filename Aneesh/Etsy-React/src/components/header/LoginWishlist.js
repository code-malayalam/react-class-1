import React from "react";
import './LoginWishlist.css'
import LoginWishlist from '../../svgs/LoginWishlist.svg'
import BasketSVG from '../../svgs/BasketSVG.svg'

function LoginWishlistSection() {
  return (
    <div className="login-wishlist">
      <a href="" className="sign-in">
        Sign in
      </a>
      <a href="" className="wishlist">
        <img src={LoginWishlist} />
      </a>
      <a href="" className="basket">
        <img src={BasketSVG} />
      </a>
    </div>
  );
}

export default LoginWishlistSection
