import React, { useState } from "react";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Modal from "../../../main/component/menu/Modal";
import { db } from "../../../../app/firebase";
export default function OrderComplete({ order, userInfo }) {
  const [completeToggle, setCompleteToggle] = useState(false);
  const openCompleteBox = () => {
    setCompleteToggle(true);
  };
  const changeStatus = (id) => {
    const query = db
      .collection("user")
      .doc(userInfo.uid)
      .collection("order")
      .doc(id)
      .update({
        status: 1,
      });
  };
  return (
    <>
      <Modal
        show={completeToggle}
        onClose={() => {
          setCompleteToggle(false);
        }}
      >
        <p className="orderCompleteTitle">Danh sách hoàn thành</p>

        <div className="orderCompleteBox">
          {order.map((el, index) => {
            return (
              <>
                {el.status == 2 ? (
                  <div
                    className="orderItem orderItemGreenBackground greenBorder"
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
                          el.count > 1
                            ? "foodCount foodCountSpecial foodCountSpecialGreen"
                            : "foodCount"
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
          })}
        </div>
      </Modal>
      <div className="completeBox" onClick={openCompleteBox}>
        <LibraryAddCheckIcon color="success"></LibraryAddCheckIcon>
      </div>
    </>
  );
}
