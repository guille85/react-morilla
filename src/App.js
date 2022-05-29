//@ts-check
import './App.css';
import { NavBar } from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartDetail from './components/CartDetail';
import { CartProvider } from './context/cart/CartContext';



const App = () => { 

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/cart" element={<CartDetail />} />
            <Route path="/category/:categoryId" element={<ItemListContainer/> } />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/*" element={<h1>Error 404</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
