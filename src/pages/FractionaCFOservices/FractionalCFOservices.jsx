import React from "react";
import Introduction from "./Introduction";
import Description from "./Description";
import "./FractionalCFOservices.scss";

export default function FractionalCFOservices() {
  return (
    <div className="flex flex-col items-center" style={{marginTop:"10vh"}}>
      <Introduction />
      <Description />
    </div>
  );
}
