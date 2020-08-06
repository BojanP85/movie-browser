import styled from 'styled-components';

export const Modal = styled.div`
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  margin-bottom: 4.5rem;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 2rem;
  box-sizing: border-box;
  display: ${props => (props.showModal ? 'flex' : 'none')};
  align-items: center;
  background: linear-gradient(to bottom right, #b2bebf, #fcffff);
  color: #000;

  @media(max-width: 768px) {
    width: 80%;
  }

  @media(max-width: 600px) {
    flex-direction: column;
    padding: 1rem;
  }

  div {
    &:first-child {
      @media(max-width: 1025px) {
        width: 45%;
      }

      @media(max-width: 600px) {
        width: 40%;
      }

      @media(max-width: 426px) {
        width: 60%;
      }

      img {
        border-radius: 4px;

        @media(max-width: 1025px) {
          width: 100%;
        }
      }
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      margin-left: 5rem;
      text-align: left;

      @media(max-width: 1025px) {
        width: 45%;
        font-size: 1.5rem;
      }

      @media(max-width: 600px) {
        width: 100%;
        margin-left: 0;
        font-size: 1.2rem;
      }

      span {
        color: #000;
      }

      p {
        color: #58696e;

        &:first-child {
          font-weight: bold;
          color: #000;

          span {
            color: #87898a;
            font-size: 1.7rem;
            font-weight: normal;

            @media(max-width: 1025px) {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
`;
