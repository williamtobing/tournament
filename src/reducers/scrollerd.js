export const scrolledReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_SCROLLED_NAV":
      return true;
    case "HIDE_SCROLLED_NAV":
      return false;
    default:
      return state;
  }
};
