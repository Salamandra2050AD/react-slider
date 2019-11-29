import React from "react";

const ArrowRight = props => {
  return (
    <div className="nextArrow" onClick={props.next}>
      <i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default ArrowRight;
