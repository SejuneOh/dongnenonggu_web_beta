import styled from "styled-components";

export const HeaderLeftStyle = styled.div`
  display: flex;
  flex: 1 0 400px;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  margin-left: 4rem;

  .menu_container {
    width: 100%;
    margin-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  /* media query */
  @media screen and (max-width: 768px) {
    .menu_container {
      margin-left: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .menu_container {
      margin-left: 2rem;
    }
  }
`;
