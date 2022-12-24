import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface RegisterOptionDivProps extends HTMLAttributes<HTMLDivElement> {
  mainText: string;
  description: string;
  img: string;
}

const RegisterOptionDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 68px;
  border-radius: 10px;
  border: 1px solid var(--light-gray);
  max-width: 630px;
  margin-bottom: 12px;
  animation-name: listAnimation;
  animation-duration: 600ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-delay: 400ms;

  &:hover {
    border: 2px solid var(--black);
  }

  .register_option_text_container {
    padding: 2rem;

    & > h2 {
      font-size: 18px;
      font-weight: 700;
    }

    & > div {
      margin-top: 4px;
      font-size: 1rem;
      font-weight: 400;
      color: var(--light-gray);
    }
  }

  & > img {
    display: block;
    width: 36px;
    margin-right: 1rem;
  }
`;

export default function RegisterOptionDiv({
  mainText,
  description,
  img,
  ...props
}: RegisterOptionDivProps) {
  return (
    <RegisterOptionDivStyle {...props}>
      <div className="register_option_text_container">
        <h2>{mainText}</h2>
        <div>{description}</div>
      </div>
      <img src={img} alt="icon" />
    </RegisterOptionDivStyle>
  );
}
