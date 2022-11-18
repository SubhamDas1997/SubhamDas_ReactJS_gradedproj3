import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import MoviesComingSoon from './components/ComingSoon/MoviesComingSoon';
import FavouriteMovies from './components/Favourites/FavouriteMovies';
import Home from './components/Home/Home';
import MoviesInTheaters from './components/InTheaters/MoviesInTheaters';
import Navbar from './components/Navbar';
import TopRatedIndianMovies from './components/TopIndian/TopRatedIndianMovies';
import TopRatedMovies from './components/TopMovies/TopRatedMovies';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  
  return (
    <div>
      <Navbar searchVal={searchValue} setSearchVal={setSearchValue}/>
      <Container className='my-4'>
        <main>
          <Switch>
            <Route path="/home"> <Home /> </Route>
            <Route path="/:movieType/:title"> <MovieDetails /> </Route>
            <Route path="/movies-in-theaters"> <MoviesInTheaters searchVal={searchValue} /> </Route>
            <Route path="/movies-coming"> <MoviesComingSoon searchVal={searchValue} /> </Route>
            <Route path="/top-rated-india"> <TopRatedIndianMovies searchVal={searchValue} /> </Route>
            <Route path="/top-rated-movies"> <TopRatedMovies searchVal={searchValue} /> </Route>
            <Route path="/favourite"> <FavouriteMovies searchVal={searchValue} /> </Route>
            <Route path="/"> <Home /> </Route>
          </Switch>
        </main>
      </Container>
    </div>
  );
}

export default App;
