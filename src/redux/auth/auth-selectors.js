const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshed = state => state.auth.isRefreshed;
const getUserName = state => state.auth.user.name;
const getError = state => state.auth.authError;

const authSelectors = { getIsLoggedIn, getUserName, getIsRefreshed, getError };

export default authSelectors;
