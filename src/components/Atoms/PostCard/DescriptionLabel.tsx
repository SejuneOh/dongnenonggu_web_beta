import React from "react";
import styled from "styled-components";

type TProps = {
  description: string | undefined;
};

const DescriptionLabelStyle = styled.p`
  font-size: 13px;
  color: var(--middle-gray);
  margin-bottom: 20px;
`;

export default function DescriptionLabel({ description }: TProps) {
  return (
    <DescriptionLabelStyle>
      {description ? description : null}
    </DescriptionLabelStyle>
  );
}
