import { Link } from "react-router-dom";
import Bootnav from "./Bootnav";
import Cartwidget from "../Cartwidgets/CartWidgets";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <main style={{ display:"flex",justifyContent:"center"}}>
      <NavLink to="/Home"><img className='imagenlogo' src="https://cvagaming.com/assets/logo-8e1a9adf.png"/></NavLink>
      <Bootnav></Bootnav>
      <Cartwidget></Cartwidget>
    </main>
  )
}

export default Navbar