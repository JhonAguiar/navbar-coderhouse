
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import Navbar from './component/Navbar';
import Test from './component/Test';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  function hacerAlert(){
    alert("Hola Mundo")
  }

  return (
    
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>

        </Routes>

      </BrowserRouter>

      
      {/* <ItemListContainer greeting="darle estilos"></ItemListContainer> */}
      {/* <ItemDetailContainer></ItemDetailContainer> */}
    </div>
  );
}

export default App;
