import { useSelector } from "react-redux";
import { IReduxAction } from "../../types/common";
import { IUser } from "../../types/user";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user: IUser) : IReduxAction<IUser> => ({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});

