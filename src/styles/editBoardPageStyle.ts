import styled from "styled-components";

export const EditBoardPageTemplateStlye = styled.section`
  max-width: 630px;
  margin: 8rem auto;
  padding: 2rem;

  & > div {
    /* border: 1px solid black; */
    margin: 2rem 0;
  }

  .edit_title {
    animation: none;
  }

  .edit_sub_title {
    font-size: 24px;
    animation: none;
    margin: 0;
    padding-bottom: 1rem;
  }
  .edit_submit_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;
