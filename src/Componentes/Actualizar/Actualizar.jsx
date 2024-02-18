import { db } from "../../service/config"
import {doc, updateDoc} from "firebase/firestore"

const Actualizar = () => {
    const orderDoc = doc (db,"ordenesCompra", "");

    updateDoc (orderDoc);

  return (
    <div>Actualizar</div>
  )
}

export default Actualizar