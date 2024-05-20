import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const storeAuthToken = () => {
  auth.currentUser
    .getIdToken(true)
    .then(function (idToken) {
      localStorage.setItem("token",idToken)
    })
    .catch(function (error) {});
};