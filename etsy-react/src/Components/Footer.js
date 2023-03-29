import React from "react";
import electricity from "../Assets/electricity.svg";
import app from "../Assets/app.svg";
import instagram from "../Assets/instagram.svg";
import facebook from "../Assets/facebook.svg";
import pintrest from "../Assets/pintrest.svg";
import twitter from "../Assets/twitter.svg";
import youtube from "../Assets/youtube.svg";
import earth from "../Assets/earth.svg";

function Footer() {
  return (
    <div className="footer-all">
      <div className="footer-one">
        <div className="community-text">
          <h2>What is Etsy?</h2>
          <a href="">Read our wonderfully weired story</a>
        </div>
        <div className="container">
          <div className="support">
            <h3>A community doing good</h3>
            <p>
              Etsy is a global online marketplace,where people come together to
              make,sell,buy and collect unique items.We're also a community
              pushing for positive change for small buisnesses,people,and the
              planet.{" "}
              <span>
                Here are some of the ways we're making a positive impact,
                together
              </span>
            </p>
          </div>
          <div className="support">
            <h3>Support independent creators</h3>
            <p>
              There's no Etsy werehouse-just millions of people selling the
              things they love .We make the whole process easy,helping you
              connect directly with makers to find something extraordinay.
            </p>
          </div>
          <div className="support">
            <h3>Peace of mind</h3>
            <p>
              Your privacy is the highest priority of our dedicated team.And if
              you ever need assistance,We are always ready to step in for
              support.
            </p>
          </div>
        </div>
        <div className="help">
          <h4>Have a question? Well, we've got some answer.</h4>
          <a href="">Go to Help Center</a>
        </div>
      </div>
      <div className="footer-two">
        <div className="send">
          <p>
            Yes!Send me exclusive offers,unique gift ideas, and personalises
            tips for shopping and selling on Etsy.
          </p>
          <div className="mail">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-three">
        <div className="electricity">
          <img src={electricity} />
          <p>Etsy is powered 100% renewable electricity</p>
        </div>
      </div>
      <div className="footer-four">
        <div className="footer-four-dropdown">
          <div className="drop-content">
            <div className="drop-down">
              <button className="dropbtn" id="dropbtn">
                Shop
                <i className="fa-solid fa-chevron-down" id="arrow"></i>
              </button>
            </div>
            <div id="dropDownList">
              <ul className="show">
                <li>Gift Cards</li>
                <li>Sitemap</li>
                <li>Etsy blog</li>
                <li>Etsy United Kingdom</li>
                <li>Etsy Germany</li>
                <li>Etsy Cananda</li>
              </ul>
            </div>
          </div>
          <div className="drop-content">
            <div className="drop-down">
              <button>
                Sell<i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div id="dropDownList">
              <ul className="show">
                <li>Sell On Etsy</li>
                <li>Teams</li>
                <li>Etsy blog</li>
                <li>Forums</li>
                <li>Affiliates</li>
              </ul>
            </div>
          </div>
          <div className="drop-content">
            <div className="drop-down">
              <button>
                About<i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div id="dropDownList">
              <ul className="show">
                <li>Etsy, Inc</li>
                <li>Policies</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Impact</li>
                <li>Legal Imprint</li>
              </ul>
            </div>
          </div>
          <div className="drop-content">
            <div className="drop-down">
              <button>
                help<i className="fa-solid fa-chevron-down arrow"></i>
              </button>
            </div>
            <div id="dropDownList">
              <ul>
                <li>Help center</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social-mb">
          <button>
            <img src={app} />
            Download the Etsy App
          </button>
          <div className="social">
            <img src={instagram} />
            <img src={facebook} />
            <img src={pintrest} />
            <img src={twitter} />
            <img src={youtube} />
          </div>
        </div>
      </div>
      <div className="footer-four-dt">
        <div className="footer-dt">
          <div className="list-one">
            <h3>Shop</h3>
            <a href="">Gift Cards</a>
            <a href="">Sitemap</a>
            <a href="">Etsy blog</a>
            <a href="">Etsy United kingdom</a>
            <a href="">Etsy Germany</a>
            <a href="">Etsy Cananda</a>
          </div>
          <div className="list-one">
            <h3>Sell</h3>
            <a href="">Sell on Etsy</a>
            <a href="">Teams</a>
            <a href="">Forums</a>
            <a href="">Affliates</a>
          </div>
          <div className="list-one">
            <h3>About</h3>
            <a href="">Etsy, Inc.</a>
            <a href="">Policies</a>
            <a href="">Investors</a>
            <a href="">Careers</a>
            <a href="">Press</a>
            <a href="">Impact</a>
            <a href="">Legal Imprint</a>
          </div>
          <div className="list-one">
            <h3>Help</h3>
            <a href="">Help Center</a>
            <a href="">Privacy settings</a>
            <button className="app-btn">
              <img src={app} />
              Download the Etsy App
            </button>
            <div className="social">
              <img src={instagram} />
              <img src={facebook} />
              <img src={pintrest} />
              <img src={twitter} />
              <img src={youtube} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last-section">
        <div className="footer-last">
          <div className="india">
           <img src={earth} />
            <span>India</span>
            <span> | </span>
            <span>English(UK)</span>
            <span> |</span>
            <span>₹ (INR)</span>
          </div>
          <div className="copyright">
            <div>
              <span>© 2023 Etsy,Inc.</span>
            </div>
            <div className="terms-and-privacy">
              <a href="">Terms of Use</a>
              <a href="">Privacy</a>
              <a href="">Interst-based ads</a>
              <a href="">Regions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
