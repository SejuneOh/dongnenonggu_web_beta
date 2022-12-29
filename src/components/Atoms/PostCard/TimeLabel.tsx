import styled from "styled-components";
import { format } from "timeago.js";
import indoor from "../../../assets/stadium.svg";
import outdoor from "../../../assets/basketballIcon.svg";
type TProps = {
  createAt: string | undefined;
  isOutDoor: boolean | undefined;
};

const TimeLabelStyle = styled.article`
  font-size: 11px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .time {
    color: var(--blue);
  }

  .time_outdoor {
    display: flex;
    align-items: center;

    & > img {
      width: 1rem;
      height: 1rem;
      padding-right: 0.2rem;
    }
  }
`;
const TimeLabel: React.FC<TProps> = ({ createAt, isOutDoor }) => {
  return (
    <TimeLabelStyle>
      {createAt ? (
        <>
          <span className="time">{format(createAt, "kor")}</span>
          <div className="time_outdoor">
            <img src={isOutDoor ? outdoor : indoor} alt="img" />
            <span>{isOutDoor ? "야외 농구장" : "실내 농구장"}</span>
          </div>
        </>
      ) : null}
    </TimeLabelStyle>
  );
};

export default TimeLabel;
