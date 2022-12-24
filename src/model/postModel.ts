export interface IPostModel {
  bordContent: string;
  boardKey: number;
  boardTitle: string;
  boardView: number;
  address: string;
  addressDetail: string;
  zoneNumber: string;
  createdDate: string;
  modifiedDate: string;
  userKey: string;
  userNickName: string;
}

export type PostModel = Partial<IPostModel>;
