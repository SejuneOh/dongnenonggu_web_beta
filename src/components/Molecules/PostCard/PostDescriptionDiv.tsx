import React from "react";
import styled from "styled-components";
import DescriptionLabel from "../../Atoms/PostCard/DescriptionLabel";
import ExpireLabel from "../../Atoms/PostCard/ExpireLabel";
import TimeLabel from "../../Atoms/PostCard/TimeLabel";
import TitleLabel from "../../Atoms/PostCard/TitleLabel";

type TProps = {
  createAt: string | undefined;
  title: string | undefined;
  description: string | undefined;
  isOutdoor: boolean | undefined;
};

const PostDescriptionDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 3 0 120px;
`;

export default function PostDescriptionDiv({
  createAt,
  title,
  description,
  isOutdoor,
}: TProps) {
  return (
    <PostDescriptionDivStyle>
      <TimeLabel createAt={createAt} isOutDoor={isOutdoor} />
      {/* <ExpireLabel /> */}
      <TitleLabel title={title} />
      <DescriptionLabel description={description} />
    </PostDescriptionDivStyle>
  );
}
