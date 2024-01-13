import React from "react";
import { Carousel } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

  const Movies = (props) => {

    console.log(props);
    if (!props.movies || props.movies.length === 0) {
      return <p>No movies available</p>; // Aggiungi un messaggio o un comportamento appropriato
  }

    const moviesPerRow = 6;
    const items = [];

    for (let i = 0; i < props.movies.length; i += moviesPerRow) {
        const movieGroup = props.movies.slice(i, i + moviesPerRow);

        items.push(
            <Carousel.Item key={i} className="movie-carousel-item movieCarousel">
                <div className="d-flex justify-content-between movieCarousel">
                    {movieGroup.map((movie, index) => (
                        <div key={index} className="movie-poster-container">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="movie-poster"
                            />
                        </div>
                    ))}
                </div>
            </Carousel.Item>
        );
    }

    return (
        <div className="movie-carousel-container">
            <Carousel interval={null} className="movieCarousel">
                {items}
            </Carousel>
            <div className="movie-carousel-overlay">
            </div>
        </div>
    );
};

export default Movies;
