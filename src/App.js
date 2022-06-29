import ItemListContainer from "./Components/ItemListContainer";
import './App.css';
import NavBar from "./Components/NavBar";



function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi Tienda" />
    </div>
  );
}

export default App;



