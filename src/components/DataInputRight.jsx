import React from "react";
import "../assets/styles/components/DataInputRight.css";
import { connect } from "react-redux";

const DataInputRight = (props) => {
  const pets = props.data.pets;
  return (
    <>
      <section className="dataInputRight">
        {pets.length > 0 ? (
          pets.map((pet, key) => {
            return (
              <article key={key} className="pedCard">
                <div className="row-pet-image">
                  <label>Thursday 12 dec 2019 - 15:10</label>
                  <img src={pet}></img>
                </div>
                <div className="row-pet-name">
                  <label>Labrador</label>
                  <label>2019</label>
                </div>
                <div className="row-pet-views">
                  <i className="fas fa-eye"></i>
                  <label>7,732 Views</label>
                </div>
                <div className="row-pet-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="row-pet-location-detail">
                    <label>Location</label>
                    <label>
                      <b>Riyadh Yard, Saudi Arabia</b>{" "}
                    </label>
                  </div>
                </div>
                <div className="row-pet-sold">
                  <div className="row-pet-sold-left">
                    <i className="fas fa-hammer"></i>
                    <div className="row-pet-sold-left-detail">
                      <label>Sold for</label>
                      <label>
                        23,911<strong>SAR</strong>
                      </label>
                    </div>
                  </div>

                  <div className="row-pet-sold-right">
                    <i className="fab fa-bitbucket"></i>
                    <div className="row-pet-sold-right-detail">
                      <label>Sold for</label>

                      <label>
                        23,911<strong>SAR</strong>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row-pet-bids">
                  <button className="btn-pet-bids">View 3 Bids</button>
                </div>
              </article>
            );
          })
        ) : (
          <h1></h1>
        )}
      </section>
    </>
  );
};

const mapPropsToState = (state) => {
  return {
    data: state,
  };
};
const mapActionsToState = {};
export default connect(mapPropsToState, mapActionsToState)(DataInputRight);
