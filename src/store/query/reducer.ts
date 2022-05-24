import { IReduxAction } from "../../types/common";
import { IMovie } from "../../types/Movie";
import { QUERY_ACTION_TYPES } from './types';

const initialState: QueryState = {
    search: '',
    limit: 10,
    offset: 0,
    sortBy: '',
    sortOrder: '',
    searchBy: '',
    filter: []
}

export interface QueryState {
    search: string;
    limit: number;
    offset: number;
    sortBy: string;
    sortOrder: string;
    searchBy: string;
    filter: string[]
};

export const queryReducer = (state = initialState, action: IReduxAction<IMovie>) => {
    const { type, payload } = action;

    switch(type) {
        case QUERY_ACTION_TYPES.SET_SEARCH_STRING:
            return { ...state, search: payload};
        case QUERY_ACTION_TYPES.SET_LIMIT:
            return { ...state, limit: payload };
        case QUERY_ACTION_TYPES.SET_OFFSET:
            return { ...state, offset: payload };
        case QUERY_ACTION_TYPES.SET_SORT_BY:
            return { ...state, sortBy: payload };
        case QUERY_ACTION_TYPES.SET_SORT_ORDER:
            return { ...state, sortOrder: payload };
        case QUERY_ACTION_TYPES.SET_SEARCH_BY:
            return { ...state, searchBy: payload };
        case QUERY_ACTION_TYPES.SET_FILTER:
            return { ...state, filter: payload };
        default:
            return state;
    }
};