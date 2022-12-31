import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLLIElement> {
  text: string;
}

const MenuStyled = styled.li`
  color: inherit;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border-bottom: 1px solid var(--light-gray);
  background-color: inherit;
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export default function MenuLink({ text, ...props }: Props) {
  return <MenuStyled {...props}> {text}</MenuStyled>;
}
