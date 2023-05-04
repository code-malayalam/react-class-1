import HeaderDropdown from "./HeaderDropdown";

import styled from "styled-components";

function Loginbtn() {
  return (
    <TotalLogBtn>
      <button className="login-btn">
        Login
        <form>
          <HeaderDropdown />
        </form>
      </button>
    </TotalLogBtn>
  );
}

const TotalLogBtn = styled.div`
  button {
    color: #2874f0;
    background-color: white;
    border: none;
    padding: 5px 40px;
    font-family: font2;
    &:hover {
      ul {
        display: block;
        position: absolute;
        z-index: 3;
      }
    }
  }
  form {
    color: black;
    list-style: none;
  }
`;

export default Loginbtn;
