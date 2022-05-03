import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ListadoProducts from "./ListadoProducts.js";

export default function Ruts() {
  const [merca, setMerca] = useState([]);

  let Products = async () => {
    const res = await axios.get(
      "https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid"
    );
    console.log(res.data.data);
    setMerca(res.data.data);
  };
  useEffect(() => {
    Products();
  }, []);
  return (
    <div>
      {merca.map((x) => (
        <ListadoProducts {...x}></ListadoProducts>
      ))}
    </div>
  );
}
