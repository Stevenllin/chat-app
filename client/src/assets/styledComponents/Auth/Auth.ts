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
  padding: 4rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colorWhite};
  min-height: 600px;
  width: 575px;
  gap: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${colorBackground};
  background-image: linear-gradient(to right bottom, #0395a4, #d5e9ea);
  box-shadow: -6px -6px 20px #e7edee, 6px 6px 20px #e7edee;

  h1 {
    color: ${colorWhite};
    font-size: 32px;
    font-weight: normal;
  }
`;

export { AuthContainer, AuthCard }