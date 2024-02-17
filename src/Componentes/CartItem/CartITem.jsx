import React from 'react'
import { CarritoContext } from '../../context/CarritoContext'

export const CartITem = ({item,cantidad}) => {
  return (
    <div>
        <h3> {item.nombre }</h3>
        <p> cantidad : {cantidad} </p>
        <p>precio: {item.precio}</p>
        
    </div>
  )
}
