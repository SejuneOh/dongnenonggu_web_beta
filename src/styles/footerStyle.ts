import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 3rem 8rem;
  border-top: 1px solid var(--placeholder-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .footer_menu_container {
    flex: 1 0 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
  }

  .footer_download {
    flex: 1 0 500px;
    padding: 0 3rem;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .footer_download {
      flex: 1 0 100px;
    }

    .footer_menu_container {
      flex: 1 0 100px;
    }
  }
`;
