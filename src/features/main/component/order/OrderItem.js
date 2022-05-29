import React from "react";
import { db } from "../../../../app/firebase";
export default function OrderItem({ el, index, userInfo }) {
  const changeStatus = (id) => {
    const query = db
      .collection("user")
      .doc(userInfo.uid)
      .collection("order")
      .doc(id)
      .update({
        status: 2,
      });
  };
  return (
    <>
      {el.status == 1 ? (
        <div
          className="orderItem normalBorder"
          key={index}
          onClick={() => {
            changeStatus(el.id);
          }}
        >
          <p className="tableName">{el.tableName}</p>
          <div className="wrapFlex">
            <p className="foodName">{el.vietnamese}</p>
            <p
              className={
                el.count > 1 ? "foodCount foodCountSpecial" : "foodCount"
              }
            >
              {el.count}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
