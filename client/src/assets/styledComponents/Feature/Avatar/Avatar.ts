import styled from 'styled-components';

const AvatarContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e494f;

  img {
    height: 8rem;
    cursor: pointer;
    border-radius: 5rem;

    &:hover {
      border: 0.4rem solid #4e0eff;
    }
  }

  img.selected {
    animation-name: animated-border;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  @keyframes animated-border {
    0% {
      box-shadow: 0px 0px 0px 0px #4e0eff;
    }
    100% {
      box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.2);
    }
  }

  svg {
    height: 2rem;
    width: 2rem;
    color: white;
  }
`

export { AvatarContainer }