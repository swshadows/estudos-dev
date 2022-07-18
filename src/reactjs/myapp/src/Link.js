import React from "react";

const Link = () => {
  const name = "Sou um link";
  return (
    <a href="www.google.com.br" style={{ fontSize: "40px" }} className="link">
      {name}
    </a>
  );
};

export default Link;
