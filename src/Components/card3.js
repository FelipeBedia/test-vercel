import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import libroPic from './assets/libro.png';
import styles from './card.module.css';

export function BasicCard3() {
  return (
    <div name='libro'className={styles.color}>
      <p>
      <Card style={{ width: '50rem', height:'17rem'}}>
        <Card.Img variant="top" src={libroPic}/>
        <Card.Body>
          <Card.Title><h1 className={styles.title}>Libro de hechizos</h1></Card.Title>
          <Card.Text>
            <p>Libro con hechizos antiguos</p>

            <p>25 Monedas de Oro</p>
          </Card.Text>
          <Button variant="success">Comprar</Button>
        </Card.Body>
      </Card>
      </p>
    </div>
  );
}
