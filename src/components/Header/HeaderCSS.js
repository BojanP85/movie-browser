import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  background: #01d1d1;
  display: flex;
  align-items: center;

  h1 {
    margin-left: 15rem;
    font-size: 3rem;

    @media(max-width: 768px) {
      margin-left: 5rem;
    }
  }
`;
