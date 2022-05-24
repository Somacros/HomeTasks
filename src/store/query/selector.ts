import { IMovieRequest } from "../../types/Movie";
import { RootState } from "../root-reducer";
import { QueryState } from "./reducer";

export const selectLimit = (state: RootState) : number => state.query.limit as number;

export const selectOffset = (state: RootState) : number => state.query.offset as number;

export const selectSortBy = (state: RootState) : string => state.query.sortBy as string;

export const selectSortOrder = (state: RootState) : string => state.query.sortOrder as string;

export const selectSearchString = (state: RootState) : string => state.query.search as string;

export const selectSearchBy = (state: RootState) : string => state.query.searchBy as string;

export const selectFilter = (state: RootState) : Array<string> => state.query.filter as Array<string>;

export const selectQueryObject = (state: RootState) : QueryState => state.query as QueryState;