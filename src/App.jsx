//import React from "react";
//import "./main.css";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./sections/ItemListContainer";
import ItemCount from "./components/ItemCount";

const App = ()=> {
function handleCart(cantidad, producto){
  console.log(`Agregaste ${cantidad} ${producto}(s) al carrito.`)
}
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemCount stock={5} onAdd={handleCart} producto={"Tanks"}/>
      <ItemCount stock={5} onAdd={handleCart} producto={"Shorts"}/>
      <ItemCount stock={5} onAdd={handleCart} producto={"Pants"}/> 
    </div>
  );
};

export default App;
