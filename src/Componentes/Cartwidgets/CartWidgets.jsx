import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const Cartwidget = () => {
  const {cantidadtotal} = useContext(CarritoContext);
  return (
    <>
    <div>
      <Link to ="/cart">
        <img style= {{width:"30px",height:"30px"}}src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png" alt="IMAGEN CARRITO"/>
        <ItemCount></ItemCount>
      </Link>
    </div>
    </>
  )
}

export default Cartwidget