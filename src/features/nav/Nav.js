import React from "react";
import "./Nav.css";
import Info from "./component/Info";
import Link from "./component/Link";
export default function Nav() {
  return (
    <div className="navigation w-20per">
      <Info></Info>
      <Link></Link>
    </div>
  );
}
