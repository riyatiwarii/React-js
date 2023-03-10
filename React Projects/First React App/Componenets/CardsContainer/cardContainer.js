import React from "react";
import { Card } from "../Cards/cards";
import Data  from "../../data2.json";

const CardContainer = () => {
  return (
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
      {Data.map((item) => {
        return <Card key={item.data.data.id} Data={item} />;
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
  );
};

export { CardContainer };
