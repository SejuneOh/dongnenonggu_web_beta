export interface IUSER {
  email: string;
  password: string;
  nickname: string;
  createAt: string;
  user_id: number;
  role: boolean;
}

type ClientUser = Partial<IUSER>;

type AdminUser = Partial<IUSER>;

/**
 *  login client dummy data
 */
export const client_user: ClientUser = {
  email: "user@gmail.com",
  nickname: "Jons",
  user_id: 1,
  role: false,
};

/**
 *  admin login dummy data
 */
export const admin_client: AdminUser = {
  email: "admin@dongnong.com",
  nickname: "Uno",
  user_id: 2,
  role: true,
};

//Post

export interface IPost {
  borderKey: number;
  borderTitle: string;
  borderContent: string;
  boarderMap: string;
  views: number;
  userKey: number;
  borderImg: string;
  createAt: string;
  updateAt: string;
}

export type TBoard = Partial<IPost>;

export const postDummy: Array<TBoard> = [
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 2,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
  {
    borderKey: 1,
    borderTitle: "서대문구 풀코트 게스트 구합니다.",
    borderContent: "안녕하세요 서대문구 실내 농구장 3명 게스트 구합니다.",
    boarderMap: "서대문구",
    views: 100,
    createAt: "2022-11-22",
    updateAt: "",
  },
];

// comment
export interface ICommnet {
  nickName: string;
  text: string;
  creatAt: string;
  host: {
    nickName: string;
    text: string;
    createAt: string;
  };
}

export const commentDummy: ICommnet = {
  nickName: "서대문농구쟁이",
  text: "오늘 게스트 2명 예약 가능할까요?",
  creatAt: "2022-11-26 09:10",
  host: {
    nickName: "호스트",
    text: "2명 예약 가능합니다.",
    createAt: "2022-11-26 10:02",
  },
};
