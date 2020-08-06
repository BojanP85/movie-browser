import React from 'react';

import { Wrapper, Message, Buttons } from './MovieListCSS';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = props => {
  if (!props.isSearchActive) {
    return null;
  }

  if (props.message !== '') {
    return <Message>{props.message}</Message>
  }

  const renderedList = props.movies.map(movie => {
    return (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
        onMovieSelect={props.onMovieSelect}
      />
    );
  });

  return (
    <>
      <Message>Search results</Message>
      <Buttons>
        <button onClick={props.sortByTitle}>Sort by title {props.orderTypeTitle}</button>
        <button onClick={props.sortByYear}>Sort by year {props.orderTypeYear}</button>
      </Buttons>
      <Wrapper>
        {renderedList}
      </Wrapper>
    </>
  );
};

export default MovieList;
