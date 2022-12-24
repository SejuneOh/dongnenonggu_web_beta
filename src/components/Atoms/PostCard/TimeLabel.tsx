import styled from "styled-components";
import { format } from "timeago.js";
type TProps = {
  createAt: string | undefined;
};

const TimeLabelStyle = styled.article`
  font-size: 11px;
  margin-bottom: 10px;
  .time {
    color: var(--blue);
  }
`;
const TimeLabel: React.FC<TProps> = ({ createAt }) => {
  return (
    <TimeLabelStyle>
      {createAt ? (
        <span className="time">{format(createAt, "kor")}</span>
      ) : null}
    </TimeLabelStyle>
  );
};

export default TimeLabel;
