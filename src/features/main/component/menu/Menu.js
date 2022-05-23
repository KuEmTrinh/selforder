import React from "react";
import NewCategory from "./NewCategory";
import Categories from "./Categories";
import Food from "./Food";
import { Routes, Route } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <NewCategory></NewCategory>
      <Categories></Categories>
    </div>
  );
}
