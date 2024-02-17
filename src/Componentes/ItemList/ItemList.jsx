import { useEffect } from "react";
import { Item } from "../Item/Item";
import React from 'react'

const ItemList = ({productos}) => {
  return (
    <div>
      <div style={{color:"black"}}>item list</div>
      { productos?.map( prod=> <Item key={ prod.id} {...prod }/> )}
    </div>
  )
}
export default ItemList

