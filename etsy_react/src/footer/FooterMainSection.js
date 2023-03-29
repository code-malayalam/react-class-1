import React, { useState } from 'react'
import './footerMainSection.css'
import download from '../assets/download.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import pinterest from '../assets/pinterest.svg'
import skype from '../assets/skype.svg'
import youtube from '../assets/youtube.svg'



function FooterMainSection() {

    const [toggle, setToggle] = useState(false)
    const [toggleOne, setToggleOne] = useState(false)
    const [toggleTwo, setToggleTwo] = useState(false)
    const [toggleThree, setToggleThree] = useState(false)


    return (
        <div className="footer_main_section">
            <div className="footer_main_section_dropdown">
                <div className="dropdown_section">

                    <button className="btn" id="btn" onClick={() => setToggle(!toggle)}>
                        Shop
                        <i className="down_button" id="arrow">&#8964;</i>
                    </button>
                    {toggle && (
                        <div className="drop_down" id="drop_down">
                            <ul className="dropdown_list" >
                                <li><a href="#">Gift cards</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Etsy blog</a></li>
                                <li><a href="#">Etsy United Kingdom</a></li>
                                <li><a href="#">Etsy Germany</a></li>
                                <li><a href="#">Etsy Canada</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="dropdown_section">
                    <button className="btn" id="btn" onClick={() => setToggleOne(!toggleOne)}>
                        Sell
                        <i className="down_button" id="arrow">&#8964;</i>
                    </button>
                    {toggleOne && (
                        <div className="drop_down" id="drop_down">
                            <ul className="dropdown_list">
                                <li><a href="#">Sell on Etsy</a></li>
                                <li><a href="#">Teams</a></li>
                                <li><a href="#">Forums</a></li>
                                <li><a href="#">Affiliates</a></li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="dropdown_section">
                    <button className="btn" id="btn" onClick={() => setToggleTwo(!toggleTwo)}>
                        About
                        <i className="down_button" id="arrow">&#8964;</i>
                    </button>
                    {toggleTwo && (
                        <div className="drop_down" id="drop_down">
                            <ul className="dropdown_list">
                                <li><a href="#">Etsy, Inc.</a></li>
                                <li><a href="#">Policies</a></li>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Impact</a></li>
                                <li><a href="#">Legal imprint</a></li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="dropdown_section" onClick={() => setToggleThree(!toggleThree)}>
                    <button className="btn" id="btn">
                        Help
                        <i className="down_button" id="arrow">&#8964;</i>
                    </button>
                    {toggleThree && (
                        <div className="drop_down" id="drop_down">
                            <ul className="dropdown_list">
                                <li><a href="#">Help Centre</a></li>
                                <li><a href="#">Privacy settings</a></li>
                            </ul>
                        </div>
                    )}
                    <div className="etsy_download">
                        <button className="download">
                            <img src={download} />
                            <p>Download the Etsy App</p>
                        </button>
                        <div className="etsy_medias">
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
                            <a href="#"
                            >
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

export default FooterMainSection

