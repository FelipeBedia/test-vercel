import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import escudoPic from './assets/escudo.png';
import styles from './card.module.css';

export function BasicCard2() {
  return (
    <div name='escudo'className={styles.color}>
      <p>
      <Card style={{ width: '50rem', height:'17rem'}}>
        <Card.Img variant="top" src={escudoPic}/>
        <Card.Body>
          <Card.Title><h1 className={styles.title}>Escudo de Madera</h1></Card.Title>
          <Card.Text>
            <p>Escudo de madera de roble</p>

            <p>10 Monedas de Oro</p>
          </Card.Text>
          <Button variant="success">Comprar</Button>
        </Card.Body>
      </Card>
      </p>
    </div>
  );
}
