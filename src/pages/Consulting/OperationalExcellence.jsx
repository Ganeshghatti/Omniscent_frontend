import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function OperationalExcellence() {
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
    <section
      id="operational-excellence"
      style={{ backgroundColor: "#F5F5F3" }}
      className="flex justify-center w-full gap-16 md:flex-col md:items-center md:gap-8"
    >
      <img
        src="./assets/Images/strategic/growth2.jpg"
        className="w-2/5 md:w-full object-cover"
        alt="Omniscient Perspectives operational excellence"
      />
      <div className="flex flex-col w-1/2 md:w-11/12 gap-4 justify-center py-20 md:py-6">
        <h1>Operational Excellence</h1>
        <p className="text-navyblue text-xl md:text-lg font-medium">
          Where Expertise Enables Excellence
        </p>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2 mt-4">
          Our efforts are concentrated on optimizing and improving the
          day-to-day processes and activities within an organization. It
          involves efficiency, productivity, and effectiveness in the execution
          of business operations
        </p>
        <Link
          to="/form"
          className="w-fit hero-button"
        >
          <button
            variant="contained"
            className="bg-navyblue border-1 border-solid border-navyblue text-white rounded flex items-center px-4 py-2"
          >
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
            >
              <path
                d="M8.37509 18.1499C8.37509 17.8419 8.49362 17.5465 8.70459 17.3288C8.91557 17.111 9.20172 16.9886 9.50009 16.9886L24.7888 16.9886L23.3263 15.4906C23.1145 15.2719 22.9955 14.9753 22.9955 14.666C22.9955 14.3568 23.1145 14.0602 23.3263 13.8415C23.5382 13.6228 23.8255 13.5 24.1251 13.5C24.4247 13.5 24.712 13.6228 24.9238 13.8415L28.2988 17.3254C28.4549 17.4887 28.5607 17.6961 28.6027 17.9214C28.6448 18.1466 28.6212 18.3797 28.5351 18.5912C28.4507 18.8033 28.3074 18.9848 28.1232 19.1129C27.939 19.2411 27.7222 19.3101 27.5001 19.3112L9.50009 19.3112C9.20172 19.3112 8.91557 19.1889 8.70459 18.9711C8.49362 18.7533 8.37509 18.4579 8.37509 18.1499Z"
                fill="white"
              />
              <path
                d="M22.9998 21.6337C22.9989 21.4809 23.0273 21.3294 23.0833 21.1879C23.1393 21.0464 23.2218 20.9177 23.326 20.8092L26.701 17.3254C26.9129 17.1067 27.2002 16.9838 27.4998 16.9838C27.6481 16.9838 27.795 17.014 27.9321 17.0726C28.0691 17.1312 28.1936 17.2171 28.2985 17.3254C28.4034 17.4336 28.4866 17.5622 28.5434 17.7036C28.6002 17.8451 28.6294 17.9967 28.6294 18.1499C28.6294 18.4591 28.5104 18.7557 28.2985 18.9744L24.9235 22.4582C24.819 22.5671 24.6945 22.6535 24.5574 22.7124C24.4203 22.7714 24.2733 22.8018 24.1248 22.8018C23.9763 22.8018 23.8292 22.7714 23.6921 22.7124C23.5551 22.6535 23.4306 22.5671 23.326 22.4582C23.2218 22.3497 23.1393 22.2211 23.0833 22.0796C23.0273 21.9381 22.9989 21.7866 22.9998 21.6337Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2 mt-4">
          Our Coverage involves:-
        </p>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Human Capital including Leadership Development{" "}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Internal Controls and Process Improvement{" "}
          </p>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Process optimization and Supply Chain management{" "}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Risk Management and Control{" "}
          </p>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Digital Transformation{" "}
          </p>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Sustainability Consulting including ESG responsibilities{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
