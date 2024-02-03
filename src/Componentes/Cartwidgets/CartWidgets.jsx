import ItemCount from "../ItemCount/ItemCount"

const Cartwidget = () => {
  return (
    <>
    <div>
      <img style= {{width:"30px",height:"30px"}}src="https://cdn-icons-png.flaticon.com/512/8146/8146003.png" alt="IMAGEN CARRITO"/>
      <ItemCount></ItemCount>
    </div>
    </>
  )
}

export default Cartwidget