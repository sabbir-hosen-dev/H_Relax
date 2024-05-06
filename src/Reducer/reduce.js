export const initialState = {
  login: false,
  user: {
    name: " ",
    email: " ",
    photo: "",
  },
  selectItem : {
    img:"",
    title: "",
    dec: " ",
    price:""
  }
};

export const reducer = (state, action) => {
  switch (action.type) {

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
