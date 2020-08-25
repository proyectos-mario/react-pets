import React from "react";
import "../assets/styles/components/search.css";

const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container">
          <div className="search-icon">
            <i class="fas fa-search" />
          </div>
          <div className="search-input">
            <input placeholder="Search" type="text"></input>
          </div>
          <div className="search-by-time">
            <select id="input-by-time">
            <option value="" selected disabled hidden>By time</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="squares">
              <div className="square-row">
            <div className="square-ind"/>
            <div className="square-ind"/>
            </div>
            <div className="square-row">
            <div className="square-ind"/>
            <div className="square-ind"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
