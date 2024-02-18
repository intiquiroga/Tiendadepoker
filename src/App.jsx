import Navbar from './Componentes/Navbar/Navbar';
import itemDetailContainer from './Componentes/itemDetailContainer/itemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import { CarritoProvider } from './context/CarritoContext';
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/Checkout/Checkout';

function App() {

  return (
   
    <BrowserRouter>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<itemDetailContainer/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/checkout' element = {<Checkout/>}/>
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  
  )
}

export default App
