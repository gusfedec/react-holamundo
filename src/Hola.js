import React from "react";

const Hola = props => {
  console.log(props);
  const { que } = props;
  return `Hola ${que}!!!`;
};

export default Hola;
