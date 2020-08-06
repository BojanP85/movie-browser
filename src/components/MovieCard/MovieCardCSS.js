import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 30%;
  padding: 16px;
  margin-bottom: 4.5rem;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #f2f0f0;
  }

  @media(max-width: 768px) {
    width: 40%;
  }

  @media(max-width: 426px) {
    width: 100%;
    margin: 0 auto 4.5rem auto;
  }

  p {
    font-size: 2rem;
    margin: 2rem 0 0 0;

    @media(max-width: 320px) {
      font-size: 1.7rem;
    }

    span {
      color: #bac0c2;
      font-size: 1.7rem;

      @media(max-width: 320px) {
        font-size: 1.5rem;
      }
    }
  }

  img {
    width: 100%;
  }
`;
