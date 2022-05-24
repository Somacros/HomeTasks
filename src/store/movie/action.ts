import { useSelector } from "react-redux";
import { IReduxAction } from "../../types/common";
import { IMovie } from "../../types/Movie";
import { MOVIE_ACTION_TYPES } from "./types";

export const setCurrentMovie = (movie: IMovie) : IReduxAction<IMovie> => ({type: MOVIE_ACTION_TYPES.SET_CURRENT_MOVIE, payload: movie});

export const setMoviesArray = (movies: IMovie[]) : IReduxAction<IMovie[]> => ({type: MOVIE_ACTION_TYPES.SET_MOVIES_ARRAY, payload: movies});

export const setIsSearching = (isSearching: boolean): IReduxAction<Boolean> => ({type: MOVIE_ACTION_TYPES.SET_IS_SEARCHING, payload: isSearching});

export const setIsAddingMovie = (isSearching: boolean): IReduxAction<Boolean> => ({type: MOVIE_ACTION_TYPES.SET_IS_ADDING_MOVIE, payload: isSearching});
