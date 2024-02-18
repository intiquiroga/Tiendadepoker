
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../service/config";
import { collection ,getDocs,where,query } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

import React from 'react'

const ItemListContainer = () => {
   const [productos,setProductos]= useState ([]);
   const {idCategoria} = useParams ();

   useEffect (() => {
      const misProductos = idCategoria ? query(collection(db,"inventario"),where("idCat", "==",idCategoria)) : collection (db,"inventario");

      getDocs (misProductos)
      .then (res => {
        const nuevosProductos = res.docs.map (doc => {
          const data = doc.data ();
          return {id : doc.id , ...data};
        })
        setProductos(nuevosProductos);
      })
      .catch (error => console.log (error))

   }, [idCategoria])

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer