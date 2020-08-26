import React, { useState, useEffect } from "react";
import "../assets/styles/components/search2.css";
import staricon from "../assets/images/star.svg";
import { setValInput } from "../actions/actions";
import { connect } from "react-redux";

const Search2 = (props) => {
  //https://dog.ceo/api/breeds/list/all
  const [breeds, setBreeds] = useState({});
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function (response) {
        return response.json();
      })
      .then(function (val) {
        setBreeds(val.message);
      })
      .catch((e) => {
        console.log("error-->", e);
      });
  }, []);

  const actionValue = (e) => {
    props.setValInput(e.target.value);
  };

  return (
    <section className="search2">
      <div className="container">
        <div className="search-by-breed">
          <select id="input-by-breed" onChange={actionValue}>
            <option defaultValue>Breed</option>
            {Object.keys(breeds)
              .sort()
              .map((breed, key) => {
                return (
                  <option key={key} value={breed}>
                    {breed}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="start-container">
          <img src={staricon} alt="" />
          <label>Show favorites</label>
        </div>
        <div className="check-search ">
          <label className="check-container">
            Puppies
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="check-search">
          <label className="check-container">
            Grown ups
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="check-search">
          <label className="check-container">
            All
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
const mapActionsToProps = {
  setValInput,
};
export default connect(mapStateToProps, mapActionsToProps)(Search2);
