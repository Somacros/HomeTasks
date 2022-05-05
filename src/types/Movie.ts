export interface IMovie {
    id?: number;
    title?: string;
    categories?: string[];
    rate?: number;
    year?: number;
    release_date?: string;
    posterLink?: string;
    duration?: string;
    details?: string;
};

export interface IMovieRequest {
    id?: number;
    title?: string;
    genres?: string[];
    vote_average?: number;
    release_date?: string;
    poster_path?: string;
    runtime?: string;
    overview?: string;
}