
import ItemDetailContainer from './component/ItemDetailContainer';
import ItemListContainer from './component/ItemListContainer';
import Navbar from './component/Navbar';
import Test from './component/Test';


function App() {
  function hacerAlert(){
    alert("Hola Mundo")
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <ItemListContainer greeting="darle estilos"></ItemListContainer> */}
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
