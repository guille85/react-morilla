import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { NavBar } from "./components/NavBar"


const App = () => {
  return (
    <>
      <NavBar/>
        <ItemListContainer greeting='Bienvenido a nuestra tienda!!' sx={{ flexGrow: 0, display: { xs: "flex-end", md: "none" } }}/> 
    </>
  );
}

export default App;
