import { RootState } from "../root-reducer";

//export const selectSearchString = (state: RootState) => state.movie.searchString ? state.movie.searchString : '';

export const selectMoviesArray = (state: RootState) => state.movie.moviesArray;

export const selectMoviesCount = (state: RootState) => state.movie.moviesArray instanceof Array ?  state.movie.moviesArray.length : 0;

export const selectCurrentMovie = (state: RootState) => state.movie.currentMovie;

export const selectIsSearching = (state: RootState) => state.movie.isSearching;

export const selectIsAddingMovie = (state: RootState) => state.movie.isAddingMovie;