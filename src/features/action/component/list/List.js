import React, { useEffect, useState } from "react";
import "./List.css";
import { db } from "../../../../app/firebase";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CancelIcon from '@mui/icons-material/Cancel';
import { green } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
export default function List({ userId, tableId }) {
  const [listData, setListData] = useState("");
  useEffect(() => {
    const query = db
      .collection("user")
      .doc(userId)
      .collection("order")
      .where("tableId", "==", tableId)
      .onSnapshot((querySnapshot) => {
        const data = [];
        querySnapshot.docs.map((doc) => {
          data.push({
            id: doc.id,
            vietnamese: doc.data().vietnamese,
            japanese: doc.data().japanese,
            count: doc.data().count,
            status: doc.data().status,
            imgUrl: doc.data().imgUrl,
            price: doc.data().price,
            newPrice: doc.data().newPrice,
          });
        });
        console.log(data);
        setListData(data);
      });
    return query;
  }, []);
  return (
    <div className="cart">
      {listData ? (
        <>
          {listData.map((el, index) => {
            return (
              <div className="cartItem" key={index}>
                <div className="cartImage">
                  <img src={el.imgUrl} />
                </div>
                <div className="cartItemRight">
                  <div className="cartInfomation">
                    <p className="cartVietnamese">{el.vietnamese}</p>
                    <p className="cartJapanese">{el.japanese}</p>
                    <p className="cartPrice">{el.newPrice} ({el.price} x {el.count})</p>
                  </div>
                  <div>
                      <p>{el.status == 1 ? <HourglassTopIcon color="action"/>: ""}</p>
                      <p>{el.status == 2 ? <CheckCircleIcon sx={{ color: green[500] }}/>: ""}</p>
                      <p>{el.status == 3 ? <CancelIcon sx={{ color: pink[500] }}/>: ""}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
