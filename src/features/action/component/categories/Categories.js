import React, { useState } from "react";
import "./Categories.css";
import FoodList from "../food/FoodList";
export default function Categories({ data }) {
  const [categoryId, setCategoryId] = useState("");
  const [indexCategory, setIndexCategory] = useState(0);
  return (
    <>
      <div className="categories categoryBox">
        {data.map((element, index) => {
          return (
            <span
              className={
                indexCategory == index
                  ? "categoryLabel active"
                  : "categoryLabel"
              }
              key={element.id}
              onClick={() => {
                setCategoryId(element.id);
                setIndexCategory(index);
              }}
            >
              {element.name}
            </span>
          );
        })}
      </div>
      {categoryId ? <FoodList categoryId={categoryId}></FoodList> : ""}
    </>
  );
}
