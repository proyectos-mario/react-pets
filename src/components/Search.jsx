import React, { useState, useEffect } from "react";
import "../assets/styles/components/search.css";
import { connect } from "react-redux";
import { setPets } from "../actions/actions";

const Search = (props) => {
  const [form, setForm] = useState({
    inputSearch: props.data.searchInput,
  });

  useEffect(() => {
    const elemento = document.getElementById("inputSearch");
    elemento.value = props.data.searchInput;
    setForm({ ...form, inputSearch: props.data.searchInput });
  }, [props.data.searchInput]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const actionSearch = (e) => {
    const ipad = window.matchMedia("screen and (max-width: 767px)");

    let cant = 0;
    if (ipad.matches) {
      cant = 5;
    } else {
      cant = 9;
    }

    const breed = form.inputSearch;

    const urlApi = `https://dog.ceo/api/breed/${breed}/images/random/${cant}`;

    fetch(urlApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (val) {
        if (val.status === "success") {
          props.setPets(val.message);
        } else {
          throw "API Not found";
        }
      })
      .catch((error) => {
        fetch("https://dog.ceo/api/breeds/image/random/" + cant)
          .then(function (response) {
            return response.json();
          })
          .then(function (val) {
            props.setPets(val.message);
          })
          .catch((e) => {
            console.log("error-->", e);
          });
      });
  };

  return (
    <>
      <section className="search">
        <div className="container">
          <div className="search-icon">
            <i className="fas fa-search" onClick={actionSearch} />
          </div>
          <div className="search-input">
            <input
              onChange={onChangeInput}
              placeholder="Search"
              id="inputSearch"
              type="text"
            ></input>
          </div>
          <div className="search-by-time">
            <select id="input-by-time">
              <option defaultValue>By time</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="squares">
            <div className="square-row">
              <div className="square-ind" />
              <div className="square-ind" />
            </div>
            <div className="square-row">
              <div className="square-ind" />
              <div className="square-ind" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapPropsToState = (state) => {
  return {
    data: state,
  };
};
const mapActionsToState = {
  setPets,
};
export default connect(mapPropsToState, mapActionsToState)(Search);
