import { useContext } from "react";
import { RelaxContex } from "../Contex/UseContex";


const useReluxContex = () => {
  return useContext(RelaxContex)
}

export default useReluxContex