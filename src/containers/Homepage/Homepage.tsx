import * as React from 'react';
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { FormModal } from '../../components/Modal/Modal';
import { BodyContainer } from '../../containers/Body';
import BodyHeader from '../../components/BodyHeader/BodyHeader';
import BodyContent from '../../components/BodyContent/BodyContent';
import Footer from '../../containers/Footer/Footer';
import MovieCounter from '../../components/MovieCounter/MovieCounter';
import MovieDetails from '../../containers/MovieDetails/MovieDetails';
import { Container } from '../../containers/Main';
import { IMovie } from '../../types/Movie';
import { MoviesArrayData } from '../../data/Movies';
import { useGetMovies } from '../../hooks/useGetMovies';
import { setCurrentMovie } from '../../store/movie/action';
import { setCurrentUser } from '../../store/user/user.action';
import { setIsSearching, setMoviesArray as storeSetMovies } from '../../store/movie/action';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { selectIsSearching, selectCurrentMovie, selectMoviesArray, selectIsAddingMovie, selectMoviesCount } from '../../store/movie/selector';

function HomePage() {

    const [setMoviesArray] = useGetMovies();

    const dispatch = useDispatch();
    const moviesCount = useSelector(selectMoviesCount);
    const selectedMovie = useSelector(selectCurrentMovie);
    const showSearch = useSelector(selectIsSearching);
    const isAddingMovie = useSelector(selectIsAddingMovie);

    const params = useParams();

    console.log('PARAMS:', params);

    const user = {
        userName: 'Marcos',
        password: '123',
        email: 'aa@gmail.com'
    }

    useEffect(() => {
        setMoviesArray();
        dispatch(setCurrentUser(user));
    }, []);

    let HeaderComponent;
    let ModalComponent;


    if(isAddingMovie) {
        ModalComponent = <FormModal/>
    } else {
        ModalComponent = null
    }

    if (showSearch) {
        HeaderComponent = <Header/>
    } else {
        if (selectedMovie && selectedMovie.id > 0 && !showSearch) {
            HeaderComponent = <MovieDetails movie={selectedMovie} />
        } else {
            HeaderComponent = <Header/>
        }
    }

    return (
        <div>
            {ModalComponent}
            <Container>
                {HeaderComponent}
            </Container>
            <BodyContainer>
                <BodyHeader />
                <MovieCounter count={moviesCount.toString()} />
                <BodyContent/>
            </BodyContainer>
            <Footer />
        </div>
    );
}

export default HomePage;