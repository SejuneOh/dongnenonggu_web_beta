import styled from "styled-components";

export const NotFoundPageStyle = styled.main`
  & > .wrapper {
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      & > img {
        width: 80%;
      }
      & > h1 {
        font-size: 1.4rem;
      }

      & > p {
        font-size: 1.2rem;
      }
    }
  }
`;
