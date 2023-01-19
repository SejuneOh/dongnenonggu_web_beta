import React, { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
};

interface Props {
	isLoading: boolean;
}

const LoadingStyle = styled.div`
	height: calc(100vh * 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: inherit;
	opacity: calc(0.1);
`;

export default function Loading({ isLoading }: Props) {
	return (
		<LoadingStyle>
			<BeatLoader
				color="#000000"
				loading={isLoading}
				cssOverride={override}
				margin={2}
				size={15}
				speedMultiplier={1}
			/>
		</LoadingStyle>
	);
}
