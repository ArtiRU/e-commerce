import {IUser, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction, UserActionEnum} from "./types";
import {AppDispatch} from "../../index";
import {api} from "../../../http/api";

export const authActions = {
    setIsAuth: (auth: boolean): SetAuthAction => ({type: UserActionEnum.SET_AUTH, payload: auth}),
    setError: (error: string): SetErrorAction => ({type: UserActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({type: UserActionEnum.SET_IS_LOADING, payload: loading}),
    setUser: (user: IUser): SetUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(authActions.setIsLoading(true));
            const response = await api.get<IUser[]>('/users');
            console.log(response.data) //
            const data = await response.data.find(user => user.username === username && user.password === password);
            if (data) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('firstname', data.name.firstname)
                dispatch(authActions.setIsAuth(true));
                dispatch(authActions.setUser(data));
            } else {
                dispatch(authActions.setError('Неправильно набран логин или пароль!'));
            }
            dispatch(authActions.setIsLoading(false));
        } catch (e) {
            dispatch(authActions.setError('Error'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('firstname');
        dispatch(authActions.setUser({} as IUser));
        dispatch(authActions.setIsAuth(false));
    }
}