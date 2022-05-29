import React, { useState, useEffect } from "react";
import { db } from "../../../../app/firebase";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import "./Order.css";
import { firebase } from "../../../../app/firebase";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
export default function Order() {
  const userInfo = JSON.parse(useSelector((state) => state.login.data));
  const [order, setOrder] = useState("");
  useEffect(() => {
    const query = db
      .collection("user")
      .doc(userInfo.uid)
      .collection("order")
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
        const order = [];
        querySnapshot.docs.map((doc) => {
          order.push({
            id: doc.id,
            vietnamese: doc.data().vietnamese,
            tableName: doc.data().tableName,
            count: doc.data().count,
            status: doc.data().status,
            createdAt: doc.data().createdAt,
          });
        });
        setOrder(order);
      });
    return query;
  }, []);
  return (
    <>
      {order ? (
        <div className="orderList">
          <div className="completeBox">
            <LibraryAddCheckIcon></LibraryAddCheckIcon>
          </div>
          {order.map((el, index) => {
            return <OrderItem el={el} key={index} userInfo={userInfo} />;
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
