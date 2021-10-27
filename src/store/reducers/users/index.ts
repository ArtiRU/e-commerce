import {UserAction, UserActionEnum, UserState, IUser} from "./types";

const initialState: UserState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser,
}

const userReducer = (state= initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case UserActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case UserActionEnum.SET_USER:
            return {...state, user: action.payload}
        case UserActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}

export default userReducer;