import React from "react";
import Introduction from "./Introduction";
import Description from "./Description";
import "./FractionalCFOservices.scss";
import { Helmet } from "react-helmet";

export default function FractionalCFOservices() {
  return (
    <div className="flex flex-col items-center" style={{ marginTop: "10vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fractional CFO Services | Omniscient Perspectives </title>
        <link
          rel="canonical"
          href="https://omniscientperspectives.com/fractional-CFO-services"
        />
      </Helmet>
      <Introduction />
      <Description />
    </div>
  );
}
