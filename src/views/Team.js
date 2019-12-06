import React, { useState } from "react";
import styles from "./Team.module.css";
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

      <div className={styles.container}>
        <h1>Meet our team</h1>

        {employees.map((employee, index) => {
          return (
            <div key={index}>
              <img
                className={styles.avatar}
                onClick={() => showModal(index)}
                src={employee.avatar}
                alt=""
              />
              <img className={styles.mail} src={iconMsg} alt="" />
              <p className={styles.name}>
                {employee.firstName + " " + employee.lastName}
              </p>
              <p className={styles.jobTitle}>{employee.jobTitle}</p>
              <p className={styles.place}>{employee.place}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
