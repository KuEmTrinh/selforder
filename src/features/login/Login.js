import React from "react";
import "./Login.css";
import { authentication } from "../../app/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import { firebase } from "../../app/firebase";
import { useDispatch } from "react-redux";
import { setUserInfomation } from "./loginSlice";
import Home from "../home/Home";
export default function Login() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userInfomation = JSON.stringify(user);
        dispatch(setUserInfomation(userInfomation));
        return setIsUserSignedIn(true);
      }
      return setIsUserSignedIn(false);
    });
  }, []);
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log("Login Success");
      })
      .catch((error) => {
        console.log("Login Failed");
      });
  };
  return (
    <>
      {isUserSignedIn ? (
        <Home></Home>
      ) : (
        <div className="center">
          <button
            className="button button-m"
            onClick={() => {
              loginWithGoogle();
            }}
          >
            Login with Google
          </button>
        </div>
      )}
    </>
  );
}
