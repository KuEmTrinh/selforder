import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Cart() {
  const data = useSelector((state) => state.food.data);
  const [cartData, setCartData] = useState("");
  useEffect(() => {
    setCartData(data);
  }, []);
  // console.log(data);
  const countPlus = (index) => {
    const cartDataCopy = JSON.parse(JSON.stringify(cartData));
    cartDataCopy[index].count += 1;
    cartDataCopy[index].newPrice =
      cartData[index].price * cartDataCopy[index].count;
    setCartData(cartDataCopy);
  };
  const countMinus = (index) => {
    const cartDataCopy = JSON.parse(JSON.stringify(cartData));
    cartDataCopy[index].count -= 1;
    cartDataCopy[index].newPrice =
      cartData[index].price * cartDataCopy[index].count;
    setCartData(cartDataCopy);
  };

  return (
    <>
      {cartData ? (
        <>
          <p className="componentTitle cartTitle">Danh sách Order</p>
          {cartData.map((el, index) => {
            return (
              <div className="cartItem" key={index}>
                <div className="cartImage">
                  <img src={el.imgUrl} />
                </div>
                <div className="cartItemRight">
                  <div className="cartInfomation">
                    <p className="cartVietnamese">{el.vietnamese}</p>
                    <p className="cartJapanese">{el.japanese}</p>
                    <p className="cartPrice">
                      {el.newPrice ? el.newPrice : el.price}
                    </p>
                  </div>
                  <div className="cartCount flex align-center">
                    {el.count > 1 ? (
                      <div
                        className="cartCountMinus"
                        onClick={() => {
                          countMinus(index);
                        }}
                      >
                        <RemoveIcon></RemoveIcon>
                      </div>
                    ) : (
                      ""
                    )}

                    <p className="cartCountNumber">{el.count}</p>
                    <div
                      className="cartCountPlus"
                      onClick={() => {
                        countPlus(index);
                      }}
                    >
                      <AddIcon></AddIcon>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}