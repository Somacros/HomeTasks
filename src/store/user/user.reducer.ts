import { IReduxAction } from "../../types/common";
import { IUser } from "../../types/user";
import { USER_ACTION_TYPES } from './user.types';

const initialState: UserState = {
    currentUser: { userName:'', email: '', password: '' },
}

interface UserState {
    currentUser: IUser;
};

export const userReducer = (state = initialState, action: IReduxAction<IUser> ) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
};

