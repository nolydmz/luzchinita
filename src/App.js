import ItemListContainer from "./Components/ItemListContainer/index";
import './App.css';
import NavBar from "./Components/NavBar/index";
import ItemDetailContainer from "./Components/ItemDetailContainer/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import CartProvider from '../src/Components/Context/cartContext';



function App() {
    return (
        <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} /> 
            <Route path='/detail/:id' element={<ItemDetailContainer />} />  
            <Route path="/cart" element={<Cart />} /> 
        </Routes>
        </CartProvider>
        </BrowserRouter>
    );
}

export default App;



