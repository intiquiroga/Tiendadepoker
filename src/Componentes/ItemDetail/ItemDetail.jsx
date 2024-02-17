
import { useState,useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";ç

const ItemDetail = ({id,category,price,img,stock}) => {

    const [agregarCantidad,setAgregarCantidad]= useState (0);
   
    const {agregarAlCarrito} = useContext (CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = {id,category,price};
        agregarAlCarrito(item,cantidad)
    }
    
  return (
    <div>
        <h2> Nombre: {category} </h2>
        <h3> Precio : {price} </h3>
        <p> ID: {id} </p>
        <p> Stock: {stock}</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium totam atque beatae quis architecto accusamus asperiores quos recusandae. Molestias voluptatibus dolores totam reiciendis expedita nulla fugit commodi corporis natus.</p>
        <img src={img}/>
        {}
        {
            agregarCantidad > 0 ? ( <Link to= "/cart"> Terminar Compra </Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail
// Ponemos logica para montar y desmontar contador