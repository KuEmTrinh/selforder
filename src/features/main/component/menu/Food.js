import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NewFood from "./NewFood";
export default function Food() {
  const params = useParams();
  return (
    <div>
      <Link to="/menu" className="navlink">
        <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
      </Link>
      <NewFood></NewFood>
      <p>{params?.id}</p>
    </div>
  );
}
