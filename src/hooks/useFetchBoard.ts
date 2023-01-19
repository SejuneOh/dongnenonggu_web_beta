import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { Board } from "../model/boardModel";
import { funcSearchBoardPage } from "../api/boardApi";
import boardSlice from "../store/boardSlice";
import { isPending } from "@reduxjs/toolkit";

function useFetchBoardData(): [
	boolean,
	Array<Board>,
	number,
	number,
	() => void,
	() => void
] {
	const limit = 12;
	const [pending, setPending] = useState<boolean>(false);
	const [value, setValue] = useState<Array<Board>>([]);
	const [_page, _setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(0);
	const dispatch = useDispatch();

	// syncronize data value
	// 최초의 한번만 하자
	useEffect(() => {
		initData();
	}, []);

	const initData = useCallback(async () => {
		const page = 0;
		const datas = await getData(page, limit);
		bindingData(datas);
	}, [value]);

	const fetchData = useCallback(async () => {
		const nextPage = _page + 1;
		const datas = await getData(nextPage, limit);
		bindingData([...value, ...datas]);
	}, [value]);

	const bindingData = useCallback(
		(boards: Array<Board>) => {
			setPending(true);
			const timeInterval = setTimeout(() => {
				setValue(boards);
				dispatch(boardSlice.actions.setBoardList(boards));
				setPending(false);
			}, 1000);

			return () => clearTimeout(timeInterval);
		},
		[value]
	);

	async function getData(page: number, cnt: number): Promise<Array<Board>> {
		const res = await funcSearchBoardPage(page, cnt);
		setTotalPage(res.data.totalPages ?? 0);
		const boards = res.data.docs
			? res.data.docs.map((el: any) => {
					const data: Board = {
						...el,
					};
					return data;
			  })
			: [];

		return boards;
	}

	const onClickMore = () => {
		_setPage(prev => prev + 1);
		fetchData();
	};

	const onUpdateClick = () => {
		_setPage(1);
		initData();
	};

	return [pending, value, _page, totalPage, onClickMore, onUpdateClick];
}

export default useFetchBoardData;
