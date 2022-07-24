import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <>
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome: </label>
        <input type="text" id="name" onChange={handleName} />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Form;
