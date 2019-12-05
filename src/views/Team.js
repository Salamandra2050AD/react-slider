import React, { useState } from "react";
import Slider from "../components/Slider/Slider";
import employees from "../employees";
import iconMsg from "../assets/icon_msg.png";

export default function Team() {
  const [visibility, setVisibility] = useState(false);
  const [current, setCurrent] = useState(0);
  const showModal = index => {
    setVisibility(true);
    setCurrent(index);
  };

  const hideModal = () => {
    setVisibility(false);
    document.title = "Meet our team - IndaHash";
  };

  return (
    <>
      {visibility ? (
        <Slider
          handleClose={hideModal}
          current={current}
          employees={employees}
        ></Slider>
      ) : null}

      <div className="container">
        <h1>Meet our team</h1>

        {employees.map((employee, index) => {
          return (
            <div key={index}>
              <img
                className="avatar"
                onClick={() => showModal(index)}
                src={employee.avatar}
                alt=""
              />
              <img className="mail" src={iconMsg} alt="" />
              <p className="name">
                {employee.firstName + " " + employee.lastName}
              </p>
              <p className="job-title">{employee.jobTitle}</p>
              <p className="place">{employee.place}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
