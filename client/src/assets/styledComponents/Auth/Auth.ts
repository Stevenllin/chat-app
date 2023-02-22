import styled from 'styled-components';

const colorWhite = '#FFFFFF';
const colorBackground = '#362e4c';

const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthCard = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colorWhite};
  width: 575px;
  gap: 1.5rem;
  border-radius: 1.5rem;
  border-color: none;
  background-color: ${colorBackground};
  box-shadow: 0 1px 1px 0;

  h1 {
    color: ${colorWhite};
    font-size: 32px;
    font-weight: normal;
  }
`;

export { AuthContainer, AuthCard }