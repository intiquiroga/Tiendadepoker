import React from 'react'
import { useState } from 'react'

const ItemCount = ({inicial,stock,agregar}) => {
  const [contador, setContador] = useState(1);
  const incrementar = () => {
    if (contador < stock) {
      setContador (contador + 1);
    }
  }
   const decrementar = () => {
    if (contador > inicial ) {
      setContador (contador - 1)
    }
   }
   
  return (
    <>
    <div>  
      <button onClick={decrementar}> - </button>
      <h1> {contador} </h1>
      <button onClick={incrementar}> + </button>
    </div>
    <button onClick={()=> funcionAgregar (contador)}> Agregar al carrito </button>
    </>
  )
}

export default ItemCount
// Agregar Valor inicial + Stock + una funcion para agergar productos al carrito 
// Stock envia informacion desde Componente ITem