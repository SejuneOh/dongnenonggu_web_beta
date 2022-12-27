import styled from "styled-components";

export const PostGuestAndPricePageStyle = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
  height: calc(100vh - 12rem);
  padding: 0 80px;

  .tempalte {
    max-width: 630px;
    margin: auto;
    height: 100%;
    animation-name: listAnimation;
    animation-duration: 600ms;
    animation-iteration-count: 1;
    animation-fill-mode: both;

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .guest_container {
      padding: 2rem;

      .guest_title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      .cnt_wrapper {
        & > input {
          line-height: 30px;
          height: 30px;
          margin-right: 1rem;
          outline-color: var(--blue);
        }

        & > span {
          font-size: 18px;
        }
      }
    }

    .warn {
      margin-top: 2rem;
      color: var(--red);
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;
