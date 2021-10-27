export interface IUserInfo {
    firstname: string,
    lastname: string,
}

export interface IUser {
    username: string,
    password: string,
    name: IUserInfo,
}

export interface UserState {
    isAuth: boolean,
    error: string,
    isLoading: boolean,
    user: IUser,
}

export enum UserActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetAuthAction {
    type: UserActionEnum.SET_AUTH,
    payload: boolean,
}

export interface SetErrorAction {
    type: UserActionEnum.SET_ERROR,
    payload: string,
}

export interface SetUserAction {
    type: UserActionEnum.SET_USER,
    payload: IUser,
}

export interface SetIsLoadingAction {
    type: UserActionEnum.SET_IS_LOADING,
    payload: boolean,
}

export type UserAction =
    SetAuthAction |
    SetErrorAction |
    SetUserAction |
    SetIsLoadingAction;