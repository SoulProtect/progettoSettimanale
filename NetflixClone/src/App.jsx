import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown,} from 'react-bootstrap';
import Navbar from './components/Navbar';
import Movies from './components/CaroselloFilm';
import Footer from './components/Footer';

function App() {
  const [moviesLOTR, setMoviesLOTR] = useState([]);
  const [moviesMarvel, setMoviesMarvel] = useState([]);
  const [moviesHp, setMoviesHP] = useState([]);

  const getMoviesLOTR = async () => {
    const urlSeriesLOTR =
      'http://www.omdbapi.com/?apikey=8fd8d1e5&s=lord of the Rings';
    const response = await fetch(urlSeriesLOTR);
    const responseJson = await response.json();
    //console.log(responseJson);
    setMoviesLOTR(responseJson.Search);
  };

  useEffect(() => {
    getMoviesLOTR();
  }, []);

  const getMoviesMarvel = async () => {
    const urlSeriesMarvel = 'http://www.omdbapi.com/?apikey=8fd8d1e5&s=x-men';
    const response = await fetch(urlSeriesMarvel);
    const responseJson = await response.json();
    //console.log(responseJson);
    setMoviesMarvel(responseJson.Search);
  };

  useEffect(() => {
    getMoviesMarvel();
  }, []);

  const getMoviesHP = async () => {
    const urlSeriesHp = 'http://www.omdbapi.com/?apikey=8fd8d1e5&s=star wars';
    const response = await fetch(urlSeriesHp);
    const responseJson = await response.json();
    //console.log(responseJson);
    setMoviesHP(responseJson.Search);
  };

  useEffect(() => {
    getMoviesHP();
  }, []);

  return (
    <>
      <Navbar />
      <Container className='d-flex ms-0 mt-5'>
        
          <h1 className="movieTitle mb-0 ">TV Shows</h1>
        
       
          <Dropdown style={{ margin: '0', padding: '8px' }}>
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              Generi
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: '150px' }}>
              <Dropdown.Item href="#/action-1" style={{ color: 'white' }}>
                Azione
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" style={{ color: 'white' }}>
                fantascienza
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" style={{ color: 'white' }}>
               horror
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </Container>
      <h2 className='movieTitle' style={{ margin: '0', padding: '20px' }}>Da rivedere per la 100esima volta...</h2>
      <div className='gallery'>
        <Movies movies={moviesMarvel} />
      </div>

      <h2 className='movieTitle'style={{ margin: '0', padding: '20px' }}>Che la forza sia con te, Luke.</h2>
      <div className='gallery'>
        <Movies movies={moviesHp} />
      </div>
     
      <h2 className='movieTitle'style={{ margin: '0', padding: '20px' }}>Verso Mordor ed oltre!</h2>
      <div className='gallery'>
        <Movies movies={moviesLOTR} />
      </div>

      <Footer />
    </>
  );
}

export default App;
