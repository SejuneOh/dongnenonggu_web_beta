import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import block from "../assets/block.svg";

const FailPageStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: var(--light-white);
  z-index: 99;

  .success_container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img_container {
      & > img {
        width: 150px;
        height: 150px;
      }
    }

    & > h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    & > article {
      margin-bottom: 2rem;
    }

    .success_go_post {
      width: 100%;
      padding: 1rem;
      background-color: var(--blue);
      color: var(--white);
      border: 0;
      border-radius: 10px;
    }
  }

  .success_link {
    /* border: 1px solid black; */
    width: 100%;
  }
`;

export default function FailPage() {
  return (
    <FailPageStyle>
      {" "}
      <div className="success_container">
        <div className="img_container">
          <img src={block} alt="" />
        </div>
        <h1>게시들 등록 중 문제가 발생했습니다.</h1>
        <article>서비스 이용에 문제가 생겨 죄송합니다.</article>
        <Link className="success_link" to="/post">
          <button className="success_go_post">프스트 페이지로 이동</button>
        </Link>
      </div>
    </FailPageStyle>
  );
}
