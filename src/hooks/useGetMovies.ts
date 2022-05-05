import * as React from 'react';
import {IMovie, IMovieRequest} from '../types/Movie';
import * as moment from 'moment';

interface IMoviesQuery {
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortOrder?: string;
    search?: string;
    searchBy?: string;
    filter?: string[];
}

type AsyncStateApi<IMoviesQuery> = [Array<IMovie>, (value: IMoviesQuery) => void];

export const useGetMovies = (props:IMoviesQuery): AsyncStateApi<IMoviesQuery> => {
    const [moviesArray, setMoviesArray] = React.useState(Array<IMovie>());

    React.useEffect(()=> {
        getMovies(props);
    }, []);

    const getMovies = ({ offset = 0, limit = 10, ...props }:IMoviesQuery) => {
        fetch('http://localhost:4000/movies?' + new URLSearchParams({
            offset: offset.toString(),
            limit: limit.toString(),
            search: props.search || '',
            searchBy: props.searchBy || 'title',
        }))
        .then(response => response.json())
        .then(data => {

            const filteredData:Array<IMovie> = data.data.map((movie:IMovieRequest, index:number) => {
                let movieData:IMovie = {
                    id: movie.id,
                    title: movie.title,
                    categories: movie.genres,
                    rate: movie.vote_average,
                    year: parseInt(moment(movie.release_date).format("YYYY")),
                    posterLink: movie.poster_path,
                    duration: movie.runtime,
                    details: movie.overview,
                }

                return movieData;
            });

            setMoviesArray(filteredData);
        });
    }

    return [moviesArray, getMovies];
};