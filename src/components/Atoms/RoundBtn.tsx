import { HTMLAttributes } from "react";
import styled from "styled-components";

const RoundBtnStyle = styled.button`
  height: 40px;
  width: 140px;
  background-color: var(--light-white);
  border: 2px solid var(--light-gray);
  border-radius: 30px;
`;

export default function RoundBtn<T extends HTMLAttributes<HTMLButtonElement>>({
  ...props
}: T) {
  return <RoundBtnStyle {...props}>궁금하신게 있나요?</RoundBtnStyle>;
}
