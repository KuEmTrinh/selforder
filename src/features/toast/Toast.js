import React, { useEffect, useState } from "react";
import "./Toast.css";
export default function Toast(pros) {
  let data = pros.message;
  console.log(data);
  useEffect(() => {
    setTimeout(() => {
      console.log(data);
      data.pop();
    }, 1000);
  }, [data]);
  return (
    <>
      {data ? (
        <div className="messageBox">
          {data.map((el, index) => {
            return (
              <div key={index} className="message green">
                {el}
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
