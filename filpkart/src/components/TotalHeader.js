import BottomNav from "./BottomNav";
import NavRight from "./NavRight";
import Topleft from "./TopLeft";
import './TotalHeader.css'


function TotalHeader(){
    return(
        <div className="total-header">
        <div className="top-header">
         <Topleft />
         <NavRight />
        </div>
        <BottomNav />
        </div>
    )
}

export default TotalHeader