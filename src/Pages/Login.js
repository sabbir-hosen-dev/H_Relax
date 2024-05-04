import { FcGoogle } from "react-icons/fc";
import React from "react";
import Navber from "../Components/Navber/Navber";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/Fire";
import useReluxContex from "./../Hooks/useReluxContex";

function Login() {
  const { setLogin, addUser } = useReluxContex();

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        const { photoURL, displayName, email } = res.user;
        setLogin(true);
        addUser({
          name: displayName,
          email: email,
          photo: photoURL,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="login-nav">
        <Navber />
      </div>
      <div className="sign-in">
        <button onClick={signInGoogle}>
          <FcGoogle className="google" /> Sign in with google
        </button>
      </div>
    </div>
  );
}

export default Login;
