import React from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/arrow.svg";

import searchIcon from "../../assets/search.svg";

const PostSearchBarStyle = styled.div`
  width: 360px;
  border: 1px solid var(--middle-gray);
  background-color: var(--white);
  padding: 4px 13px 4px 4px;
  border-radius: 5px;

  .post_search_option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 32px;
    background-color: var(--light-white);
    padding: 8px 10px 8px 9px;
    font-size: 12px;
    border-radius: 5px;

    & > img {
      width: 28px;
    }
  }

  .post_search_option_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > input {
      flex: 1 1 0%;
      align-self: stretch;
      border: 0;
      background-color: inherit;
      outline: 0;
      margin: 0 15px;
    }

    & > button {
      border: 0;
      background-color: inherit;
      cursor: pointer;

      & > img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export default function PostSearchBar() {
  return (
    <PostSearchBarStyle>
      <div className="post_search_option_wrapper">
        <div className="post_search_option">
          <span className="post_search_current_option">장소</span>
          <img src={arrowIcon} alt="" />
        </div>
        <input type="text" />
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </div>
    </PostSearchBarStyle>
  );
}
