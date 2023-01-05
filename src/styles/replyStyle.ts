import styled from "styled-components";
export const ReplyCommentStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 0.5rem 0;
  .reply_wrapper {
    flex: 0.5 0 40px;
  }

  .reply_container {
    flex: 9 0 300px;
    border-bottom: 1px solid var(--light-gray);

    & > div {
      margin-bottom: 1rem;
    }
    .reply_header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .reply_name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        & > span {
          :last-child {
            color: var(--light-gray);
          }
        }
      }
      & > img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
