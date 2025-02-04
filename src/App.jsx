//import React from "react";
//import "./main.css";

import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Category from "./components/Category";
import NotFound from "./components/NotFound";


const App = ()=> {

  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories/>} />
            <Route path='/category/:id' element={<Category/>} />
            <Route path='/category/Item' element={<Category/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
