
import { Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = () => {

    
    return (  
      <div style={{display:"flex", width:"100%",justifyContent:"space-between"}}>
        {inventario.map ((item) => {
            return (
              <div style={{display:"flex",width:"100%",backgroundColor:"beige"}}>
                <Card style={{ width: '100%', height:"100%",border:"3px solid aliceblue" }}>
                <Card.Img style={{width:"100px"}} variant="top" src= {inventarios.image} />
                <Card.Body>
                <Card.Title>{item.category} </Card.Title>
                <Card.Text> {item.price} </Card.Text>
                <Button variant="primary">Comprar</Button>
                </Card.Body>
                </Card>
             </div>
         );
       })}
      </div>
  )


}