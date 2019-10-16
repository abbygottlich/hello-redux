export default (state, action) => {
    switch (action.type) {
      case "SET_TECHNOLOGY":
        console.log(action);
      default:
        return state;
    }
  };