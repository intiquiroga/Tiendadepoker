import { CartITem } from "../CartItem/CartITem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const Cart = () => {
    const {carrito,vaciarCarrito,total,cantidadTotal} = useContext (CarritoContext);
    if (cantidadTotal === 0) {
        retunr (
            <h2> no hay productos en el carrito</h2>
        )
    }
  return (
    <div>Cart</div>
  )
}

export default Cart