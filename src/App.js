//@ts-check
import './App.css';
import { NavBar } from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cart/CartContext';
import Cart from './Cart';
import Checkout from './components/Checkout';


const App = () => { 

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/> } />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/*" element={<h1>Error 404</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
