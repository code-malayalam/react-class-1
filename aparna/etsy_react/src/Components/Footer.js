import React from "react"
import "./style.css"
import DisplayIcons from "./Icons"

export function GenerateFooter() {
  return (
      <footer>
        <div className="footer-container">
          <div className="email-container">
            <span className="inline-image">
              <svg xmlns="http://www.w3.org/2000/svg" className="wt-fill-denim-tint wt-width-full" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" width="1280" height="30">
              <path d="M1280 30h-8.1c-5.7 
              0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 
              1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 
        2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z" fill="#D7E6F5"></path>
               </svg>   
            </span>
            <div className="exclusive-offers">
              <form>
                <p className="offersText">
                  "Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy."
                </p>
                <div className="mail-enter">
                  <input className="text" placeholder="Enter your email"/>
                  <button className="subscribe">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="logo-container">
            <span className="designImage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 48" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" width="1400" height="48"><path d="M839 47l7-1 4-1 2 1h4l3-1 3-1 2 1 1-1 8-1 2 1h4l5-1 2-1h5l2-1 1 1h6l2-1h9l2-1h4l3-1h27v1h10l1 1h3l3-1 1 1h11l6 2v-1h4l1-1h10l2 1h7l2 1h3l2 1h2l1-1h6v1h2l1-1 1 1h1l3 1h7l1 1h6l1-1h3l1 1 5-1h17l4-1h4l3 1h2l1 1h19l2-1h5v1l1-1h2l1 1h9l1-1 1 1 4-1h12l1-1h4l1-1h2l3-1h5v-1h11l1 1h6l2 1h3l1-1 2-1h1l2-1h5l2-1 2 1h2l2 1h5l1 1h2l2 1h1l1-2 1-1 2-1h10l2 1h6l1 1h2l1-2 2-1 1-1 2-1h12l1 1h19l1-1h6l1-1 3 1h7l2 2 1 1 7-1 1-1 2-1h4l2-1 1-1h6l1-1 2 1 3-1h9l1-1h2l2-1h2l1-1h1l4-1 3 1h1l1-1h2l1-1 2-1h2l2-1v-1h12l3-1h2l2-1h2l3 1 1-1 1-1h14V0H0v2h2v1-1h10l1 1 2-1h3l1 1h1V2h4l2 1v1l1-1h1l1 1V3l4 1h4l1 1h2l1-1h-1l1-1 1 1 2 1h1l2-1h7l2 1h9l2 1h3l1-1h4l2 1 2 1 2-1h8l1-1 1 1h4l2 1 3-1h10l1 1h3l3 1h1V7l2 1h4l1 1h1l1-1h5l3 1h2l1-1 1 1 1-1 2 1h5l1 1h1V8h1l2 1 1 1h4-1l1-1h1l2 1h2l1-1h1l3 1h20v1-1l1 1h2l2 1h2l2 1 2 1h6l1-1h4l1-1h2l5-1 3 1h9l1-1h2l1-1h4v1h3l4-2 3-1h2l1-1h6l8 1 3 1h3l2 1 1-1h1l2-1h9l4-1 6-2h6l2-1h7l5-1h1l1-1h15l1 1 2-1 2 1h2l1-1h1v1h1l6 1h2l1-1h4l2-1 4 1h5l2 1h1l1-1h3v1h2l3 1h5l1-1 1 1 1-1 2 1h6l2 1 3 1h1l2-1 2 1h8l2-1 2 1h4l2-1 2 1h4l1-1h9l3-1h4l1 1h4l2 1h18l3-1h4l1 1 1-1h2l1 1h7l2-1h1l1 1 4-1h11l2-1h2V4l1 1 4 1h1l2 1v1l4 1 4 1 3-1-1 1h2l1 1h2l-1 1h2l3 1 5 1 6 1 4 1 2 2 4-1h3l4 2 2-1h9l1 1h1l1-1 1 2 5-1h2l3-1 4 2 3 1 5 1 3-1 2 2 1 1 1 1h2l1 1 7 2h1l1 1h3l4 3 1-1 4 1 3 1h4l3 1 1 1h4l2 2h3l3 3h2l2 1h2l5 1 1-1 3 1 4 2v1l7-1-1 1h11l5 2h3l2-1v-2l2-1h9l3-2 4 1h5l3-1h5l5 1 1 1 2-1h5l2 1h4l4 1h4l2-1 4 2h1l2-1 2 1 1-2 1 1 2-1 1 1h15v1l3-1h1l3-1 1 1 1-1h2l6 2 1-1 3 1h3l3 1h3l8 2 5-1v1l2-1h1z" fill="#4D6BC6"></path></svg>
            </span>
            <div className="electricity">
              <div className="logo-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" aria-hidden="true" focusable="false" width="96" height="96">
        <path d="M60.1 38H49v11h-2V38H35.9c1.931 9.368 6.626 17 12.1 17 5.474 0 10.171-7.632 12.1-17zm-25.145-9.5c-.003 2.511.19 5.019.577 7.5H47V18.522l-10.925.238a41.683 41.683 0 00-1.12 9.74zM47 2.31c-4.1 1.24-8.18 7.168-10.38 14.437L47 16.52V2.31z" fill="#FFFFFF">
        </path>
        <path d="M57.52 9.45l1.784-.9a31.775 31.775 0 012.558 7.65l9.117-.2.042 2-8.78.19c.55 3.41.818 6.857.8 10.31a50.836 50.836 0 01-.54 7.5H72v2h-9.846c-1.6 8.2-5.244 15.053-9.862 17.754C66.834 54.079 76 43.793 76 28.589c0-8.962-2.958-16.353-8.554-21.373A25.424 25.424 0 0049 1.04v15.438l10.83-.236a29.32 29.32 0 00-2.31-6.791zM43.51 55.643c-4.525-2.78-8.086-9.564-9.665-17.643H24v-2h9.5a50.84 50.84 0 01-.549-7.5 43.776 43.776 0 011.075-9.7l-9.009.2-.042-2 9.562-.208c1.89-6.667 5.317-12.436 9.432-15.143C29.71 4.412 20 15.13 20 28.589a27.636 27.636 0 0023.51 27.054z" fill="#FFFFFF">
        </path>
        <path d="M61.045 28.5a60.27 60.27 0 00-.818-10.265L49 18.479v17.52h11.468c.388-2.48.58-4.988.577-7.5zM91.7 60c-2.182 4.525-5.734 8.62-10.832 13.719l-1.414-1.414c6.6-6.6 10.511-11.424 12.08-17.7.072-.415.137-.832.215-1.278.607-3.48.262-5.951-1.027-6.068-.72-.066-1.559.68-1.947 2.3a30.158 30.158 0 01-2.454 8.148c-1.78 4.663-8.575 11.048-8.865 11.318l-1.366-1.461c.068-.063 6.8-6.391 8.381-10.62l.061-.133a30.644 30.644 0 002.526-9.148c.11-1.886.095-6.433-1.793-6.552-2.085-.132-2.537 3.505-3.367 7.379-.259 1.21-.89 3.456-1.153 4.243a1.55 1.55 0 01-.09.177c-1.386 4.053-5.32 7.859-5.515 8.045-2.984 2.983-9.707 9.74-9.707 9.74L64.01 69.3s6.726-6.761 9.727-9.761a28.158 28.158 0 003.064-3.6c.5-.788 1.452-2.646.55-3.572-1.148-1.178-3.287-.648-6.08.748-1.98.992-11.21 7.08-15.384 13.34-1.99 2.985-2.772 8.839-3.042 14.2l13.18 2.724 6.8 1.359a8.92 8.92 0 011-.778c7.075-4.74 14.663-11.833 17.317-16.54 3.566-6.32 1.988-7.52.558-7.42zM52.774 82.673l-.77 10.252 1.993.15.595-7.913 10.616 2.123 3.765.778L70.02 93.2l1.96-.4-.885-4.338 2.592.518.392-1.96-8.447-1.69-12.858-2.657zm-29.242 2.055l6.77-1.354 13.206-2.73c-.27-5.36-1.052-11.214-3.042-14.2-4.173-6.258-13.4-12.347-15.384-13.34-2.793-1.4-4.932-1.925-6.08-.747-.9.926.054 2.784.55 3.572a28.158 28.158 0 003.064 3.6c3 3 9.727 9.76 9.727 9.76l-1.418 1.41s-6.723-6.757-9.707-9.74c-.2-.186-4.129-3.992-5.515-8.045a1.74 1.74 0 01-.09-.177c-.263-.787-.894-3.033-1.153-4.243-.83-3.874-1.282-7.511-3.367-7.38-1.888.12-1.9 4.667-1.793 6.553a30.645 30.645 0 002.526 9.148l.061.133c1.58 4.229 8.313 10.557 8.381 10.62L18.9 69.034c-.29-.27-7.084-6.655-8.865-11.318a30.16 30.16 0 01-2.454-8.148c-.388-1.622-1.226-2.37-1.947-2.3-1.287.114-1.634 2.586-1.025 6.065.078.446.143.863.215 1.278C6.394 60.883 10.3 65.7 16.9 72.307l-1.41 1.414c-5.1-5.1-8.65-9.194-10.832-13.72-1.434-.104-3.013 1.1.553 7.42 2.654 4.706 10.238 11.8 17.321 16.529a8.92 8.92 0 011 .778zm7.175.605l-8.433 1.687.393 1.96 2.591-.518-.885 4.338 1.96.4 1.047-5.137 3.75-.775 10.631-2.126.595 7.913 1.994-.15-.77-10.252-12.873 2.66z" fill="#FFFFFF">
      </path>
              </svg>
              </div>
              <p className="logo-text">Etsy is powered by 100% renewable electricity</p>
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
              <div
                className="text-box">
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
              <span className="earth">
      
              </span>
              <span className="location-details">
                &nbsp; India | &nbsp; English(UK) | &nbsp; ₹ (INR)
              </span>
            </div>
            <div className="terms">
              <span className="copy">
                  © 2023 Etsy, Inc.
              </span>

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
  )
}

  

