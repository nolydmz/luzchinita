import ItemListContainer from "./Components/ItemListContainer";
import './App.css';
import NavBar from "./Components/NavBar";
import ItemCount from "./Components/ItemCount/ItemCount";



function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi Tienda" />  
      <ItemCount/>
      </div>
  );
}

export default App;



