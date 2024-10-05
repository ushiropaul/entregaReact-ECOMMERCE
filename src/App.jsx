import './App.css';
import NavBar from './components/navBar';
import CardWidget from './components/cardWidget';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <>
      <NavBar 
        Bgcolor="black" 
        Display="flex" 
        Flow="row nowrap"
        direction="column"
        Zindex="9999"
        position="fixed"
        width="100%"
        top="0"
      >
        <CardWidget></CardWidget>
      </NavBar>
      <ItemListContainer renderMsg="Bienvenidos a nuestra tienda" />
    </>
  )
}

export default App;
