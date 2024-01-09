import React from "react";
import Introduction from "./Introduction";
import "./Consulting.scss"
import OperationalExcellence from "./OperationalExcellence";
import StrategicConsulting from "./StrategicConsulting";

export default function Consulting() {
  return (
    <div className="flex flex-col items-center" style={{marginTop:"10vh"}}>
      <Introduction />
      <StrategicConsulting />
      <OperationalExcellence />
    </div>
  );
}
