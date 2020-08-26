import React from "react";
import "../assets/styles/components/search2.css";
import staricon from "../assets/images/star.svg";

const Search2 = () => {
  return (
  
      <section className="search2">
        <div className="container">
          <div className="search-by-breed">
            <select id="input-by-breed">
              <option value="" selected disabled hidden>
                Breed
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="start-container">
              
            <img src={staricon} alt="" />
            <label >Show favorites</label>
          </div>
          <div className="check-search ">
          <label class="check-container">Puppies
            <input type="checkbox" />
             <span class="checkmark"></span>
                </label>
          </div>

          <div className="check-search">
          <label class="check-container">Grown ups
            <input type="checkbox" />
             <span class="checkmark"></span>
                </label>
          </div>

          <div className="check-search">
          <label class="check-container">All
            <input type="checkbox" />
             <span class="checkmark"></span>
                </label>
          </div>
         
        </div>
      </section>

  );
};

export default Search2;
