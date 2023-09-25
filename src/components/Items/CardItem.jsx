import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardList = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Link to ="/detalle/1">
            <Button variant="primary">Ver Detalle</Button>
            </Link>
          </Card.Body>
          <Counter />
        </Card>
      );
}

export default ItemList