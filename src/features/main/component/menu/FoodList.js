import React from "react";
import "./Food.css";
import { db } from "../../../../app/firebase";
import { useEffect } from "react";
export default function FoodList({ categoryId }) {
    useEffect(()=>{
        // db.collection("category").doc(categoryId)
    },[])
  return (
    <div className="mt-1">
      <div className="food">
        <div className="foodImage">
          <img src="https://taporder.host/public/uploads/food/C85uXcVF6jrsHjiphRPzd1Wi8i6mvPbwovYzaDhM.jpeg" />
        </div>
        <div className="foodContent">
          <div className="foodDetail">
            <p className="foodVietnamese">ABC</p>
            <p className="foodJapanese">DEF</p>
            <p className="foodPrice">123</p>
          </div>
          <button className="foodButton">Edit</button>
        </div>
      </div>
    </div>
  );
}
