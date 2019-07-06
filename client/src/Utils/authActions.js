import axios from 'axios'
// import setAuthToken from './setAuthToken'
// import jwt_decode from "jwt-decode";

export const registerUser = (userData) => {
  axios
    .post("/register", userData)
    .then(res => {
      window.location.href = "/login";
    })
    .catch(err => console.log(err))
}

export const loginUser = loginData => {
  axios
    .post('/login', loginData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      window.location.href = "/";
    })
    .catch(err => console.log(err))
}

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
  window.location.href = "/login";
}

