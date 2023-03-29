import React, { useState } from "react";
import "./style.css";
import DisplayIcons from "./Icons";
import Inline from './Assets/Inline.svg'
import DesignImg from './Assets/DesignImg.svg'
import Logo from './Assets/Logo.svg'

export function GenerateFooter() {
  return (
    <footer>
      <div className="footer-container">
        <div className="email-container">
          <span className="inline-image">
            <img src={Inline}></img>
          </span>
          <div className="exclusive-offers">
            <form>
              <p className="offersText">
                "Yes! Send me exclusive offers, unique gift ideas, and
                personalised tips for shopping and selling on Etsy."
              </p>
              <div className="mail-enter">
                <input className="text" placeholder="Enter your email" />
                <button className="subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="logo-container">
          <span className="designImage">
            <img src={DesignImg}></img>
          </span>
          <div className="electricity">
            <div className="logo-box">
              <img src={Logo}></img>
            </div>
            <p className="logo-text">
              Etsy is powered by 100% renewable electricity
            </p>
          </div>
        </div>
      </div>
      <div className="dropdown-container">
        <ul className="footer-sub-container">
          <div className="drop-downs">
            <div className="contain">
              <span className="drop-down-title">Shop</span>
              <button className="chevron-icon">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
            <div className="dropBox">
              <p className="help-centre">Gift cards</p>
              <p className="help-centre">Sitemap</p>
              <p className="help-centre">Etsy blog</p>
              <p className="help-centre">Etsy United Kingdom</p>
              <p className="help-centre">Etsy Germany</p>
              <p className="help-centre">Etsy Canada</p>
            </div>
          </div>

          <div className="drop-downs">
            <div className="contain">
              <span className="drop-down-title">Sell</span>
              <button className="chevron-icon">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
            <div className="dropBox">
              <p className="help-centre">Sell on Etsy</p>
              <p className="help-centre">Teams</p>
              <p className="help-centre">Forums</p>
              <p className="help-centre">Affiliates</p>
            </div>
          </div>

          <div className="drop-downs">
            <div className="contain">
              <span className="drop-down-title">About</span>
              <button className="chevron-icon">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
            <div className="dropBox">
              <p className="help-centre">Etsy, Inc</p>
              <p className="help-centre">Policies</p>
              <p className="help-centre">Investors</p>
              <p className="help-centre">Careers</p>
              <p className="help-centre">Press</p>
              <p className="help-centre">Impact</p>
              <p className="help-centre">Legal Imp</p>
            </div>
          </div>

          <div className="drop-downs">
            <div className="contain">
              <span className="drop-down-title">Help</span>
              <button className="chevron-icon">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
            <div className="dropBox">
              <p className="help-centre">Help centre</p>
              <p className="help-centre">Privacy settings</p>
            </div>

            <div className="settings-centre">
              <div className="help-privacy">
                <div className="text-box">
                  <div className="text-centre">
                    <button className="download">
                      <p className="text-download">Download the Etsy App</p>
                    </button>
                    <DisplayIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className="terms-policies">
        <div className="terms-inner">
          <div className="terms-conditions">
            <div className="location">
              <span className="earth"></span>
              <span className="location-details">
                &nbsp; India | &nbsp; English(UK) | &nbsp; ₹ (INR)
              </span>
            </div>
            <div className="terms">
              <span className="copy">© 2023 Etsy, Inc.</span>

              <ul className="list-of-terms">
                <li className="termsLists">Terms of Use</li>
                <li className="termsLists">Privacy</li>
                <li className="termsLists">Interest-based-ads</li>
                <li className="termsLists">Regions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
