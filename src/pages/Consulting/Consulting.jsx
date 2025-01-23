import React, { useEffect } from "react";
import Introduction from "./Introduction";
import "./Consulting.scss";
import OperationalExcellence from "./OperationalExcellence";
import StrategicConsulting from "./StrategicConsulting";
import { useLocation } from "react-router-dom";
import {Helmet} from "react-helmet";

export default function Consulting() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div className="flex flex-col items-center" style={{ marginTop: "10vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Consulting | Omniscient Perspectives </title>
        <link
          rel="canonical"
          href="https://omniscientperspectives.com/consulting"
        />
      </Helmet>
      <Introduction />
      <StrategicConsulting />
      <OperationalExcellence />
    </div>
  );
}
