import { useState } from 'react'

import { Movieslist } from './components/Movielist';
import { moviesData } from "./components/MoviesData"
import { Header } from './components/Header';
import { Add } from './components/Add';



function App() {
  const [textSearch, setTextSearch] = useState("");
  const [rateSearching, setRateSearching] = useState(0);
  const [movies, setMovies] = useState(moviesData);


  return (
    <div className="App" >
      <Header setTextSearch={setTextSearch} setRateSearching={setRateSearching} rateSearching={rateSearching} />
      <Add setMovies={setMovies} movies={movies} />
      <Movieslist moviesData={movies} textSearch={textSearch} rateSearching={rateSearching} />


    </div>
  );
}

export default App;
