import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "../nav/Nav";
import "./Home.css";
export default function Home() {
  const userInfomation = JSON.parse(useSelector((state) => state.login.data));

  useEffect(() => {
    console.log(userInfomation.displayName);
  }, []);
  return (
    <div className="home flex flex-between">
      <Nav></Nav>
      <div className="main w-80per"></div>
    </div>
  );
}
