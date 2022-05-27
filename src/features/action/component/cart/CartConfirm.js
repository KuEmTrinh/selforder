import React from "react";
import { db } from "../../../../app/firebase";
import { firebase } from "../../../../app/firebase";
import { useDispatch } from "react-redux";
import { clearCart } from "../food/foodSlice";
export default function CartConfirm({ cartData, tableInfo, tableId }) {
  const dispatch = useDispatch();
  const createOrder = (el) => {
    if (el.newPrice) {
    } else {
      el.newPrice = el.price;
    }
    db.collection("table").doc(tableId).collection("order").add({
      vietnamese: el.vietnamese,
      japanese: el.japanese,
      price: el.newPrice,
      count: el.count,
      status: 1,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(clearCart());
  };
  const orderConfirm = () => {
    console.log(tableId);
    cartData.map((el) => {
      createOrder(el);
    });
  };
  return (
    <div className="cartConfirm">
      <button className="cartConfirmButton" onClick={orderConfirm}>
        Xác nhận
      </button>
    </div>
  );
}
