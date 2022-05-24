import { IReduxAction } from "../../types/common";
import { IMovie } from "../../types/Movie";
import { MOVIE_ACTION_TYPES } from './types';

const initialState: MovieState = {
    currentMovie: {
        id: null,
        title: '',
        categories: [],
        rate: null,
        year: null,
        release_date: '',
        posterLink: '',
        duration: '',
        details: '',
    },
    moviesArray: [],
    isSearching: true,
    isAddingMovie: false,
    searchString: ''
}

interface MovieState {
    currentMovie: IMovie;
    moviesArray: Array<IMovie>;
    isSearching: boolean;
    isAddingMovie: boolean;
    searchString: string;
};

export const reducer = (state = initialState, action: IReduxAction<IMovie>) => {
    const { type, payload } = action;

    switch(type) {
        case MOVIE_ACTION_TYPES.SET_CURRENT_MOVIE:
            return { ...state, currentMovie: payload, isSearching: false };
        case MOVIE_ACTION_TYPES.SET_MOVIES_ARRAY:
            return { ...state, moviesArray: payload };
        case MOVIE_ACTION_TYPES.SET_IS_SEARCHING:
            return { ...state, isSearching: payload };
        case MOVIE_ACTION_TYPES.SET_IS_ADDING_MOVIE:
            return { ...state, isAddingMovie: payload };
        case MOVIE_ACTION_TYPES.SET_SEARCH_STRING:
            return { ...state, searchString: payload };
        default:
            return state;
    }
};
