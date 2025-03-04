//import React from "react";
//import "./main.css";

// import "./App.css";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import NavBar from "./components/Navbar";
// import Home from "./components/Home";
// import Categories from "./components/Categories";
// import Category from "./components/Category";
// import NotFound from "./components/NotFound";
// import ItemDetailContainer from "./components/ItemDetailContainer";
// import Filter from "./components/Filter";
// import FilterUseMemo from "./components/FilterUseMemo";
// import Firebase from "./components/Firebase";

// const App = ()=> {

//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/categories' element={<Categories/>} />
//             <Route path='/category/:id' element={<Category/>} />
//             <Route path='/item/:id' element={<ItemDetailContainer/>} />
//             <Route path="*" element={<NotFound/>}/>
//           </Routes>
//       </BrowserRouter>
//     <Filter/>
//     <FilterUseMemo/>
//     <Firebase/> {/* Para enviar datos a Firebase */}
//     </>
//   );
// };

// export default App;


import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

const App = ()=> {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
