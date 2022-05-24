import { IReduxAction } from "../../types/common";
import { QUERY_ACTION_TYPES } from "./types"

export const setSearchString = (searchString : string) : IReduxAction<string> => ({type: QUERY_ACTION_TYPES.SET_SEARCH_STRING, payload: searchString});

export const setLimit = (limit : number) : IReduxAction<number> => ({type: QUERY_ACTION_TYPES.SET_LIMIT, payload: limit});

export const setOffset = (offset : number) : IReduxAction<number> => ({type: QUERY_ACTION_TYPES.SET_OFFSET, payload: offset});

export const setSortBy = (sortBy : string) : IReduxAction<string> => ({type: QUERY_ACTION_TYPES.SET_SORT_BY, payload: sortBy});

export const setSortOrder = (sortOrder : string) : IReduxAction<string> => ({type: QUERY_ACTION_TYPES.SET_SORT_ORDER, payload: sortOrder});

export const setSearchBy = (searchBy : string) : IReduxAction<string> => ({type: QUERY_ACTION_TYPES.SET_SEARCH_BY, payload: searchBy});

export const setFilter = (filter : string[]) : IReduxAction<string[]> => ({type: QUERY_ACTION_TYPES.SET_FILTER, payload: filter});