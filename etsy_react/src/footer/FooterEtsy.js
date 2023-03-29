import React from 'react'
import './footerEtsy.css'
import bgone from '../assets/bgone.svg'

function FooterEtsy(){
    return (
        <div className="footer_etsy">
            <div className='etsy_svg'>
               <img src={bgone}/>
            </div>
            <div className="etsy">
                <div className="footer_etsy_header">
                    <p>What is Etsy?</p>
                    <a href="https://www.etsy.com/in-en/about"
                    >Read our wonderfully weird story</a
                    >
                </div>
                <div className="etsy_main_content">
                    <div className="etsy_community">
                        <h4>A community doing good</h4>
                        <p>
                            Etsy is a global online marketplace, where people come
                            together to make, sell, buy and collect unique items. We're
                            also a community pushing for positive change for small
                            businesses, people, and the planet.
                            <span
                            >Here are some of the ways we're making a positive impact,
                                together.</span>
                        </p>
                    </div>
                    <div className="etsy_support">
                        <h4>Support independent creators</h4>
                        <p>
                            There's no Etsy warehouse - just millions of people selling
                            the things they love.We make the whole process easy, helping
                            you connect directly with makers to find something
                            extraordinary.
                        </p>
                    </div>
                    <div className="etsy-mind">
                        <h4>Peace of mind</h4>
                        <p>
                            Your privacy is the highest priority of our dedicated team.
                            And if you ever need assistance, we are always ready to step
                            in for support.
                        </p>
                    </div>
                </div>
                <div className="etsy_question">
                    <p>Have a question? Well, we've got some answers.</p>
                    <button className="help_center">Go to Help Center</button>
                </div>
            </div>
        </div>
    )
}

export default FooterEtsy