export const sortingResultsTitle = function(orderType, results) {
  if (orderType === 'ASC') {
    const sortASC = results.sort((a, b) => {
      let movieA = a.Title.toUpperCase();
      let movieB = b.Title.toUpperCase();
      return (movieA < movieB) ? -1 : (movieA > movieB) ? 1 : 0;
    });
    this.setState({ searchResults: sortASC, orderTypeTitle: 'DESC', message: '' });
  } else {
    const sortDESC = results.sort((a, b) => {
      let movieA = a.Title.toUpperCase();
      let movieB = b.Title.toUpperCase();
      return (movieA > movieB) ? -1 : (movieA < movieB) ? 1 : 0;
    });
    this.setState({ searchResults: sortDESC, orderTypeTitle: 'ASC' });
  }
};

export const sortingResultsYear = function(orderType, results) {
  if (orderType === 'ASC') {
    const sortASC = results.sort((a, b) => {
      let movieA = a.Year;
      let movieB = b.Year;
      return (movieA < movieB) ? -1 : (movieA > movieB) ? 1 : 0;
    });
    this.setState({ searchResults: sortASC, orderTypeYear: 'DESC' });
  } else {
    const sortDESC = results.sort((a, b) => {
      let movieA = a.Year;
      let movieB = b.Year;
      return (movieA > movieB) ? -1 : (movieA < movieB) ? 1 : 0;
    });
    this.setState({ searchResults: sortDESC, orderTypeYear: 'ASC' });
  }
};
