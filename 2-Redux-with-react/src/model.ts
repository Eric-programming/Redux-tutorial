export interface IUser {
  name: string;
  repos: number;
}

export interface IUserActionModel {
  type: string;
  payload: IUser | any;
}
