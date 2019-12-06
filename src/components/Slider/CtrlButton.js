import React from "react";

const CtrlButton = ({ style, iconType, action }) => {
  const classNames = ["fa", "fa-2x", `fa-${iconType}`, ...style];
  return (
    <div onClick={action}>
      <i className={classNames.join(" ")} aria-hidden="true"></i>
    </div>
  );
};

export default CtrlButton;
