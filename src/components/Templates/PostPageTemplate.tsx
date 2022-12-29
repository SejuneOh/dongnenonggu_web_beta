import React, { HTMLAttributes, useEffect, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { funcSetTotalBoard } from "../../store/board.action";
import boardSlice from "../../store/board.slice";
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
  const boards = useAppSelector((state) => state.board.boardList);
  const limit = useAppSelector((state) => state.board.limit);
  const totalPage = useAppSelector((state) => state.board.totalPages);
  const currentPage = useAppSelector((state) => state.board.currentPage);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const addItemBtnClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(funcIncreasePage());
    dispatch(funcFetchPostList());
  };

  const [isPeding, cb] = useTransition();

  useEffect(() => {
    console.log("useEffect");

    cb(() => {
      dispatch(funcSetTotalBoard(limit));
    });
  }, [boards]);

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
        {boards.length ? (
          boards.map((el, idx) => {
            return <PostCard key={idx} board={el} />;
          })
        ) : (
          <div className="post_noBaord">
            <p>등록된 게시글이 없습니다. </p>
          </div>
        )}
      </section>
      <div className="post_add_item_container">
        {currentPage < totalPage && (
          <button className="post_add_item_btn" onClick={addItemBtnClickHandle}>
            더보기
          </button>
        )}
      </div>
    </PostPageTemplateStyle>
  );
};

export default PostPageTemplate;
