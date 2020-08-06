import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  position: relative;
  margin: 8rem auto;
  padding: 4rem 2rem;
  width: 70%;

  @media(max-width: 900px) {
    width: 80%;
  }

  h4 {
    font-size: 2.5rem;
    font-weight: 100;
    margin: 0;

    span {
      font-weight: bold;
    }
  }

  hr {
    margin: 3rem 0;
    height: 0.05rem;
    border: none;
    background-color: #e5e5e5;
  }

  p {
    color: #e00f00;
    font-size: 1.2rem;

    @media(max-width: 426px) {
      margin-bottom: 2.5rem;
    }
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media(max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 1240px) {
    margin-bottom: 8rem;
  }

  @media(max-width: 768px) {
    flex-direction: column;
  }

  @media(max-width: 375px) {
    flex-flow:wrap;
  }

  div {
    @media(max-width: 375px) {
      display: flex;
      flex-direction: column;
    }

    &:last-child {
      margin-left: 5rem;

      @media(max-width: 768px) {
        margin-top: 3.5rem;
        margin-left: 1rem;
      }

      @media(max-width: 375px) {
        margin-top: 4rem;
        margin-left: 0;
      }
    }
  }

  label {
    font-size: 2rem;
    margin-right: 2rem;

    span {
      color: #e00f00;
    }
  }

  input {
    padding: 0.5rem 1rem;
    outline: 0;
    border-width: 0 0 1px;
    border-color: #c9c9c9;
    font-size: 1.5rem;
    color: #828282;
  }
`;

export const Buttons = styled.div`
  @media(max-width: 1240px) {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  button {
    padding: 1rem 2.5rem;
    margin-left: 1.5rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    border: 1px solid #095959;
    border-radius: 2px;
    background-color: #038a8a;
    color: #fff;
    transition: background-color 0.3s ease;
    cursor: pointer;
    outline: none;

    @media(max-width: 426px) {
      font-size: 1.2rem;
    }

    &:hover,
    &:active {
      background-color: #095959;
    }

    &:last-child {
      border: 1px solid #ababab;
      background-color: #c9c9c9;
      color: #000;

      &:hover,
      &:active {
        background-color: #ababab;
      }
    }
  }
`;
