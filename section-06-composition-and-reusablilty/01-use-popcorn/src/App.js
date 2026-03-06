import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo";
import { Search } from "./components/Search";
import { NumResults } from "./components/NumResults";
import { Main } from "./components/Main";
import { MoviesList } from "./components/MoviesList";
import { MovieBox } from "./components/MovieBox";
import { WatchedSummary } from "./components/WatchedSummary";
import { WatchedMoviesList } from "./components/WatchedMoviesList";
import { tempMovieData, tempWatchedData } from "./data/data";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo image="🍿" title="usePopcorn" />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
    {/* composition elements / passing as children */}
    <Main>
        <MovieBox >
          <MoviesList movies={movies} />
        </MovieBox>

        <MovieBox > 
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </MovieBox>
      </Main>

      {/* passing elements as props */}
      {/* <Main>
        <MovieBox element={<MoviesList movies={movies} />} />

        <MovieBox element={
          <>
            <WatchedSummary watched={watched} />
            <WatchedMoviesList watched={watched} />
          </>
        } />
      </Main> */}
    </>
  );
}
