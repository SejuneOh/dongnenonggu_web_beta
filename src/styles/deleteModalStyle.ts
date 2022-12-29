import styled from "styled-components";

export const DeleteModalStyle = styled.div`
  .delete_wallpaper {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    opacity: 0.2;
    z-index: 998;
    background-color: var(--gray);
  }

  .delete_modal {
    position: fixed;
    background-color: var(--white);
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 10px;
    z-index: 999;
    & > header {
      border-radius: 10px 10px 0 0;
      box-sizing: border-box;
      width: 100%;
      background-color: var(--blue);
      color: var(--white);
      padding: 0.5rem 0.5rem;
    }

    .button_wrapper {
      padding-bottom: 1rem;

      & > button {
        margin: 0 0.5rem;
      }
    }
  }
`;
