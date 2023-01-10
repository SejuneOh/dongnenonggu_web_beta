import { Link } from "react-router-dom";
import block from "../assets/block.svg";
import DefaultButton from "../components/Atoms/DefaultButton";
import { NotFoundPageStyle } from "../styles/404PageStyle";

export default function NotFoundPage() {
  return (
    <NotFoundPageStyle>
      <div className="wrapper">
        <div>
          <img src={block} alt="" />
          <h1>404 NotFound Exception</h1>
          <p>페이지를 찾을 수 없습니다.</p>
          <Link to="/">
            <DefaultButton color="blue" text="메인화면으로" />
          </Link>
        </div>
      </div>
    </NotFoundPageStyle>
  );
}
