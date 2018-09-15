import jwtDecode from "jwt-decode";
import http from "./httpService";

const restEndPoint = `/auth`;
const key = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(restEndPoint, {
    email,
    password
  });
  localStorage.setItem(key, jwt);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(key, jwt);
}
export function logout() {
  localStorage.removeItem("token");
}
export function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (err) {
    return null;
  }
}
export function getJwt() {
  return localStorage.getItem(key);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
