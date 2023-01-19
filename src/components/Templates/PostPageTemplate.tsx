import React, { HTMLAttributes, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchBoardData from "../../hooks/useFetchBoard";
import { PostPageTemplateStyle } from "../../styles/postPageTemplateStyle";
import PostSearchBar from "../Atoms/PostSearchBar";
import PostUpdateBtn from "../Atoms/PostUpdateBtn";
import PostUploadBtn from "../Atoms/PostUploadBtn";
import Loading from "../Molecules/Loading";
import PostPageTitle from "../Molecules/PostPageTitle";
import PostCard from "../Organisms/PostCard";

const PostPageTemplate: React.FC = ({
	...props
}: HTMLAttributes<HTMLDivElement>) => {
	const navigator = useNavigate();

	const [pending, value, page, totalPage, nextPageHandle, updateHandle] =
		useFetchBoardData();

	return (
		<PostPageTemplateStyle {...props}>
			<PostPageTitle />
			<div className="post_option_container">
				<div className="update_search_wrapper">
					<PostUpdateBtn onClick={updateHandle} />
					<PostSearchBar />
				</div>
				<PostUploadBtn onClick={e => navigator("/become-host/type")} />
			</div>
			<section className="post_section">
				{pending ? (
					<Loading isLoading={pending} />
				) : value.length > 0 ? (
					<>
						{value.map((item, idx) => {
							return <PostCard key={idx} board={item} />;
						})}
						<div className="post_add_item_container">
							{page < totalPage && (
								<button className="post_add_item_btn" onClick={nextPageHandle}>
									더보기
								</button>
							)}
						</div>
					</>
				) : (
					<div className="post_noBaord">
						<p>등록된 게시글이 없습니다. </p>
					</div>
				)}
			</section>
		</PostPageTemplateStyle>
	);
};

export default PostPageTemplate;
