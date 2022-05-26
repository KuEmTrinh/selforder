import React from "react";
import Food from "./food/Food";
import { useSelector } from "react-redux";
import Cart from "./cart/Cart";
export default function Main({ userId }) {
  const componentNav = useSelector((state) => state.navigation.data);
  return (
    <>
      {componentNav === "List" ? <Food userId={userId}></Food> : ""}
      {componentNav === "Dashboard" ? <Cart userId={userId}></Cart> : ""}
    </>
  );
}
