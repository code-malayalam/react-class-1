import DesktopHeader from './DesktopHeader'
import Hamburger from '../Assets/Hamburger.svg'
import Cart from '../Assets/Cart.svg'
import './Header.css'
import React, {useState, useEffect} from 'react'

function CreateHeader(){
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width:1440px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(min-width: 1440px)")
      .addEventListener('change', e => setMatches(e.matches))
  }, [])

  return(
    <>
    {!matches && (
      <>
      <div className='Header-container'>
       <div className='logo-login-container'>
       <div className='logo-box'>
         <a className='hamburger-box'>
           <img src={Hamburger} />
         </a>
         <a className='flipkart-logo'>
           <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-explorePlus-c5de64.png' className='logo-image' width={85}/>
         </a>
         <div className='empty'>
           <div className='empty-two'></div>
         </div>
         <div className='install-plus'>
           <span className='install'>
               <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMiAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0yNTQuMTIgNTMuNjE3Yy4wMjkgMS4wMS4xMDEgMi4zODIuMTUgMi42OC4wMjUuMTUyLjE1Ni4yNjMuMzEuMjYzbC42NzIuMDIxYy4xNTQgMCAuMTc1LS4xMTEuMTk5LS4yNjQuMDQ5LS4zMDQuMTIyLTEuNjkyLjE1MS0yLjY5NyAxLS4wMjkgMi4zOTItLjEwMiAyLjY5Ny0uMTUxLjE1My0uMDI0LjI2NC0uMDQ1LjI2NC0uMTk5bC0uMDIxLS42NzJjMC0uMTU0LS4xMTEtLjI4NS0uMjYzLS4zMS0uMjk4LS4wNDktMS42NjktLjEyMS0yLjY4LS4xNS0uMDMxLS45ODYtLjEwMi0yLjMxMi0uMTQ5LTIuNjE1LS4wMjQtLjE1My0uMDQ0LS4yNjYtLjItLjI2NmwtLjY2OS0uMDIxYy0uMTU1IDAtLjI4Ni4xMTItLjMxLjI2NC0uMDQ4LjI5OS0uMTE5IDEuNjQxLS4xNDkgMi42NC0uOTk4LjAzLTIuMzQuMTAyLTIuNjQuMTQ5LS4xNTMuMDI0LS4yNjQuMTU2LS4yNjQuMzFsLjAyMS42NjljMCAuMTU1LjExMy4xNzYuMjY2LjIuMzAzLjA0NyAxLjYyOS4xMTggMi42MTUuMTQ5bTUuNzY1IDYuMzgzaC05LjYyMWMtLjQxMyAwLS43NjUtLjI2Ny0uODMxLS42MzMtLjE2Ni0uOTEzLS40MzUtNC43MDEtLjQzNS02Ljg2NyAwLTIuMTA0LjI3My01LjkzMi40MzgtNi44NjQuMDY1LS4zNjcuNDE4LS42MzYuODMyLS42MzZoOS42MTNjLjQxNiAwIC40NzEuMjcxLjUzNS42NC4xNjUuOTU2LjQ0MiA0LjgzNS40NDIgNi44NiAwIDIuMTEzLS4yNzIgNS45MzUtLjQzOCA2Ljg2NS0uMDY1LjM2Ny0uMTIuNjM1LS41MzQuNjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ5LTQ1KSIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=' className='plus-img'/>
           </span>
         </div>
         <a className='cart'>
           <img className='cart-image' src={Cart}/>
         </a>
         <a className='login-container'>
           <span className='login'>Login</span>
         </a>
       </div>
     </div>
     <div className='search-container'>
       <div className='search-sub'>
         <div className='search-text-box'>
           <div className='search-icon'>
             <img src='https://rukminim1.flixcart.com/www/30/30/promos/28/04/2022/b05dc6a8-7e45-48ef-8f27-482e3a02bd67.png?q=90' className='search-img'/>
           </div>
             <div className='search-text'>Search for Products, Brands and More</div>
         </div>
       </div>
     </div>
     </div>
     </>
     )}
     {
      matches && (<><DesktopHeader/></>)
     }
     </>
  )
  
}

export default CreateHeader