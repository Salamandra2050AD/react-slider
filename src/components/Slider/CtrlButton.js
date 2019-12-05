import React from "react";

const CtrlButton = ({ type, action }) => {
  const classNames = ["fa", "fa-2x", `fa-${type}`, type];
  return (
    <div onClick={action}>
      <i className={classNames.join(" ")} aria-hidden="true"></i>
    </div>
  );
};

export default CtrlButton;
