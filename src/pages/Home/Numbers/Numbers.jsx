import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Numbers() {
  useEffect(() => {
    gsap.from(".numbers-divs-item", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      stagger: 0.2,
      duration: 0.75,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#numbers",
      },
    });
  }, []);
  return (
    <section
      id="numbers"
      className="flex lg:flex-wrap md:flex-col justify-center gap-8 md:gap-20 w-11/12 "
    >
      <div className="flex flex-col gap-4 items-center w-1/5 lg:w-2/5 md:w-full numbers-divs-item">
        <p className="text-6xl text-navyblue font-bold numbers-title">400 +</p>
        <p className="text-gray2 text-center font-normal text-lg">
          Projects Done
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center w-1/5 lg:w-2/5 md:w-full numbers-divs-item">
        <p className="text-6xl text-navyblue font-bold numbers-title">30 +</p>
        <p className="text-gray2 text-center font-normal text-lg">
          Due-deligence<br/> and Valuation
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center w-1/5 lg:w-2/5 md:w-full numbers-divs-item">
        <p className="text-6xl text-navyblue font-bold numbers-title">30 +</p>
        <p className="text-gray2 text-center font-normal text-lg">
          Fundraising
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center w-1/5 lg:w-2/5 md:w-full numbers-divs-item">
        <p className="text-6xl text-navyblue font-bold numbers-title">5 +</p>
        <p className="text-gray2 text-center font-normal text-lg">Partners </p>
      </div>
    </section>
  );
}
