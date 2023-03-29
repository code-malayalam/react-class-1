import React, { useState } from 'react'
import './footermaindes.css'
import download from '../assets/download.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import pinterest from '../assets/pinterest.svg'
import skype from '../assets/skype.svg'
import youtube from '../assets/youtube.svg'



function FooterMainDes() {

    return (
        <div className="footer_main_section_des">
            <div className="footer_main_section_dropdown_des">
                <div className="dropdown_section_des">
                    <p>Shop</p>
                    <div className="drop_down_des" id="drop_down">
                        <ul className="dropdown_list_des" >
                            <li><a href="#">Gift cards</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Etsy blog</a></li>
                            <li><a href="#">Etsy United Kingdom</a></li>
                            <li><a href="#">Etsy Germany</a></li>
                            <li><a href="#">Etsy Canada</a></li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown_section_des">
                    <p>Sell</p>
                    <div className="drop_down_des" id="drop_down">
                        <ul className="dropdown_list_des">
                            <li><a href="#">Sell on Etsy</a></li>
                            <li><a href="#">Teams</a></li>
                            <li><a href="#">Forums</a></li>
                            <li><a href="#">Affiliates</a></li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown_section_des">
                    <p>About</p>
                    <div className="drop_down_des" id="drop_down">
                        <ul className="dropdown_list_des">
                            <li><a href="#">Etsy, Inc.</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Impact</a></li>
                            <li><a href="#">Legal imprint</a></li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown_section_des" >
                    <p>Help</p>
                    <div className="drop_down_des" id="drop_down">
                        <ul className="dropdown_list_des">
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">Privacy settings</a></li>
                        </ul>
                    </div>

                    <div className="etsy_download_des">
                        <button className="download_des">
                            <img src={download} />
                            <p>Download the Etsy App</p>
                        </button>
                        <div className="etsy_medias_des">
                            <a href="#">
                                <img src={instagram} />
                            </a>
                            <a href="#"
                            >
                                <img src={facebook} />
                            </a>
                            <a href="#">
                                <img src={pinterest} />
                            </a>
                            <a href="#"                            >
                                <img src={skype} />
                                <img src={youtube} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMainDes