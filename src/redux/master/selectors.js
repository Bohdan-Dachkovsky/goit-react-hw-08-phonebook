export const getTasks = (state) => state.auth.user;
export const getName = (state) => state.auth.user.name;
export const getToken = (state) => state.auth.token;
export const isLoggedin = (state) => state.auth.isLoggedIn;
export const getActive = (state) => state.auth.isRefreshing;
