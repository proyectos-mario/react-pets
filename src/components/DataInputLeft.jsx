import React from "react";
import "../assets/styles/components/DataInputLeft.css";

const DataInputLeft = () => {
  return (
    <>
      <section className="dataInputLeft">
        <nav className="menu-options">
          <ol>
            <li>
              <div className="menu-option-container">
                <select>
                  <option defaultValue>Size</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </li>
            <li>
              <div className="menu-option-container">
                <select>
                  <option defaultValue>Age</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </li>
            <li>
              <div className="menu-option-container">
                <select>
                  <option defaultValue>City</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </li>

            <li>
              <div className="menu-option-container-two">
                <select>
                  <option defaultValue>From</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select>
                  <option defaultValue>To</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </li>
            <li>
              <div className="text-container">
                <label>Plate ID</label>
                <input type="text" />
              </div>
            </li>

            <li>
              <div className="budget-container">
                <label>Budget</label>
                <div className="budget-container-detail">
                  <div className="text-container-budget">
                    <input
                      className="slider"
                      type="range"
                      id="vol"
                      defaultValue="0"
                      name="vol"
                      min="0"
                      max="50"
                    />
                    <input
                      className="slider"
                      type="range"
                      id="vol"
                      defaultValue="50"
                      name="vol"
                      min="0"
                      max="50"
                    />
                  </div>
                  <div className="text-container-budget-two">
                    <label className="text-container-budget-ini">$0</label>
                    <label className="text-container-budget-end">
                      $10.000+
                    </label>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="buttonsearch-container">
                <button className="btnsearch">
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </li>

            <li>
              <div className="resetContainer">
                <a href="#" alt="">
                  Reset
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </section>
    </>
  );
};

export default DataInputLeft;
