import React from "react";
import styled from "styled-components";
import FooterMenuLink from "../Atoms/FooterMenuLink";
import { menuType } from "../Organisms/Footer";

type TProps = {
  footerMenuList: Array<menuType>;
};

const FooterMenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-right: 4rem;
`;

export default function FooterMenu({ footerMenuList }: TProps) {
  return (
    <FooterMenuStyle>
      {footerMenuList &&
        footerMenuList.map((el, idx) => {
          return <FooterMenuLink key={idx} path={el.url} text={el.title} />;
        })}
    </FooterMenuStyle>
  );
}
