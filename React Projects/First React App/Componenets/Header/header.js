import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../../Assets/logo.jpg";
import "./header.css";
import { useState } from "react";
import Data from "../../data2.json";

//State
//Hooks---> Hooks are React Componenets
//Usestate() ---> Usestate is one of those componenets

const Header = () => {
  // let searchText = "KFC";
  {function restaurantSearch(searchText) {
    if (true) {
      <h1>HELLO FROM THE SPACE</h1>
    }
  }}
  let [searchText, setSearchText] = useState("");
  console.log(searchText, setSearchText);

  return (
    <nav>
      <div className="nav-items-icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items-list">
        <div className="location-container">
          <span id="location">Location</span>

          <i className="fa-solid fa-caret-down"></i>
        </div>

        <ul>
          <li className="searchContainer">
            <input
              className="searchBox"
              type="text"
              value={searchText}
              placeholder="Search Restaurant"
              onChange={(e) => {
                setSearchText(e.target.value);
                console.log(searchText);
              }}
            ></input>
            <button className="btn" onClick={restaurantSearch(searchText)}>
              <i className="nav-icons fa-solid fa-magnifying-glass"></i>
              <span className="nav-list-text">Search</span>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="nav-icons fa-solid fa-tag"></i>
              <span className="nav-list-text">Offers</span>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="nav-icons fa-solid fa-life-ring"></i>
              <span className="nav-list-text">Help</span>
            </button>
          </li>
          <li>
           
            <button className="btn">
              <i className="nav-icons fa-solid fa-user-plus"></i>
              <span className="nav-list-text"> Sign In</span>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="nav-icons fa-solid fa-cart-shopping"></i>
              <span className="nav-list-text">Cart</span>
            </button>
          </li>
        </ul>
      </div>
     
    </nav>
  );
};

export { Header };
