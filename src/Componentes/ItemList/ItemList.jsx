import { useEffect } from "react";
import { Item } from "../Item/Item";
export const ItemList = () => {

       return(
           <div>
               <div style={{color:"black"}}>item list</div>
               { Item.map( item=>(
                      <li item key={productos.id}>{productos.category}</li> 
                  ))
                }
           </div>
        )
    }