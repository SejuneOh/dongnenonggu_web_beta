import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { funcSetCurrentLocate } from "../../store/stepAction";
import SearchAddress from "../Molecules/SearchAddress";
import { PostRegisterTitle } from "./PostRegisterTemplate";

const PostSelectPositionTemplateStyle = styled.div`
  max-width: 630px;
  margin: auto;
  height: 100%;
`;

export default function PostSelectPositionTemplate() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(funcSetCurrentLocate(location.pathname));
  }, []);

  return (
    <PostSelectPositionTemplateStyle>
      <PostRegisterTitle
        style={{
          animationDelay: "400ms",
        }}
        text="어디서 농구를 하시나요?"
      />
      {/* 주소를 찾아 표시 할 수 있도록 변경 */}
      <SearchAddress />
    </PostSelectPositionTemplateStyle>
  );
}
