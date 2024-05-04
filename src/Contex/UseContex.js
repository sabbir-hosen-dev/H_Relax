import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/reduce";

export const RelaxContex = createContext({});

const RelexProvider = ({children}) => {


  const [state,dispatch] = useReducer(reducer,initialState);

  const value = {
    name : state.name,
    roll: state.roll,
    addUser : (data) => {
      dispatch({type:"ADD_USER",payload:data})
    },
    setLogin: (data) => {
      dispatch({type:"SET_LOGIN", payload:data})
    }
  }

  return(
    <RelaxContex.Provider value={value}>
      {children}
  </RelaxContex.Provider>
  )
}

export default RelexProvider;