import getGenres from "./genreService";
import http from "./httpService";

const movieAPI = "/movies";

function movieUrl(id) {
  return `${movieAPI}/${id}`;
}
export function getMovies() {
  return http.get(movieAPI);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  const body = { ...movie };

  if (movie._id) {
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(movieAPI, body);
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}
