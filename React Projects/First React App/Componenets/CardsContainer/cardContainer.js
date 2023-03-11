import React from "react";
import { Card } from "../Cards/cards";
import Data from "../../data2.json";
import { useState } from "react";
import "./CardContainer.css";

const CardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState(Data);
  console.log(restaurantList);
  const searchRestaurant = (searchText, restaurantList) => {
    console.log(restaurantList);
    const filteredData = restaurantList.filter((card) => {
      if (
        card.data.data.name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return card;
      }
    });

    return filteredData;
  };
  return (
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
              setRestaurantList(Data);
            }
          }}
        />
        <button
          id="searchQuerySubmit"
          onClick={() => {
            setRestaurantList(searchRestaurant(searchText, Data));
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
          return <Card key={item.data.data.id} Data={item.data.data} />;
        })}

        {/* {Card(Data[0])}
        
      <Card Data={Data[0]} />
      <Card Data={Data[1]} />
      <Card Data={Data[2]} />
      <Card Data={Data[3]} />
      <Card Data={Data[4]} />
      <Card Data={Data[5]} />
      <Card Data={Data[6]} />
      <Card Data={Data[7]} />
      <Card Data={Data[8]} />
      <Card Data={Data[9]} />
      <Card Data={Data[10]} />
      <Card Data={Data[11]} />
      <Card Data={Data[12]} />
      <Card Data={Data[13]} />
      <Card Data={Data[14]} />
      <Card Data={Data[15]} /> */}
      </div>
    </>
  );
};

export { CardContainer };
