export interface UserModel {
  uuid: string;
  email: string;
  password: string;
  ck_password: string;
  name: string;
  createAt: Date;
  updateAt: Date;
  token: string;
  image: string;
}

export type RegistUser = Pick<UserModel, "password" | "name">;
