import searchlogo from "./../LaptopSvg/laptopsearch.svg";
import styled from "styled-components";

function Searchpanel() {
  return (
    <Totalsearchbar>
      <a>
        <button>
          <img src={searchlogo} />
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="Search for products,brands and more"
        ></input>
      </a>
    </Totalsearchbar>
  );
}

const Totalsearchbar = styled.div`
  min-width: 304px;
  a {
    display: flex;
    flex-direction: row-reverse;
    max-width: 540px;
  }
  input {
    padding-block: 8.5px;
    border: none;
    width: 450px;
  }
  button {
    border: none;
    background-color: white;
  }
`;

export default Searchpanel;
