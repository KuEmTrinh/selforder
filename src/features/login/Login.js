import React from "react";
import "./Login.css";
import { authentication } from "../../app/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import { firebase } from "../../app/firebase";
import { useDispatch } from "react-redux";
import { setUserInfomation } from "./loginSlice";
import Home from "../home/Home";
import { db } from "../../app/firebase";
import { Dns } from "@mui/icons-material";
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
  const checkUser = (user) => {
    const userId = user.uid;
    console.log(userId);
    let checkUser = false;
    const fetchUser = async () => {
      const data = await db
        .collection("user")
        .get()
        .then((snapshot) => {
          snapshot.docs.map((el) => {
            console.log(el.id);
            if (el.id == userId) {
              console.log("tim thay");
              checkUser = true;
            }
          });
        });
    };
    console.log(checkUser);
    if (checkUser) {
      console.log("User data created");
    } else {
      db.collection("user").doc(userId).set({
        name: user.displayName,
      });
    }
    fetchUser();
  };
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        checkUser(res.user);
        console.log("Da dang nhap");
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
