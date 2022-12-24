import styled from "styled-components";
export const StepFooterStyle = styled.footer`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  background-color: #fff;

  .step_bar_container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    .step_bar {
      background-color: var(--light-gray);
      height: 6px;
      width: 100%;

      .now_progress {
        position: relative;
        left: -100%;
        background-color: var(--black);
        height: 100%;
        width: 100%;
      }
    }
  }

  .step_bar_btn_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    & > a {
      width: 90px;
      height: 48px;
      color: var(--white);
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 0.5;
      }
    }

    .step_backward {
      background-color: var(--light-gray);
      margin-left: 2rem;
    }

    .step_forward {
      background-color: var(--blue);
      margin-right: 2rem;
    }
  }
`;
