import React from "react";

const Close = props => {
  return (
    <div className="close-button" onClick={props.close}>
      <i class="fa fa-times fa-2x" aria-hidden="true"></i>
    </div>
  );
};

export default Close;
