import styled from "styled-components";

export const PostPageTemplateStyle = styled.div`
	padding-bottom: 3rem;
	.post_option_container {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;

		.update_search_wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1rem;
		}
	}

	.post_section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: -5px;

		.post_noBaord {
			height: calc(100vh * 0.5);
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.2rem;
			font-weight: 700;
		}
	}

	.post_add_item_container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		.post_add_item_btn {
			background-color: inherit;
			border: 0;
			cursor: pointer;
			&:hover {
				opacity: 0.2;
			}
		}
	}
`;
