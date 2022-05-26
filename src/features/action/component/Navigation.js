import React, { useState } from "react";
import "./Navigation.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import GridViewIcon from "@mui/icons-material/GridView";
import PaymentsIcon from "@mui/icons-material/Payments";
import LoginIcon from "@mui/icons-material/Login";
import { setNavigation } from "./navigationSlice";
import { useDispatch } from "react-redux";
const theme = createTheme({
  palette: {
    grey: {
      // This is green.A700 as hex.
      main: "#A6A6A6",
    },
    black: {
      // This is green.A700 as hex.
      main: "#000",
    },
  },
});
export default function Navigation() {
  const [activeComponent, setActiveComponent] = useState("List");
  const showComponent = (string) => {
    // console.log(string);
    setActiveComponent(string);
    dispatch(setNavigation(string));
  };
  const dispatch = useDispatch();
  return (
    <div className="navigationMenu">
      <div className="iconList">
        <ThemeProvider theme={theme}>
          <div
            onClick={() => {
              showComponent("List");
            }}
          >
            <RestaurantMenuIcon
              color={activeComponent == "List" ? "black" : "grey"}
            ></RestaurantMenuIcon>
          </div>
          <div
            onClick={() => {
              showComponent("Dashboard");
            }}
          >
            <GridViewIcon
              color={activeComponent == "Dashboard" ? "black" : "grey"}
            ></GridViewIcon>
          </div>
          <div
            onClick={() => {
              showComponent("Payment");
            }}
          >
            <PaymentsIcon
              color={activeComponent == "Payment" ? "black" : "grey"}
            ></PaymentsIcon>
          </div>
          <div
            onClick={() => {
              showComponent("Login");
            }}
          >
            <LoginIcon
              color={activeComponent == "Login" ? "black" : "grey"}
            ></LoginIcon>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
