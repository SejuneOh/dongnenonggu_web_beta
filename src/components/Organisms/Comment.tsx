import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GroupComment } from "../../model/comment.model";
import ReplyComment from "./ReplyComment";
import UserComment from "./UserComment";

interface Props {
  comments: Array<GroupComment>;
}

interface PageNationProps {
  totalLength: number;
  selectPage: number;
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
}

const limit = 2;

export default function Comment({ comments }: Props) {
  const [selectPage, setSelectPage] = useState<number>(1);
  const totalArrayLength = comments.length;
  const offset = (selectPage - 1) * limit;

  return (
    <div>
      {comments.slice(offset, offset + limit).map((item, idx) => {
        return (
          <div key={idx}>
            {item.comments.map((comment) => {
              return comment.deps > 0 ? (
                <ReplyComment key={comment.commentId} comment={comment} />
              ) : (
                <UserComment key={comment.commentId} comment={comment} />
              );
            })}
          </div>
        );
      })}
      <PageNation
        totalLength={totalArrayLength}
        selectPage={selectPage}
        setSelectPage={setSelectPage}
      />
    </div>
  );
}

// styled
const PageNationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;

  & > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > li {
      font-size: 1.2rem;
      cursor: pointer;

      &.active {
        color: var(--blue);
      }
    }
  }

  & > button {
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid var(--light-gray);
    background-color: inherit;
  }
`;

function PageNation({
  totalLength,
  selectPage,
  setSelectPage,
}: PageNationProps): JSX.Element {
  const [lastPage, setLastPage] = useState<number>(1);

  const endPage =
    totalLength % limit === 0 ? totalLength / limit : totalLength / limit + 1;

  useEffect(() => {
    setLastPage(endPage);
  }, [totalLength]);

  const onListClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const seleted: number = parseInt(e.currentTarget.textContent!);
    // setSelectedPage(seleted);
    setSelectPage(seleted);
  };

  const onPrevClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selectPage === 1) return;

    setSelectPage((prev) => prev - 1);
  };
  const onNextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selectPage === lastPage) return;

    setSelectPage((prev) => prev + 1);
  };

  const DefinePage = (end: number) => {
    const result = [];
    for (let i = 1; i <= end; i++) {
      if (i === selectPage) {
        result.push(
          <li className="active" key={i} onClick={onListClick}>
            {i}
          </li>
        );
      } else {
        result.push(
          <li key={i} onClick={onListClick}>
            {i}
          </li>
        );
      }
    }
    return result;
  };

  return (
    <PageNationStyle>
      <button onClick={onPrevClick}>{"<"}</button>
      <ul>{DefinePage(lastPage)}</ul>
      <button onClick={onNextClick}>{">"}</button>
    </PageNationStyle>
  );
}
