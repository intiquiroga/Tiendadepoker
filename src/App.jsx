import { useState } from 'react';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
function App() {

  return (

    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/pructos/:categoryId" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    
  
  )
}

export default App
