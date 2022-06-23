
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import ViewCart from './component/ViewCart';
import CartContext from './context/CartContext';


function App() {
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
          </Routes>

        </BrowserRouter>
      </CartContext>

      
      {/* <ItemListContainer greeting="darle estilos"></ItemListContainer> */}
      {/* <ItemDetailContainer></ItemDetailContainer> */}
    </div>
  );
}

export default App;
