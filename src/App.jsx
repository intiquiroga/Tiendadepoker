import { useState } from 'react';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer"
import { Item } from './Componentes/Item/Item';
//Contexto //
import { CarritoProvider } from './context/CarritoContext';
import Cart from './Componentes/Cart/Cart';

function App() {

  return (
   
    <BrowserRouter>
      <CarritoProvider>
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path="producto"element={<Item/>}/>
        <Route path='/cart' element = {<h2>Carrito en breve</h2>}/>
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  
  )
}

export default App
