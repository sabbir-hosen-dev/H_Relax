
import { Navigate } from 'react-router-dom';
import useReluxContex from './../Hooks/useReluxContex';

function PrivetRoute({children}) {
  const {login} = useReluxContex();


  if(!login){
    return <Navigate to="/login" replace />
  }else{
    return children;
  }
  
  
}

export default PrivetRoute
