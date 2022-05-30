
import Navbar from './component/Navbar';
import Test from './component/Test';


function App() {
  function hacerAlert(){
    alert("Hola Mundo")
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Test quien={"Juan Maria"} como={"Hola como va"} hacerAlert={hacerAlert}></Test>
    </div>
  );
}

export default App;
