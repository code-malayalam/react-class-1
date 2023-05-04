import ItemCard from "./ItemCard"
import './ItemCardContainer.css'

function ItemCardContainer(){
    return(
        <div className="container-outline">
        <div className="total-container">
            <ItemCard />    
            <ItemCard />    
            <ItemCard />    
            <ItemCard />    
        </div>
      </div>        

    )
}
export default ItemCardContainer