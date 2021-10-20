import React from "react";

function Spinner(props) {
  return (
    <i
      className={" fa fa-spinner fa-spin mx-auto " + props.size}
      style={{ color: props.color }}
    />
  );
}

export default Spinner;
