import styled from "styled-components";

export const HeaderLeftStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  margin-left: 4rem;

  .menu_container {
    margin-left: 3rem;
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
