import { Link } from "react-router-dom";
import styled from "styled-components";

type TProps = {
  path: string;
  text: string;
};

const FooterMenuLinkStyle = styled(Link)`
  color: inherit;
  margin-bottom: 2rem;

  &:hover {
    opacity: 0.7;
  }
`;

const FooterMenuLink: React.FC<TProps> = ({ path, text }) => {
  return (
    <FooterMenuLinkStyle to={path ? path : "#"}>{text}</FooterMenuLinkStyle>
  );
};

export default FooterMenuLink;
