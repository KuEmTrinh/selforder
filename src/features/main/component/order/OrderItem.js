import React, { useState } from "react";
import { db } from "../../../../app/firebase";
import { useLongPress } from "use-long-press";
import Modal from "../../../main/component/menu/Modal";
export default function OrderItem({ el, index, userInfo }) {
  const [deleteItem, setDeleteItem] = useState(true);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState("");
  const changeStatus = (id) => {
    if (deleteItem) {
      const query = db
        .collection("user")
        .doc(userInfo.uid)
        .collection("order")
        .doc(id)
        .update({
          status: 2,
        });
    }
  };
  const bind = useLongPress(() => {
    console.log(deleteItemId)
    setDeleteItem(false);
    console.log("bat xoa item");
    setDeleteToggle(true);
    setTimeout(() => {
      setDeleteItem(true);
      console.log("tat xoa item");
    }, 1000);
  });
  return (
    <>
      <Modal
        show={deleteToggle}
        onClose={() => {
          setDeleteToggle(false);
          setDeleteItem(true);
        }}
      ></Modal>
      {el.status == 1 ? (
        <div
          {...bind(console.log(el.id))}
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
