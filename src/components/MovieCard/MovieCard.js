import React from 'react';

import { Wrapper } from './MovieCardCSS';
import image from '../../assets/images/no-image.jpg';

const MovieCard = props => {
  const { Poster, Title, imdbID, Year } = props.movie;

  const renderImg = () => {
    if (Poster === 'N/A') {
      return <img src={image} alt="Not available" />;
    }

    return <img src={Poster} alt={Title} />;
  };

  return (
    <Wrapper onClick={() => props.onMovieSelect(imdbID)}>
      {renderImg()}
      <p>{Title} <span>/{Year}</span></p>
    </Wrapper>
  );
};

export default MovieCard;
