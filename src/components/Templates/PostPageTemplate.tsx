import React, { HTMLAttributes, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { funcFetchPostList, funcIncreasePage } from "../../store/postAction";
import PostSearchBar from "../Atoms/PostSearchBar";
import PostUpdateBtn from "../Atoms/PostUpdateBtn";
import PostUploadBtn from "../Atoms/PostUploadBtn";
import PostPageTitle from "../Molecules/PostPageTitle";
import PostCard from "../Organisms/PostCard";

const PostPageTemplateStyle = styled.div`
  .post_option_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .update_search_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
  }

  .post_section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -5px;
  }

  .post_add_item_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    .post_add_item_btn {
      background-color: inherit;
      border: 0;
      cursor: pointer;
      &:hover {
        opacity: 0.2;
      }
    }
  }
`;

const PostPageTemplate: React.FC = ({
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const postList = useAppSelector((state) => state.post.postList);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const addItemBtnClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(funcIncreasePage());
    dispatch(funcFetchPostList());
  };
  return (
    <PostPageTemplateStyle {...props}>
      <PostPageTitle />
      <div className="post_option_container">
        <div className="update_search_wrapper">
          <PostUpdateBtn />
          <PostSearchBar />
        </div>
        <PostUploadBtn onClick={(e) => navigator("/post/register")} />
      </div>
      <section className="post_section">
        {postList
          ? postList.map((el, idx) => {
              return <PostCard key={idx} post={el} />;
            })
          : null}
      </section>
      <div className="post_add_item_container">
        <button className="post_add_item_btn" onClick={addItemBtnClickHandle}>
          더보기
        </button>
      </div>
    </PostPageTemplateStyle>
  );
};

export default PostPageTemplate;
