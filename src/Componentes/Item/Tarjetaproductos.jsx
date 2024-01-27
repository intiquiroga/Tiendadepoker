import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjetaproductos() {
  
   const productos = [ 
    { id : 1 , category: "Cartas", price: 25000, image: "src/assets/react.svg"},
    { id :2 , category: "Fichas", price: 200000} 
   ]
   console.log (productos)
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="src\assets\react.svg" />
        <Card.Body>
        <Card.Title>{productos.id}</Card.Title>
        <Card.Text> PEDRO </Card.Text>
        <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>
  );
}

export default Tarjetaproductos;