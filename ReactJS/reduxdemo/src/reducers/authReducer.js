const initState = {
  isLoggedIn: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
