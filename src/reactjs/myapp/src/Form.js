import React from "react";

const Input = (props) => {
  return <input type={props.type} />;
};

const Button = (props) => {
  return <button>{props.innerText}</button>;
};

export const Form = () => {
  return (
    <form>
      <label>
        Nome: <Input type="text" />
      </label>
      <label>
        Senha: <Input type="password" />
      </label>
      <Button innerText="Texto inserido com props" />
    </form>
  );
};
