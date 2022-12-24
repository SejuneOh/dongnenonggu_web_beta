import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { funcUploadPost } from "../../api/serverApi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { getPostListData } from "../../store/postAction";
import {
  clearUploadPost,
  delCotents,
  delTitle,
} from "../../store/uploadPostAction";
import { StepFooterStyle } from "../../styles/stepFooterStyle";

export default function StepFooter() {
  const step = useAppSelector((state) => state.step.currentStep);
  const prevLocate = useAppSelector((state) => state.step.prevLocate);
  const nextLocate = useAppSelector((state) => state.step.nextLocate);
  const totalStep = useAppSelector((state) => state.step.totalStep);
  const currentLocate = useAppSelector((state) => state.step.currentLocate);
  const dispatch = useAppDispatch();

  //upload state item;
  const address = useAppSelector((state) => state.upload.address);
  const detailAddress = useAppSelector((state) => state.upload.addressDetail);
  const zoneNumber = useAppSelector((state) => state.upload.zoneNumber);
  const title = useAppSelector((state) => state.upload.boardTitle);
  const contents = useAppSelector((state) => state.upload.boardContent);

  // post page count
  const page = useAppSelector((state) => state.post.page);
  const count = useAppSelector((state) => state.post.count);

  const navigator = useNavigate();

  const prevClickHandle = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    switch (currentLocate) {
      case "/post/register":
        break;
      case "/post/position":
        dispatch(clearUploadPost());
        break;
      case "/post/article":
        dispatch(delTitle());
        dispatch(delCotents());
        break;
    }
  };

  const nextClickHandle = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    switch (currentLocate) {
      case "/post/register":
        break;
      case "/post/position":
        if (!address || !zoneNumber || !detailAddress) {
          alert("주소를 다 입력해주세요");
          e.preventDefault();
        }
        break;
      case "/post/article":
        if (!title || !contents) {
          alert("제목과 게시물 내용을 다 입력해주세요.");
          e.preventDefault();
        } else {
          const ret = await funcUploadPost(
            title,
            contents,
            address,
            detailAddress,
            zoneNumber
          );
          if (ret) {
            dispatch(getPostListData(page, count));
            navigator("/post/success");
          } else {
            navigator("/post/fail");
          }
        }
        break;
    }
  };

  return (
    <StepFooterStyle>
      <div className="step_bar_container">
        <div className="step_bar">
          <div
            className="now_progress"
            style={{
              transition: "transform 600ms linear .2s",
              transform: `translateX(${(100 / totalStep) * step}%)`,
            }}
          ></div>
        </div>
      </div>
      <div className="step_bar_btn_container">
        <Link
          className="step_backward"
          to={prevLocate}
          onClick={prevClickHandle}
        >
          뒤로
        </Link>
        <Link
          className="step_forward"
          to={nextLocate}
          onClick={nextClickHandle}
        >
          {step === 3 ? "완료" : "다음"}
        </Link>
      </div>
    </StepFooterStyle>
  );
}
