import gift from "./../LaptopSvg/gift.svg";
import order from "./../LaptopSvg/order.svg";
import plus from "./../LaptopSvg/plus.svg";
import profile from "./../LaptopSvg/profile.svg";
import reward from "./../LaptopSvg/reward.svg";
import wishlist from "./../LaptopSvg/wishlist.svg";

import styled from "styled-components";

function HeaderDropdown() {
  return (
    <div className="total-dropdown">
      <Listcontainer>
        <ListItem>
          <img src={profile} />
          <span>My Profile</span>
        </ListItem>
        <ListItem>
          <img src={plus} />
          <span>Flipkart Plus Zone</span>
        </ListItem>
        <ListItem>
          <img src={order} />
          <span>Order</span>
        </ListItem>
        <ListItem>
          <img src={wishlist} />
          <span>Wishlist</span>
        </ListItem>
        <ListItem>
          <img src={reward} />
          <span>Rewards</span>
        </ListItem>
        <ListItem>
          <img src={gift} />
          <span>Gift Cards</span>
        </ListItem>
      </Listcontainer>
    </div>
  );
}
const ListItem = styled.li`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 5px;
  padding: 5px;
  border-bottom: 1px solid #f0f0f0;
  list-style: none;
  margin-bottom: 10px;
`;
const Listcontainer = styled.ul`
  padding: 0;
  background-color: white;
  display: none;
`;

export default HeaderDropdown;
