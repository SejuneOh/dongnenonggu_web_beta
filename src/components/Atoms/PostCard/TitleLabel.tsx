import styled from "styled-components";

type TProps = {
  title: string | undefined;
};

const TitleLabelStyle = styled.h2`
  font-weight: 700;
  margin-bottom: 13px;
`;

const TitleLabel: React.FC<TProps> = ({ title }) => {
  return <TitleLabelStyle>{title}</TitleLabelStyle>;
};

export default TitleLabel;
