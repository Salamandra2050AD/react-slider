import React from "react";

const CtrlButton = ({ type, action }) => {
  return (
    <div className={`${type}`} onClick={action}>
      <i className={`fa fa-${type} fa-2x`} aria-hidden="true"></i>
    </div>
  );
};

export default CtrlButton;
