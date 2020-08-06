import React from 'react';

import { Wrapper, SearchForm, Inputs, Buttons } from './SearchCSS';

const Search = props => {
  return (
    <Wrapper>
      <h4>Search <span>Movies DB</span> by:</h4>
      <hr/>
      <p>* required</p>
      <SearchForm onSubmit={props.handleSubmit}>
        <Inputs>
          <div>
            <label><span>*</span> Title: </label>
            <input type="text" value={props.titleValue} onChange={props.handleTitleChange}/>
          </div>
          <div>
            <label>Year: </label>
            <input type="text" value={props.yearValue} onChange={props.handleYearChange} />
          </div>
        </Inputs>
        <Buttons>
          <button type="submit">Search</button>
          <button type="reset" onClick={props.resetFields}>Reset</button>
        </Buttons>
      </SearchForm>
    </Wrapper>
  );
};

export default Search;
