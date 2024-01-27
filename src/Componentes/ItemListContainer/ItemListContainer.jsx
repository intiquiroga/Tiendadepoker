import { ItemList } from "../ItemList/ItemList"; 
//import { Item } from "../Item/Item";
//import { useState,useEffect } from "react";
//import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
  // console.log (useParams());
  // const {categoryId} = useParams ( arregloProductos );
   //const [productos,setProductos] = useState ([]);

   //const promesa = new Promise((resolve, reject) => {
       // setTimeout(() => { 
      //  resolve (arregloProductos) 
      // },2000); 
      // })

   //useEffect (()=>{
      // promesa.then((response)=> {
      //     if (categoryId){
          //     const productsFiltered = response.filter (elm=>elm.categoria === categoryId);
        //       setProductos (productsFiltered);
       //    } else {
       //        setProductos (response)
       //    }
       //})
      // },[])
      //console.log ("productos",productos);
      return(
           <div style={{backgroundcolor:"blue", display:"flex",justifyContent:"center",marginTop:"100px"}}>
              <p> item list container</p>
              <ItemList/>
           </div >
   )
}