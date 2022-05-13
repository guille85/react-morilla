import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { NavBar } from "./components/NavBar"


const App = () => {
  return (
    <>
      <NavBar/>
      <section>
        <ItemListContainer greeting='Bienvenido a nuestra tienda!!' sx={{ flexGrow: 0, display: { xl: "flex-end", md: "none" } }}/> 
      </section>
    </>
  );
}

export default App;
