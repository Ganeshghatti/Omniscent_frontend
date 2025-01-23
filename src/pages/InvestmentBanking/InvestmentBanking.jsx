import React from "react";
import "./InvestmentBanking.scss";
import Introduction from "./Introduction";
import Description from "./Description";
import { Helmet } from "react-helmet";

export default function InvestmentBanking() {
  return (
    <div className="flex flex-col items-center" style={{ marginTop: "10vh" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Investment Banking | Omniscient Perspectives </title>
        <link
          rel="canonical"
          href="https://omniscientperspectives.com/investment-banking"
        />
      </Helmet>
      <Introduction />
      <Description />
    </div>
  );
}
