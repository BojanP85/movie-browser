import styled from 'styled-components';

export const Wrapper = styled.div`
  position: ${props => (props.showBackdrop ? 'fixed' : '')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => (props.showBackdrop ? 'rgba(0, 0, 0, 0.8)' : '')};
`;
