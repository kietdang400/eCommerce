import React from 'react';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { CssBaseline} from '@mui/material'
import HomePage from "./pages/Home/HomePage.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import ItemInfo from "./pages/ItemInfo/ItemInfo.jsx";
import Login from "./pages/Login/Login.jsx"
import './App.css';

function App() {
  return(
<BrowserRouter>
<CssBaseline/>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  <Route path="/iteminfo/:itemsId" element={<ItemInfo/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
</Routes>
</BrowserRouter>
  );
}


export default App;
