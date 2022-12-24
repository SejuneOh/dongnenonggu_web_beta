import React from "react";
import styled from "styled-components";

type TProps = {
  nickName: string | undefined;
};

const NickNameLabelStyle = styled.span`
  height: 20px;
  margin-bottom: 1px;
  font-size: 12px;
`;

export default function NickNameLabel({ nickName }: TProps) {
  return <NickNameLabelStyle>{nickName}</NickNameLabelStyle>;
}
