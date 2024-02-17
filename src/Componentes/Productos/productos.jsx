import { collection, getDocs, query,updateDoc,where,doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {db} from "../../service/config";

const productos = () => {
    //const [producto,setProducto] = useState ([]);
    useEffect (()=> {
       const cargarData = async () => {
        try {
            const productitos = [
                {id:1 , nombre: "lapiz", precio:100}
            ]
        const productosCollection = collection (db,"productitos");

        productitos.forEach (async (producto )=>{
            const productoDoc = doc(productosCollection,producto.id.toString())
            await setDoc (productoDoc,producto);
        })
        } catch (error) {
            console.log (error => console.log ("nos vamos a re morir",error))

        }
       }
       cargarData();
    }, [])
    
  return (
    <div>
        <h2> productos </h2>
        <div>
           {
            productos.map (item=>(
                <div>
                    <img src="" alt="" />
                    <h3></h3>
                    <p></p>
                    <button onClick={()=> descontarStock (item)}></button>
                </div>
            ))
           }
        </div>
    </div>
  )

}
export default productos