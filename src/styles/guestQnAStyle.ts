import styled from "styled-components";
export const GuestQnACardStyle = styled.div`
  position: fixed;
  width: 470px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--middle-gray);
  background-color: var(--light-white);
  color: var(--white);
  border-radius: 5px;
  z-index: 13;

  .qna_modal_title_wrapper {
    background-color: var(--blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
  }
  .qna_modal_input_wrapper {
    padding: 2rem;
    color: var(--black);
    margin-bottom: 3rem;
    .qna_modal_input_title_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .qna_modal_alert {
      font-size: 12px;
      color: var(--red);
    }

    & > textarea {
      width: 100%;
      height: 115px;
    }
  }

  .qna_modal_btn_wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2rem;

    & > button {
      width: 204px;
      height: 56px;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
    }

    .qna_modal_btn_submit {
      background-color: var(--blue);
      color: var(--white);
    }

    .qna_modal_btn_cancle {
      background-color: var(--gray);
      color: var(--white);
    }
  }
`;
