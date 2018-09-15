import http from "./httpService";

const restEndPoint = "/users";

export function register(user) {
  return http.post(restEndPoint, {
    name: user.name,
    password: user.password,
    email: user.username
  });
}
