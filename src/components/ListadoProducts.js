import React from "react";

export default function ListadoProducts(props) {
  const { name, image } = props;
  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt="" />
    </div>
  );
}
