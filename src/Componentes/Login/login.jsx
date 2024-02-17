import { useState } from "react";

const login = () => {
    const[verificado, setVerificado] = useState (false);
    const [usuario,setUsuario] = useState ("");
    const [pass,setPass] = useState ("");
    const [error,setError]= useState ("")

    const habilitarUsuario = (e) => {
        e.preventDefault ();
        if (usuario === "Tinki" && pass === "Winki") {
            setVerificado (true)
        } 
    }
  return (
    <>

        {
            verificado ? (<button>Cerrar Cesion</button>) : (
                <form onSubmit={habilitarUsuario}> 
                <label htmlFor="usuario"> Usuario </label>
                <input type="text" id="usuario" onChange={(e)=> setUsuario(e.target.value)} value={usuario}/>
    
                <label htmlFor="password"> Clave </label>
                <input type="text" id="pass" onChange={(e)=> setUsuario(e.target.value)} value={pass}/>
             </form>
             )
        }
    
    </>
  )
}

export default login