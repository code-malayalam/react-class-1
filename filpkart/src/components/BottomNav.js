import styles from './BottomNav.module.css'

function BottomNav(){

    return(
        <div className={styles["total-bottom"]}>
            {/* <div className={styles.myStyle}>Test</div> */}
            <a><button><img src="https://rukminim1.flixcart.com/www/30/30/promos/28/04/2022/b05dc6a8-7e45-48ef-8f27-482e3a02bd67.png?q=90" /></button><input type="text" className="input" placeholder="Search for Products,Brands and More"></input></a>
        </div>
    )
}

export default BottomNav