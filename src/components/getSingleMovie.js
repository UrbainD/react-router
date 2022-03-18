import { moviesData } from "./MoviesData";

export const getSingleMovie = (name) => {
  //filtre tous les films et retourne le film dont le nom correspond au nom passée en paramètre
  return moviesData.find((movie) => movie.name === name);
};
