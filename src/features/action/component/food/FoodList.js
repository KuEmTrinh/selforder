import React, { useEffect, useState } from "react";
import { db } from "../../../../app/firebase";
import "./FoodList.css";
import { useDispatch } from "react-redux";
import { addFoodToCart } from "./foodSlice";
import Toast from "../../../toast/Toast";
export default function FoodList({ categoryId }) {
  const dispatch = useDispatch();
  const [foodList, setFoodList] = useState("");
  const [message, setMessage] = useState("");
  const addToCart = (index) => {
    const sendData = JSON.stringify(foodList[index]);
    dispatch(addFoodToCart(sendData));
    setMessage([...message, "Thêm vào"]);
    // setTimeout(() => {
    //   const popMessage = message.pop();
    //   setMessage(popMessage);
    // }, "1000");
  };
  useEffect(() => {
    const query = db
      .collection("category")
      .doc(categoryId)
      .collection("food")
      .onSnapshot((querySnapshot) => {
        const food = [];
        querySnapshot.docs.map((doc) => {
          food.push({
            id: doc.id,
            vietnamese: doc.data().vietnamese,
            japanese: doc.data().japanese,
            price: doc.data().price,
            imgUrl: doc.data().imgUrl,
            createAt: doc.data().createAt,
          });
        });
        setFoodList(food);
      });
    return query;
  }, [categoryId]);
  return (
    <>
      <Toast message={message}></Toast>
      {foodList ? (
        <div className="foodOrder">
          {foodList.map((el, index) => {
            return (
              <div className="foodOrderItem" key={el.id}>
                <div className="foodOrderImage">
                  <img src={el.imgUrl} />
                </div>
                <div className="foodOrderContent">
                  <div className="foodOrderDetails">
                    <p className="foodOrderVietnamese">{el.vietnamese}</p>
                    <p className="foodOrderJapanese">{el.japanese}</p>
                    <p className="foodOrderPrice">{el.price}</p>
                  </div>
                  <button
                    className="foodOrderButton"
                    onClick={() => {
                      addToCart(index);
                    }}
                  >
                    Thêm
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
