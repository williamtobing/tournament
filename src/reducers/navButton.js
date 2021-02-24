export const navButtonReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_NAV":
      return true;
    case "HIDE_NAV":
      return false;
    default:
      return state;
  }
};
