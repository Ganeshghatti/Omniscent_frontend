import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import Partners from "./pages/About/Partners";
import Work from "./pages/About/Work";
import Approach from "./pages/About/Approach";
import Form from "./pages/Form/Form";
import Consulting from "./pages/Consulting/Consulting";
import FractionalCFOservices from "./pages/FractionaCFOservices/FractionalCFOservices";
import InvestmentBanking from "./pages/InvestmentBanking/InvestmentBanking";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route path="/about/our-partners" element={<Partners />} />
        <Route path="/about/our-work" element={<Work />} />
        <Route path="/about/our-approach" element={<Approach />} />
        <Route path="/form" element={<Form />} />

        <Route path="/consulting" element={<Consulting />} />
        <Route
          path="/fractional-CFO-services"
          element={<FractionalCFOservices />}
        />
        <Route path="/investment-banking" element={<InvestmentBanking />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
