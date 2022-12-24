import DaumPostCode from "react-daum-postcode";
import styled from "styled-components";

const DaumPostStyle = styled.div``;

export default function DaumPost() {
  return (
    <DaumPostStyle>
      <DaumPostCode />
    </DaumPostStyle>
  );
}
