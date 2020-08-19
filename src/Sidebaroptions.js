import React from "react";
import "./Sidebaroption.css";

function Sidebaroptions({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebar_icon"></Icon>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default Sidebaroptions;
