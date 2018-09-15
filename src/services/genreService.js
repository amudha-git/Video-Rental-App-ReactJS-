import http from "./httpService";

export default function getGenres() {
  const url = `/genres`;

  return http.get(url);
}
