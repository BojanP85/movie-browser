import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  padding: 4rem 2rem;

  @media(max-width: 900px) {
    width: 80%;
  }
`;

export const Message = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 8rem;
`;

export const Buttons = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 2rem;
  text-align: right;

  @media(max-width: 900px) {
    width: 80%;
  }

  @media(max-width: 426px) {
    width: 100%;
    text-align: center;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 0.8rem;
    background-color: #01d1d1;
    border: 1px solid #03a8a8;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;

    @media(max-width: 426px) {
      padding: 0.5rem 0.4rem;
    }

    &:hover,
    &:active {
      background-color: #03a8a8;
      color: #fff;
    }

    &:last-child {
      margin-left: 1rem;
    }
  }
`;
