import React from 'react';
import { withRouter } from 'react-router-dom';

import omdb from '../api/omdb';
import Header from './Header/Header';
import Search from './Search/Search';
import MovieList from './MovieList/MovieList';
import MovieDetails from './MovieDetails/MovieDetails';
import { sortingResultsTitle, sortingResultsYear } from '../helpers/sortingResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleValue: '',
      yearValue: '',
      message: '',
      isSearchActive: false,
      searchResults: [],
      modalOpen: false,
      selectedMovie: '',
      selectedMovieDetails: [],
      orderTypeTitle: 'DESC',
      orderTypeYear: 'DESC'
    };

    this.sortingResultsTitle = sortingResultsTitle.bind(this);
    this.sortingResultsYear = sortingResultsYear.bind(this);
  }

  componentDidMount() {
    this.props.history.push('/');
  }

  /* Handling Form Events */

  handleTitleChange = event => {
    this.setState({ titleValue: event.target.value });
  };

  handleYearChange = event => {
    this.setState({ yearValue: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.props.history.push(`/?s=${this.state.titleValue}&y=${this.state.yearValue}`);
    this.setState({ searchResults: [], isSearchActive: true, message: 'Loading...' });

    if (this.state.titleValue !== '') {
      const response = await omdb.get(`&s=${this.state.titleValue}&y=${this.state.yearValue}`);
      if (response.data.Response === 'False') {
        this.setState({ message: response.data.Error });
      } else {
        this.sortingResultsTitle(this.state.orderTypeTitle = "ASC", response.data.Search);
      }
    } else {
      this.setState({ message: 'You must provide the title.'});
    }
  };

  resetFields = event => {
    event.preventDefault();

    this.props.history.push('/');
    this.setState({ titleValue: '', yearValue: '', isSearchActive: false });
  };

  /* Opening and closing the Modal */

  onMovieSelect = async imdbID => {
    await this.setState({ selectedMovie: imdbID });
    this.setState(prevState => {
      return { modalOpen: !prevState.modalOpen };
    });

    const response = await omdb.get(`&i=${this.state.selectedMovie}`);
    this.setState({ selectedMovieDetails: response.data });
  };

  removeModal = () => {
    this.setState({ modalOpen: false, selectedMovieDetails: [] });
  };

  /* Sorting the search results by Title/Year */

  sortByTitle = () => {
    this.sortingResultsTitle(this.state.orderTypeTitle, this.state.searchResults);
  };

  sortByYear = () => {
    this.sortingResultsYear(this.state.orderTypeYear, this.state.searchResults);
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <Search
          titleValue={this.state.titleValue}
          handleTitleChange={this.handleTitleChange}
          yearValue={this.state.yearValue}
          handleYearChange={this.handleYearChange}
          handleSubmit={this.handleSubmit}
          resetFields={this.resetFields}
        />
        <MovieList
          movies={this.state.searchResults}
          onMovieSelect={this.onMovieSelect}
          sortByTitle={this.sortByTitle}
          orderTypeTitle={this.state.orderTypeTitle}
          sortByYear={this.sortByYear}
          orderTypeYear={this.state.orderTypeYear}
          isSearchActive={this.state.isSearchActive}
          message={this.state.message}
        />
        <MovieDetails
          showModal={this.state.modalOpen}
          removeModal={this.removeModal}
          selectedMovieDetails={this.state.selectedMovieDetails}
        />
      </div>
    );
  }
}

export default withRouter(App);
