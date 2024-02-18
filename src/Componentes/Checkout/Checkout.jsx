import { useState, useEffect,useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/config";
import { collection,addDoc } from "firebase/firestore";
const Checkout = () => {
    const {carrito,vaciarCarrito,total}= useContext (CarritoContext);

    const [nombre,setNombre] = useState ("");
    const [apellido,setApellido] = useState ("");
    const [telefono,setTelefono] = useState ("");
    const [email,setEmail] = useState ("");
    const [emailConfirmacion,setEmailConfirmacion] = useState ("");
    const [error,setError] = useState ("");
    const [ordenId,setOrdenId] = useState ("");

    const manejadorSubmit = (event) => {
        event.preventDefault ();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion ) {
            setError ("Por Favor completar campos")
            return;
        }
        if (email !== emailConfirmacion) {
            setError ("amailreplicado");
            return;
        }
        const orden = {
            items: carrito.map (producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad ,
            })),
            total:total ,
            fecha: new Date (),
            nombre,
            apellido,
            telefono,
            email,
        }
        addDoc(collection (db,"ordenes"),orden)
           .then( docRef => {
            setOrdenId(docRef.id);
            vaciarCarrito ();
           })
           .catch (error => {
            console.log (error);
            setError ("no crea");
           })
    }
  return (
    <div>
        <h1>Fin de Compra</h1>
        <form onSubmit={manejadorSubmit}>
            {
                carrito.map (producto=> (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre}x {producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                    </div>
                ))
            }
            <div>
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="apellido"> Apellido </label>
                <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="telefono">Telefono</label>
                <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="email"> E-mail </label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="emailcon">Email Confirmacion </label>
                <input type="email" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>
            {
                error && <p>{error}</p>
            }
            <button> Finalizar Orden </button>

            {
                ordenId && <stron> Gracias por comprar : {ordenId} </stron>
            }

        </form>
    </div>
  )
}

export default Checkout