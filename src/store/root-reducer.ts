import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { reducer as movieReducer } from "./movie/reducer";
import { queryReducer } from "./query/reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    query: queryReducer
});

export type RootState = ReturnType<typeof rootReducer>;