import { useState } from 'react';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { Item } from './Componentes/Item/Item';
function App() {

  return (

    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/producto"element={<Item/>}/>
      </Routes>
    </BrowserRouter>
    
  
  )
}

export default App
