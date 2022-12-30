import { useNavigate, useParams } from "react-router-dom";
import { PostRegisterTitle } from "./PostRegisterTemplate";
import { EditBoardPageTemplateStlye } from "../../styles/editBoardPageStyle";
import EditType from "../Organisms/ EditType";
import EditLocation from "../Organisms/EditLocation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import EditTitle from "../Organisms/EditTitle";
import EditContent from "../Organisms/EditContent";
import DefaultButton from "../Atoms/DefaultButton";
import EditGuestCnt from "../Organisms/EditGuestCnt";
import EditPrice from "../Organisms/EditPrice";
import { UpdateBoard } from "../../model/board.model";
import { funcUpdateBoard } from "../../api/board.api";
import { useAppDispatch } from "../../hooks/redux_hooks";
import { updateBoarderList } from "../../store/board.action";

export default function EditBoardPageTemplate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const guestRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [isOutdoor, setIsOutdoor] = useState<boolean>(false);
  const [boardNo, setBoardNo] = useState<number>();
  const [locationObj, setLocationObj] = useState<any>({
    location: "",
    locationDetail: "",
    zoneNumber: "",
  });

  const setOnClickOutDoor = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.currentTarget.id === "outdoor") setIsOutdoor(true);
      else setIsOutdoor(false);
    },
    [isOutdoor]
  );

  useEffect(() => {
    if (!id) {
      navigate("/post");
    } else {
      setBoardNo(parseInt(id));
    }
  }, []);

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!titleRef.current?.value) {
      alert("게시글 제목을 입력해주세요");
      titleRef.current?.focus();
      return;
    }

    if (!contentRef.current?.value) {
      alert("게시글 내용을 입력하세요");
      contentRef.current?.focus();
      return;
    }

    if (
      !locationObj.location ||
      !locationObj.locationDetail ||
      !locationObj.zoneNumber
    ) {
      alert("주소를 입력해주세요");
      return;
    }

    if (!priceRef.current?.value) {
      alert("가격을 입력해 주세요");
      priceRef.current?.focus();
      return;
    }

    if (!guestRef.current?.value) {
      alert("게스트 인원 수를 입력해주세요");
      guestRef.current?.focus();
      return;
    }

    // update func
    const ret = confirm("저장 하시겠습니까?");

    if (!ret) return;

    const body: UpdateBoard = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      location: locationObj.location,
      locationDetail: locationObj.locationDetail,
      zoneNumber: locationObj.zoneNumber,
      guestCnt: parseInt(guestRef.current.value),
      price: parseInt(priceRef.current.value),
      isOutdoor,
    };

    const result: boolean = await funcUpdateBoard(boardNo!, body);

    if (result) {
      dispatch(updateBoarderList());
      navigate("/post");
    } else {
      alert("저장에 실패했습니다. 잠시 후 다시 시도 부탁드립니다.");
      return;
    }
  };

  return (
    <EditBoardPageTemplateStlye>
      {boardNo !== undefined && (
        <>
          <PostRegisterTitle
            className="edit_title"
            text="게시글 수정"
          ></PostRegisterTitle>
          <EditTitle ref={titleRef} boardNo={boardNo} />
          <EditContent ref={contentRef} boardNo={boardNo} />
          <EditType
            boardNo={boardNo}
            isOutDoor={isOutdoor}
            setInitOutDoor={setIsOutdoor}
            onClick={setOnClickOutDoor}
          />
          <EditLocation
            boardNo={boardNo}
            locationObj={locationObj}
            setLocation={setLocationObj}
          />
          <EditGuestCnt boardNo={boardNo} ref={guestRef} />
          <EditPrice boardNo={boardNo} ref={priceRef} />
          <div className="edit_submit_wrapper">
            <DefaultButton color="blue" text="저장" onClick={onSubmit} />
            <DefaultButton
              color="red"
              text="취소"
              onClick={(e) => {
                navigate("/post");
              }}
            />
          </div>
        </>
      )}
    </EditBoardPageTemplateStlye>
  );
}
