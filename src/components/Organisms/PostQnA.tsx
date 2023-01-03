import { ComponentProps, makePostItem } from "../../HoC/MakePostItem";

function PostQnA({ board }: ComponentProps) {
  return <div>PostQnA</div>;
}

export default makePostItem(PostQnA);
