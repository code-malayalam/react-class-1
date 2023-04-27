import React from 'react';
import './header.css';
import hamburger from '../svg/hamburger.svg'
import addToBasket from '../svg/addToBasket.svg'
import searchIcon from '../svg/searchIcon.svg'
import arrowDown from '../svg/arrowDown.svg'

function Header() {
    return (
        <>
            <div className='header_container_mobile_view'>
                <div className='header_logo_icons'>
                    <div className='header_hamburger_logo'>
                        <div className='hamburger'>
                            <img src={hamburger} />
                        </div>
                        <div className='header_logo'>
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-explorePlus-c5de64.png" />
                        </div>
                    </div>
                    <div className='header_icons_login'>
                        <div className='flipkart_install_icon'>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMiAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNTQuMTIgNTMuNjE3Yy4wMjkgMS4wMS4xMDEgMi4zODIuMTUgMi42OC4wMjUuMTUyLjE1Ni4yNjMuMzEuMjYzbC42NzIuMDIxYy4xNTQgMCAuMTc1LS4xMTEuMTk5LS4yNjQuMDQ5LS4zMDQuMTIyLTEuNjkyLjE1MS0yLjY5NyAxLS4wMjkgMi4zOTItLjEwMiAyLjY5Ny0uMTUxLjE1My0uMDI0LjI2NC0uMDQ1LjI2NC0uMTk5bC0uMDIxLS42NzJjMC0uMTU0LS4xMTEtLjI4NS0uMjYzLS4zMS0uMjk4LS4wNDktMS42NjktLjEyMS0yLjY4LS4xNS0uMDMxLS45ODYtLjEwMi0yLjMxMi0uMTQ5LTIuNjE1LS4wMjQtLjE1My0uMDQ0LS4yNjYtLjItLjI2NmwtLjY2OS0uMDIxYy0uMTU1IDAtLjI4Ni4xMTItLjMxLjI2NC0uMDQ4LjI5OS0uMTE5IDEuNjQxLS4xNDkgMi42NC0uOTk4LjAzLTIuMzQuMTAyLTIuNjQuMTQ5LS4xNTMuMDI0LS4yNjQuMTU2LS4yNjQuMzFsLjAyMS42NjljMCAuMTU1LjExMy4xNzYuMjY2LjIuMzAzLjA0NyAxLjYyOS4xMTggMi42MTUuMTQ5bTUuNzY1IDYuMzgzaC05LjYyMWMtLjQxMyAwLS43NjUtLjI2Ny0uODMxLS42MzMtLjE2Ni0uOTEzLS40MzUtNC43MDEtLjQzNS02Ljg2NyAwLTIuMTA0LjI3My01LjkzMi40MzgtNi44NjQuMDY1LS4zNjcuNDE4LS42MzYuODMyLS42MzZoOS42MTNjLjQxNiAwIC40NzEuMjcxLjUzNS42NC4xNjUuOTU2LjQ0MiA0LjgzNS40NDIgNi44NiAwIDIuMTEzLS4yNzIgNS45MzUtLjQzOCA2Ljg2NS0uMDY1LjM2Ny0uMTIuNjM1LS41MzQuNjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LTQ1KSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=" />
                        </div>
                        <div className='add_to_basket_icon'>
                            <img src={addToBasket} />
                        </div>
                        <p>Login</p>
                    </div>
                </div>
                <div className='header_searchbar'>
                    <div className='search_bar'>
                        <div className='search_icon'>
                            <img src="https://rukminim1.flixcart.com/www/30/30/promos/28/04/2022/b05dc6a8-7e45-48ef-8f27-482e3a02bd67.png?q=90" />
                        </div>
                        <div className='search_bar_input'>
                            <input type="text" placeholder='Search for Products, Brands and More' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_container_desktop_view">
                <div className="header_desktop_container">
                    <div className="header_space_div"></div>
                    <div className="header_icons">
                        <div className="logo_flipkart">
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
                            <div className="logo_plus">
                                <a href="#">Explore</a>
                                <a className="plus" href="#">Plus</a>
                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
                            </div>
                        </div>
                        <div className="search_bar_desktop">
                            <input
                                type="text"
                                placeholder="Search for products, brands and more"
                            />
                            <button>
                                <img src={searchIcon} />
                            </button>
                        </div>
                        <div className="login_btn">
                            <span>Login</span>
                        </div>
                        <div className="seller_btn">
                            <p>Become a Seller</p>
                        </div>
                        <div className='more_info'>
                            <div className="more_btn">
                                <span>More</span>
                                <span className="drop_down">
                                    <img src={arrowDown} />
                                </span>
                            </div>
                            <div className='list'>
                                <div className='more_indicator'></div>
                                <div className='more_info_list'>
                                    <div className='info'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 12 14"><g fill="none" fillRule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F1" d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"></path></g></svg>
                                        <p>Notification preferences</p>
                                    </div>
                                    <div className='info'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="" viewBox="0 0 14 17"><g fill="none" fillRule="evenodd"><path fill="#2874F0" fillRule="nonzero" d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"></path></g></svg>
                                        <p>24x7 Customer Care</p>
                                    </div>
                                    <div className='info'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 18 10"><g fill="none" fillRule="evenodd"><path fill="#2874F0" fillRule="nonzero" d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"></path></g></svg>
                                        <p>Advertise</p>
                                    </div>
                                    <div className='info'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 12 14"><g fill="none" fillRule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F0" fillRule="nonzero" d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"></path></g></svg>
                                        <p>Download App</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart_btn">
                            <img src={addToBasket} />
                            <span>Cart</span>
                        </div>
                    </div>
                    <div className="header_space_div"></div>
                </div>
            </div>
        </>
    )
}

export default Header;