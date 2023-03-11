import React from "react";
import { Card } from "../Cards/cards";
import Data from "../../data2.json";
import { useState } from "react";

const CardContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState(Data);
  
  const searchItems = (searchText, restaurantData) => {
    return restaurantData.filter((item) => {
      if (
        item.data.data.name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return item;
      }
    });
  };
console.log(restaurantData)
  return (
    <>
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
        <button
          className="btn"
          onClick={() => {
            
            const filterItems = searchItems(searchText, restaurantData);
            setRestaurantData(filterItems);
          }}
        >
          <i className="nav-icons fa-solid fa-magnifying-glass"></i>
          <span className="nav-list-text">Search</span>
        </button>
      </li>
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
        {restaurantData.map((item) => {
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
