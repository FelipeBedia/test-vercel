import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import swordPic from './assets/sword.png';
import styles from './card.module.css';

export function BasicCard() {
  return (
    <div name='espada'className={styles.color}>
      <p>
      <Card style={{ width: '50rem', height:'17rem'}}>
        <Card.Img variant="top" src={swordPic}/>
        <Card.Body>
          <Card.Title><h1 className={styles.title}>Espada de Hierro</h1></Card.Title>
          <Card.Text>
            <p>Espada hecha del hierro extraido de las minas de Endovier</p>

            <p>15 Monedas de Oro</p>
          </Card.Text>
          <Button variant="success">Comprar</Button>
        </Card.Body>
      </Card>
      </p>
    </div>
  );
}
