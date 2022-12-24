import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import storeIcon from "../../assets/store.svg";

type TProps = {
  title: string;
  url: string;
};

const AppDownLoadBtnStyle = styled.button`
  width: 147px;
  height: 44px;
  font-size: 1rem;
  font-weight: 700;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  /* margin-left: 3rem; */

  & > img {
    width: 30px;
  }
`;
const AppDownLoadBtn: React.FC<TProps> = ({ title, url }) => {
  const navigate = useNavigate();

  const btnClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!url) return;
    navigate(url);
  };
  return (
    <AppDownLoadBtnStyle onClick={btnClickHandle}>
      <img src={storeIcon} alt="icon" />
      {title}
    </AppDownLoadBtnStyle>
  );
};

export default AppDownLoadBtn;
