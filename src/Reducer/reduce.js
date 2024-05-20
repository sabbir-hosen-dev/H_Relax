export const initialState = {
  login: false,
  user: {
    name: " ",
    email: " ",
    photo: "",
  },
  selectItem : ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    


    case "SELECT":
      console.log("check click")
      console.log(action.payload)
      return {
        ...state,
        selectItem: action.payload
      };
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload,
      };

    case "ADD_USER":
      const {name,email,photo} = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          name: name,
          email: email,
          photo: photo
        }
      };

    default:
      return state;
  }
};
