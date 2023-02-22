import styled from 'styled-components';

const colorWhite = '#FFFFFF';
const colorBorder = '#2597ba';

const InputAuthTextFieldContainer = styled.div`
  width: 100%;

  label {
    font-size: 20px;
  }

  label {
    color: ${colorWhite};
  }

  input {
    width: 100%;
    padding: 0.6rem;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    border: 1.5px solid ${colorWhite};
    border-radius: 0.4rem;
    background-color: transparent;

    &:focus{
      outline: none;
      border: 1.5px solid ${colorBorder};
    }
  }
`

export { InputAuthTextFieldContainer }