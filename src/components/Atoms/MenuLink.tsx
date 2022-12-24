import { Link } from "react-router-dom";
import styled from "styled-components";

type TMenuProps = {
  linkPath: string;
  text: string;
};

const MenuStyled = styled(Link)`
  color: inherit;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 1rem;

  &:hover {
    opacity: 0.6;
  }
`;

export default function MenuLink({ linkPath, text }: TMenuProps) {
  return <MenuStyled to={linkPath}> {text}</MenuStyled>;
}
