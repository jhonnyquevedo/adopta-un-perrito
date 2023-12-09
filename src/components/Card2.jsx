import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function Card2({direccion, titulo, descripcion, br, colorBg, textoBg}) {
  return (
    <Card style={{ width: '18rem', height: '25rem', padding: "20px"}}>
      <Card.Img variant="top" src={direccion} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        {br}
        <Tags colorBadge={colorBg} textoBadge={textoBg}/>
  
      </Card.Body>
    </Card>
  );
}

export default Card2;

