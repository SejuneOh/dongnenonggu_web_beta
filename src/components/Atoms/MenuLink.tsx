import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLLIElement> {
  text: string;
}

const MenuStyled = styled.li`
  min-width: 120px;
  text-align: center;
  color: inherit;
  font-size: 1rem;
  font-weight: 500;
  box-sizing: border-box;
  padding: 1rem;
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
