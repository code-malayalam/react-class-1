import "./ItemCard.css"


function ItemCard(){
    return(
        <div className="item-container">
            <div className="item-image">
            <img src="https://rukminim1.flixcart.com/image/250/250/kqpj4i80/slipper-flip-flop/c/a/v/8-ff-375gr-375bk-footup-multicolor-6-original-imag4nqku8yc5rnd.jpeg?q=90" loading="lazy" alt="" style={{width: "100%", height: "100%", margin: "auto",objectFit: "contain", opacity: "1"}}/>
            </div>
            <div className="item-details">
                <span className="item-description">slipper & Filp Flops</span>
                <span className="item-reason">Under $ 55</span>
            </div>
        </div>
    )
}

export default ItemCard