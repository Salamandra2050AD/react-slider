import React from "react";

const ArrowLeft = props => {
  return (
    <div className="backArrow" onClick={props.prev}>
      <i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default ArrowLeft;
