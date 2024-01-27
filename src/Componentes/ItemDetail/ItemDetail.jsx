import { Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { Item } from "../Item/Item";
export const itemDetail = ({productos}) => {

    //const {addItem} = useContext (CartContext)
    //const onAdd = quantity => {
        //console.log (quantity,productos)
    return (
      <div>
         <p style={{color:"violet"}}> item detail</p>
         <div>
             <img/>
         </div>
         <div>
              <h4> {productos.categoria} </h4>
              <h5> {productos.price} </h5>
         </div>
     </div>
    );

}