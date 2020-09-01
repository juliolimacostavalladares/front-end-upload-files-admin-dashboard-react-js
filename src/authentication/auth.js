export const isAuthenticated = () => localStorage.getItem("TOKEN_KEY") !== null;
export const getToken = () => localStorage.getItem("TOKEN_KEY");
export const getUser = () => localStorage.getItem("USER_DATA");

export const login = (token) => {
  localStorage.setItem("TOKEN_KEY", token);
};
export const userData = (userData) => {
  localStorage.setItem("USER_DATA", userData);
};
