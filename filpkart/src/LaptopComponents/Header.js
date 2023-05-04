import Navlogo from "./Navlogo";
import Searchpanel from "./Searchpanel";
import Loginbtn from "./Loginbtn";
import Becomeseller from "./BecomeSeller";
import MoreHeader from "./MoreHeader";
import CartHeader from "./CartHeader";
import styled from "styled-components";

function Header() {
  return (
    <Fullheader>
      <Totalheader>
        <Navlogo />
        <Searchpanel />
        <Loginbtn />
        <Becomeseller />
        <MoreHeader />
        <CartHeader />
      </Totalheader>
    </Fullheader>
  );
}
const Totalheader = styled.div`
  background-color: #2874f0;
  display: flex;
  align-items: center;
  height: 56px;
  justify-content: center;
  > * {
    margin: 0 20px;
  }
`;
const Fullheader = styled.div``;
export default Header;
