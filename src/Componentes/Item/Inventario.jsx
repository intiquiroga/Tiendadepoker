import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Inventario = () => {
   const  [inventario, setInventario] = useState ([ 
        { id :1 , category: "Cartas", price: 25000, image: "https://cvagaming.com/assets/logo-8e1a9adf.png"},
        { id :2 , category: "Fichas", price: 200000, image: "https://m.media-amazon.com/images/I/71ibMAQD0xL.jpg"},
        { id :3 , category: "Cartas", price: 200000, image: "https://cvagaming.com/assets/logo-8e1a9adf.png"}, 
        { id :4 , category: "Fichas", price: 200000, image: "https://cvagaming.com/assets/logo-8e1a9adf.png"}, 
        { id :5 , category: "Fichas", price: 200000, image: "https://http2.mlstatic.com/D_NQ_NP_881177-MLA51359630130_082022-O.webp"},  
       ]);
  return (
    <div style={{display:"flex"}}>
         {inventario.map ((inventarios) => {
         return (
            <div style={{display:"flex"}}>
               <Card style={{ width: '100%' }}>
                 <Card.Img style={{width:"100px"}} variant="top" src= {inventarios.image} />
                 <Card.Body>
                 <Card.Title>{inventarios.category} </Card.Title>
                 <Card.Text> {inventarios.price} </Card.Text>
                 <Button variant="primary">Comprar</Button>
                 </Card.Body>
               </Card>
            </div>
            );
          })}
    </div>
  )
}

export default Inventario