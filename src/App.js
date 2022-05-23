//@ts-check
import './App.css';
import { NavBar } from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartDetail from './components/CartDetail';



const App = () => { 

  return (
    <>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Bienvenido a nuestra tienda!!' sx={{ flexGrow: 0, display: { xs: "flex-end", md: "none" } }}/> }/>
        <Route path="/cart" element={<CartDetail/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting='Bienvenido a nuestra tienda!!' sx={{ flexGrow: 0, display: { xs: "flex-end", md: "none" } }}/> }/> 
        <Route path="/detail/:detailId" element={<ItemDetailContainer/>}/>
        <Route path="/*" element={<h1>Error 404</h1>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
