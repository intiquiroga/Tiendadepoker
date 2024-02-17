import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useFetcher, useParams } from "react-router-dom"
import {db} from "../../service/config"
import { getDoc,doc } from "firebase/firestore"
const itemDetailContainer = () => {
    const [producto, setProducto] = useState (null);
    const {iditem} = useParams ();

    useEffect (() => {
        const nuevoDoc = doc(db,"inventario",iditem);

        getDoc (nuevoDoc)
          .then (res => {
            const data = res.data ();
            const nuevoProducto = {id : res.id, ...data};
            setProducto (nuevoProducto);
          })
          .catch (error => console.log ("errores", error))

    } , [iditem])
  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default itemDetailContainer