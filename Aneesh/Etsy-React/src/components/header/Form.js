import React from 'react'
import './Form.css'
import SearchButton from '../../svgs/SearchButton.svg'

function Form() {
  return (
    <form className="web-search-section">   
      <input
        type="text"
        className="web-search"
        placeholder="Search for anything"
      />
      <button className="web-search-btn">
        <img src={SearchButton} />
      </button>
    </form>
  );
}

export default Form