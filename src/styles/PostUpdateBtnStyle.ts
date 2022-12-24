import styled from "styled-components";

export const PostUpdateBtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 160px;
  background-color: var(--dark-gray);
  color: var(--white);
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    opacity: 0.4;
  }

  & > img {
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;
