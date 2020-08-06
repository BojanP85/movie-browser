import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import { Modal } from './MovieDetailsCSS';
import image from '../../assets/images/no-image.jpg';

const MovieDetails = props => {
  const { Title, Year, Poster, Genre, imdbRating, Plot, Actors, Director } = props.selectedMovieDetails;

  const renderImg = () => {
    if (Poster === 'N/A') {
      return <img src={image} alt="Not available" />;
    }

    return <img src={Poster} alt={Title} />;
  };

  return (
    <Backdrop showBackdrop={props.showModal} removeModal={props.removeModal}>
      <Modal showModal={props.showModal} onClick={(e) => e.stopPropagation()}>
        <div>
          {renderImg()}
        </div>
        <div>
          <p>{Title} <span>/{Year}</span></p>
          <p><span>Genre:</span> {Genre}</p>
          <p><span>IMDB Rating:</span> {imdbRating}/10</p>
          <p>{Plot}</p>
          <p><span>Actors:</span> {Actors}</p>
          <p><span>Director:</span> {Director}</p>
        </div>
      </Modal>
    </Backdrop>
  );
};

export default MovieDetails;
