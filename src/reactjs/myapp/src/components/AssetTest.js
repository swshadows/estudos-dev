import React from "react";
import City from "../assets/city.jpg";

const AssetTest = () => {
  return (
    <>
      <h1>Imagem em public</h1>
      <img src="/img1.jpg" alt="Paisagem" />
      <h1>Imagem em src</h1>
      <img src={City} alt="Cidade" />
    </>
  );
};

export default AssetTest;
