import React from "react";
import { Card } from "../Cards/cards";
import Data from "../../data2.json";
import { useState, useEffect } from "react";
import "./CardContainer.css";
import { API_URL } from "../Constants/constants";
import { ShimmerUI } from "../shimmer UI/shimmer UI";

const CardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurantData, setAllRestaurantData] = useState([]);

  console.log(restaurantList);

  const searchRestaurant = (searchText, restaurantList) => {
    console.log(restaurantList);
    const filteredData = restaurantList.filter((card) => {
      if (card?.data?.name?.toLowerCase().includes(searchText.toLowerCase())) {
        return card;
      }
    });

    return filteredData;
  };

  //[]---> once it will render the USEEFFECT for the very initial time but not later whenever component is rendered
  // [restaurantList] --> it will render the USEEFFECT for the very initial time  USEEFFFECT will render whenever restaurantList Changes
  useEffect(() => {
    console.log("USEEFFECT");
    APIRequest();
  }, []);

  async function APIRequest() {
    const data = await fetch(API_URL);
    const dataJson = await data.json();
    const cards = dataJson?.data?.cards[2]?.data?.data?.cards;
    setRestaurantList(cards);
    setAllRestaurantData(cards);
  }
  console.log("render");

  return !restaurantList.length ? (
    <>
    <ShimmerUI />
    <h1>Loading..</h1>
    </>
  ) : (
    <>
      <div className="searchBar">
        <input
          id="searchQueryInput"
          placeholder="Search Restaurant Here"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (e.target.value === "") {
              setRestaurantList(allRestaurantData);
            }
          }}
        />
        <button
          id="searchQuerySubmit"
          onClick={() => {
            setRestaurantList(searchRestaurant(searchText, restaurantList));
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div
        className="card-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "1em 2em",
        }}
      >
        {restaurantList.map((item) => {
          return <Card key={item?.data?.id} Data={item?.data} />;
        })}
      </div>
    </>
  );
};

export { CardContainer };
