import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown, Card } from 'react-bootstrap';

const RandomMovieCard = ({ movie }) => {
    return (
      <Card>
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            Year: {movie.Year}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  export default RandomMovieCard;