import styled from "styled-components";

const ContactContainer = styled.div`
  height: 800px;
  background-image: linear-gradient(to bottom, #0395a4, #bdedf0);
  border-radius: 2rem;
  overflow: scroll;
`

const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 0.5rem;

  p {
    font-size: 20px;
    color: white;
    margin: 0;
  }

  img {
    border-radius: 5rem;
    box-shadow: 0px 0px 0px 4px #4e0eff;
  }
`

export { ContactContainer, ContactContent }