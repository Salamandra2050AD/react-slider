import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ employee }) => {
  // const bgImg = {
  // backgroundImage: `url(${employee.bgImage})`,
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "50% 60%"
  // };
  return (
    <div className={styles.slide}>
      <div className={styles.slideOverlay}>
        <h3>{employee.jobTitle}</h3>
        <h2>{employee.firstName + " " + employee.lastName}</h2>
      </div>
    </div>
  );
};

export default Slide;
