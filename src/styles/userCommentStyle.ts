import styled from "styled-components";
export const UserCommentStyle = styled.div`
  /* border: 1px solid black; */
  padding: 0.5rem;
  border-bottom: 1px solid var(--light-gray);

  & > div {
    margin-bottom: 1rem;
  }

  .user_comment_header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user_comment_name {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;

      & > span {
        :last-child {
          display: block;
          color: var(--light-gray);
        }
      }
    }

    & > img {
      width: 30px;
      height: 30px;
    }
  }
  .user_comment_footer {
    /* width: 100%; */
    /* border: 1px solid blue; */
    & > button {
      margin-left: 90%;
    }
  }
`;
