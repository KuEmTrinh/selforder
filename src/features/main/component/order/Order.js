import React, { useState, useEffect } from "react";
import { db } from "../../../../app/firebase";
import { useSelector } from "react-redux";
export default function Order() {
  const userInfo = JSON.parse(useSelector((state) => state.login.data));
  const [order, setOrder] = useState("");
  useEffect(() => {
    const query = db
      .collection("user")
      .doc(userInfo.uid)
      .collection("order")
      .onSnapshot((querySnapshot) => {
        const order = [];
        querySnapshot.docs.map((doc) => {
          order.push({
            id: doc.id,
            vietnamese: doc.data().vietnamese,
            tableName: doc.data().tableName,
            count: doc.data().count,
            createdAt: doc.data().createdAt,
          });
        });
        setOrder(order);
      });
    return query;
  }, []);
  return <div>Order</div>;
}
