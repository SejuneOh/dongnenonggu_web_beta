import React, { HTMLAttributes, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { funcFetchPostList, funcIncreasePage } from "../../store/postAction";
import { PostPageTemplateStyle } from "../../styles/postPageTemplateStyle";
import PostSearchBar from "../Atoms/PostSearchBar";
import PostUpdateBtn from "../Atoms/PostUpdateBtn";
import PostUploadBtn from "../Atoms/PostUploadBtn";
import PostPageTitle from "../Molecules/PostPageTitle";
import PostCard from "../Organisms/PostCard";

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
        <PostUploadBtn onClick={(e) => navigator("/postregist/type")} />
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
