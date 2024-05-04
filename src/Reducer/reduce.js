export const initialState = {
  login: false,
  user: {
    name: " ",
    email: " ",
    photo: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {

    case "SET_LOGIN":
      
      return {
        ...state,
        login: action.payload,
      };

    case "ADD_USER":
      return {
        ...state,
      };

    default:
      return state;
  }
};
