import { HTMLAttributes } from "react";
import { FooterStyle } from "../../styles/footerStyle";
import FooterAppDown from "../Molecules/FooterAppDown";
import FooterMenu from "../Molecules/FooterMenu";

export type menuType = {
  title: string;
  url: string;
};

const footerMenuList_1: Array<menuType> = [
  { title: "게스트 구하기", url: "#" },
  { title: "오늘의 경기", url: "#" },
  { title: "농구 스킬", url: "#" },
];
const footerMenuList_2: Array<menuType> = [
  { title: "우리 동농은", url: "#" },
  { title: "채팅하기", url: "#" },
];
const footerMenuList_3: Array<menuType> = [
  { title: "자주하는 질문", url: "#" },
  { title: "개발자 이야기", url: "#" },
];

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <FooterStyle {...props}>
      <div className="footer_menu_container">
        <FooterMenu footerMenuList={footerMenuList_1} />
        <FooterMenu footerMenuList={footerMenuList_2} />
        <FooterMenu footerMenuList={footerMenuList_3} />
      </div>
      <div className="footer_download">
        <FooterAppDown />
      </div>
    </FooterStyle>
  );
};

export default Footer;
