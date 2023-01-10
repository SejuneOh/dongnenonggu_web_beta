import PostPageTemplate from "../components/Templates/PostPageTemplate";
import { useAppDispatch, useAppSelector } from "../hooks/redux_hooks";
import { DefaultTemplate } from "../styles/defaultMainTemplate";

export default function PostPage() {
  const dispatch = useAppDispatch();

  return (
    <DefaultTemplate>
      <PostPageTemplate />
    </DefaultTemplate>
  );
}
