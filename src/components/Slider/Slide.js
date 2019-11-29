import React from "react";

const Slide = ({ employee }) => {
  //styles left to simply uncomment in case you want unique background image to each slide
  // const styles = {
  // backgroundImage: `url(${employee.bgImage})`,
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "50% 60%"
  // };
  return (
    <div className="slide">
      <div className="slide-overlay">
        <h3>{employee.jobTitle}</h3>
        <h2>{employee.firstName + " " + employee.lastName}</h2>
      </div>
    </div>
  );
};

export default Slide;
