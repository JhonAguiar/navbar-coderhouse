
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import ViewCart from './component/ViewCart';
import CartContext from './context/CartContext';
import Checkout from './component/Checkout';
import { initializeApp } from "firebase/app";
import React from 'react';

function App() {

  const firebaseConfig = {initializeApp}

  initializeApp({
    apiKey: "AIzaSyACdswgBgTZlneaILbPYJd0O95ud0W7dvk",
    authDomain: "camada31205.firebaseapp.com",
    projectId: "camada31205",
    storageBucket: "camada31205.appspot.com",
    messagingSenderId: "23105938520",
    appId: "1:23105938520:web:2213f1c84faf2ef372162d"
  });

  return (
    
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<ViewCart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>

        </BrowserRouter>
      </CartContext>

      
      {/* <ItemListContainer greeting="darle estilos"></ItemListContainer> */}
      {/* <ItemDetailContainer></ItemDetailContainer> */}
    </div>
  );
}

export default App;
