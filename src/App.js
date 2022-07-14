import ItemListContainer from "./Components/ItemListContainer";
import './App.css';
import NavBar from "./Components/NavBar";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidget from "./Components/CartWidget";



function App() {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} /> 
            <Route path="/detail/:id" element={<ItemDetailContainer />} />  
            <Route path="/cart" element={<CartWidget />} /> 
        </Routes>
        </BrowserRouter>
    );
}

export default App;



