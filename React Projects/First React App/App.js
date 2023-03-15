import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Componenets/Header/header";
import { Footer } from "./Componenets/Footer/footer";
import { CardContainer } from "./Componenets/CardsContainer/cardContainer";
import App01 from "./Componenets/Carousel/carousel";


// fetch("http://localhost:1234/data2.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));

const App = () => {
  return (
    <>
      <Header />
 
      <CardContainer />
      <Footer />
    
    </>
  );
};
export { App };
