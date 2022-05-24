import * as React from 'react';
import {IMovie, IMovieRequest} from '../types/Movie';
import * as moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMovie, setMoviesArray as storeSetMoviesArray } from '../store/movie/action';
import { selectLimit, selectQueryObject } from '../store/query/selector';

interface IMoviesQuery {
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortOrder?: string;
    search?: string;
    searchBy?: string;
    filter?: string[];
}

type AsyncStateApi<IMoviesQuery> = [() => void];

export const useGetMovies = (): AsyncStateApi<IMoviesQuery> => {
    const [moviesArray, setMoviesArray] = React.useState(Array<IMovie>());

    const dispatch = useDispatch();
    const { 
        limit,
        offset,
        sortBy,
        sortOrder,
        search,
        searchBy,
        filter
    } = useSelector(selectQueryObject);

    React.useEffect(()=> {
        getMovies();
    }, []);

    const getMovies = () => {

        fetch('http://localhost:4000/movies?' + new URLSearchParams({
            offset: offset.toString(),
            limit: limit.toString(),
            search: search || '',
            searchBy: searchBy || 'title',
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
            dispatch(storeSetMoviesArray(filteredData));
        });
    }

    return [getMovies];
};