import { ComponentProps, makePostItem } from "../../HoC/MakePostItem";

const PostHost = ({ board }: ComponentProps) => {
  return (
    <div
      style={{
        fontSize: "24px",
        fontWeight: "500",
      }}
    >
      <span>{`Host ${board.writerName}님께서 농구에 초대합니다.`}</span>
    </div>
  );
};

export default makePostItem(PostHost);
