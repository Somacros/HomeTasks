import * as React from 'react';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import { FormModal } from './components/Modal/Modal';
import { BodyContainer } from './containers/Body';
import BodyHeader from './components/BodyHeader/BodyHeader';
import BodyContent from './components/BodyContent/BodyContent';
import Footer from './containers/Footer/Footer';
import MovieCounter from './components/MovieCounter/MovieCounter';
import MovieDetails from './containers/MovieDetails/MovieDetails';
import { Container } from './containers/Main';
import { IMovie } from './types/Movie';
import { MoviesArrayData } from './data/Movies';
import { useGetMovies } from './hooks/useGetMovies';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAddingMovie, setIsAddingMovie] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<IMovie>({});
    const [searchString, setSearchString] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [moviesFoundQty, setMoviesFoundQty] = useState(0);
    const [moviesFoundArray, setMoviesFoundArray] = useState([]);
    const [moviesArray, setMoviesArray] = useGetMovies({});

    useEffect(() => {
        setMoviesArray({sortBy, search: searchString})
    }, [sortBy]);

    const changeIsAddingMovie = () => {
        console.log('Entró');
        if (isAddingMovie) {
            setIsAddingMovie(false);
        } else {
            setIsAddingMovie(true);
        }
    }

    const handleMovieClick = (movie: IMovie) => {
        setShowSearch(false);
        setSelectedMovie(movie);
    }

    const handleSearchClick = (valor: boolean) => {
        setShowSearch(true);
    }

    const handleSearchButtonClick = () => {
        setMoviesArray({search: searchString})
    }

    const handleSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchString(event.currentTarget.value);
    }

    let HeaderComponent;

    if (showSearch) {
        HeaderComponent = <Header onSearchClick={handleSearchButtonClick} onSearchChange={handleSearchChange} onShow={changeIsAddingMovie} />
    } else {
        if (Object.entries(selectedMovie).length) {
            HeaderComponent = <MovieDetails handleSearchClick={handleSearchClick} movie={selectedMovie} />
        } else {
            HeaderComponent = <Header onSearchClick={handleSearchButtonClick} onSearchChange={handleSearchChange} onShow={changeIsAddingMovie} />
        }
    }

    return (
        <div>
            <FormModal onCrossClick={changeIsAddingMovie} show={isAddingMovie} />
            <Container>
                {HeaderComponent}
            </Container>
            <BodyContainer>
                <BodyHeader />
                <MovieCounter count={moviesArray.length.toString()} />
                <BodyContent handleMovieClick={handleMovieClick} moviesArray={moviesArray} />
            </BodyContainer>
            <Footer />
        </div>
    );
}

export default App;