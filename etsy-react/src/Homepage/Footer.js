import React, { useState } from "react";
import {
  arrowDown
} from "../components/Constants";
import '../components/Footer/footer.css'
import footerBorderPink from '../svg/footerBorderPink.svg';
import footerBorderBlue from '../svg/footerBorderBlue.svg';
import downloadEtsy from '../svg/downloadEtsy.svg';
import facebook from "../svg/facebook.svg";
import footerBorderlightBlue from "../svg/footerBorderLightBlue.svg";
import globe from "../svg/globe.svg";
import instagram from "../svg/instagram.svg";
import logoPoweredBy from "../svg/logoPoweredBy.svg";
import pinterest from "../svg/pinterest.svg";
import twitter from "../svg/twitter.svg";
import youtube from "../svg/youtube.svg";

function Footer() {

  const [shop, setShop] = useState(true)
  const [sell, setSell] = useState(true)
  const [about, setAbout] = useState(true)
  const [help, setHelp] = useState(false)

  const handleClickShop = () => {
    setShop(() => !shop)
  }
  const handleClickSell = () => {
    setSell(() => !sell)
  }
  const handleClickAbout = () => {
    setAbout(() => !about)
  }
  const handleClickHelp = () => {
    setHelp(() => !help)
  }

  return (
    <footer>
      <div className="etsy_overview_svg pink">
        <img src={footerBorderPink} />
      </div>
      <div className="etsy_overview">
        <p className="etsy_overview_heading">What is Etsy?</p>
        <a className="etsy_story_head" href="#">Read our wonderfully weird story</a>
        <div className="etsy_overview_container">
          <div className="etsy_overview_card">
            <p>A community doing good</p>
            <span
            >Etsy is a global online marketplace, where people come together
              to make, sell, buy and collect unique items. We're also a
              community pushing for positive change for small businesses,
              people, and the planet.
            </span>
            <span className="text_underlined"
            >Here are some of the ways we're making a positive impact,
              together.</span>
          </div>
          <div className="etsy_overview_card">
            <p>Support independent creators</p>
            <span
            >There's no Etsy warehouse - just millions of people selling the
              things they love. We make the whole process easy, helping you
              connect directly with makers to find something
              extraordinary.</span>
          </div>
          <div className="etsy_overview_card">
            <p>Peace of mind</p>
            <span
            >Your privacy is the highest priority of our dedicated team. And
              if you ever need assistance, we always ready to step in for
              support.</span>
          </div>
        </div>
        <p className="have_question">
          Have a question? Well, we've got some answers.
        </p>
        <button className="help_center">Go to Help Center</button>
      </div>
      <div className="etsy_overview_svg lightblue">
        <img src={footerBorderlightBlue} />
      </div>
      <div className="subscription">
        <p>
          Yes! Send me exclusive offers, unique gift ideas, and personalised
          tips for shopping and selling on Etsy.
        </p>
        <div className="enter_mail">
          <input type="text" placeholder="Enter your email" />
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <div className="etsy_overview_svg blue">
        <img src={footerBorderBlue} />
      </div>
      <div className="powered_by">
        <div className="logo">
          <img src={logoPoweredBy} />
        </div>
        <div className="text_underlined">
          Etsy is powered by 100% renewable electricity.
        </div>
      </div>
      <div className="footer_list_items_container">
        <div className="footer_list_items">
          <div className="list_item" onClick={handleClickShop}>
            <div className="item">
              <p className="item_text">Shop</p>
              <img className={shop ? "arrow_up" : "arrow_down"} src={arrowDown} />
            </div>
            <ul className={shop ? "unactive" : "active"} >
              <li>Gifts cards</li>
              <li>Sitemap</li>
              <li>Etsy blog</li>
              <li>Etsy United Kingdom</li>
              <li>Etsy Germany</li>
              <li>Etsy Canada</li>
            </ul>
          </div>
          <div className="list_item" onClick={handleClickSell}>
            <div className="item" >
              <p className="item_text">Sell</p>
              <img className={sell ? "arrow_up" : "arrow_down"} src={arrowDown} />
            </div>
            <ul className={sell ? "unactive" : "active"}>
              <li>Sell on Etsy</li>
              <li>Teams</li>
              <li>Forums</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div className="list_item" onClick={handleClickAbout} >
            <div className="item">
              <p className="item_text">About</p>
              <img className={about ? "arrow_up" : "arrow_down"} src={arrowDown} />
            </div>
            <ul className={about ? "unactive" : "active"}>
              <li>Etsy,Inc.</li>
              <li>Policies</li>
              <li>Investors</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Impact</li>
              <li>Legal imprint</li>
            </ul>
          </div>
          <div className="list_item" onClick={handleClickHelp}>
            <div className="item">
              <p className="item_text">Help</p>
              <img className={help ? "arrow_up" : "arrow_down"} src={arrowDown} />
            </div>
            <ul className={help ? "unactive" : "active"}>
              <li>Help Centre</li>
              <li>Privacy settings</li>
            </ul>
          </div>
          <div className="social_media">
            <button className="download_etsy">
              <img src={downloadEtsy} />
              <span>Download the Etsy App</span>
            </button>
            <div className="social_media_icons">
              <img src={instagram} />
              <img src={facebook} />
              <img src={pinterest} />
              <img src={twitter} />
              <img src={youtube} />
            </div>
          </div>
        </div>
      </div>
      <div className="terms_and_policy_container">
        <div className="terms_policies">
          <div className="countries">
            <img src={globe}/>
            <p>
              &nbsp; India &nbsp; | &nbsp; English (UK) &nbsp; | &nbsp; ₹ (INR)
            </p>
          </div>
          <div className="footer_links">
            <div className="etsy_inc">© 2023 Etsy, Inc.</div>
            <div className="terms_of_use">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy</a>
              <a href="#">Interest-based ads</a>
              <a href="#">Regions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;