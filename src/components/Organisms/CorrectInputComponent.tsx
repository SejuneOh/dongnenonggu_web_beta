import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { funcGetUser } from "../../api/userApi";
import CorrectBtn from "../Atoms/CorrectBtn";
import WrongAlertSpan from "../Atoms/WrongAlertSpan";
import CustomInput from "../Molecules/CustomInput";

function isEmptyObj(obj: any) {
	if (obj.constructor === Object && Object.keys(obj).length === 0) {
		return true;
	}

	return false;
}

const CorrectInputComponentStyled = styled.div`
	.alert_wrapper {
		display: flex;
		margin-top: 5px;
		justify-content: space-between;
		align-items: center;
	}
`;

interface Props {
	isEmail: boolean;
	checkState: React.Dispatch<React.SetStateAction<boolean>>;
	setEmail?: React.Dispatch<React.SetStateAction<string>>;
	compareValue?: string;
}

export default function CorrectInputComponent({
	isEmail,
	checkState,
	setEmail = () => {},
	compareValue = "",
}: Props) {
	const initWarn = { msg: "", color: "red" };
	const [warn, setWarn] = useState(initWarn);
	const [active, setActive] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setActive(false);
		if (isEmail) {
			setEmail(e.target.value);
		}
		setValue(e.target.value);
	};

	const onChageValue = useCallback(onChange, [value]);

	const correctBtnClickHandle = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setWarn(initWarn);
		setActive(true);
		if (isEmail) {
			const reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
			const ret = await funcGetUser(value);

			// email 형식 비교
			if (!reg.test(value)) {
				setWarn({ msg: "이메일 양식으로 입력해주세요", color: "red" });
				return;
			}
			// 중복 이메일 test
			if (!isEmptyObj(ret)) {
				setWarn({ msg: "중복 이메일입니다.", color: "red" });
				return;
			}

			setWarn({ msg: "사용가능한 이메일 입니다.", color: "green" });
			checkState(true);
		} else {
			if (compareValue !== value) {
				setWarn({ msg: "작성한 비밀번호와 같지 않습니다.", color: "red" });
				return;
			}

			setWarn({ msg: "비밀번호 확인했습니다.", color: "green" });
			checkState(true);
		}
	};

	return (
		<CorrectInputComponentStyled>
			<CustomInput
				name={isEmail ? "email" : "ck_password"}
				type={isEmail ? "text" : "password"}
				placeholder={isEmail ? "이메일" : "비밀번호 확인"}
				onChangeFunc={onChageValue}
			/>
			<div className="alert_wrapper">
				<WrongAlertSpan color={warn.color} active={active} msg={warn.msg} />
				<CorrectBtn onClick={correctBtnClickHandle}>
					{isEmail ? "이메일 확인" : "비밀번호 확인"}
				</CorrectBtn>
			</div>
		</CorrectInputComponentStyled>
	);
}
