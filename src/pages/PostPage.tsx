import { useEffect, useTransition } from "react";
import Loading from "../components/Molecules/Loading";
import PostPageTemplate from "../components/Templates/PostPageTemplate";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";
import { funcSetTotalBoard } from "../store/board.action";
import { DefaultTemplate } from "../styles/defaultMainTemplate";

export default function PostPage() {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.board.limit);
  const [isPending, startTransition] = useTransition();

  // 페이지 로딩하면서 데이터를 가져온다.
  useEffect(() => {
    startTransition(() => {
      dispatch(funcSetTotalBoard(limit));
    });
  }, []);

  return (
    <DefaultTemplate>
      {isPending ? <Loading isLoading={isPending} /> : <PostPageTemplate />}
    </DefaultTemplate>
  );
}
