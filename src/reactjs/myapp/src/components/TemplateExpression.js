const TemplateExpression = () => {
  const name = "Jonas";
  const person = {
    age: 32,
    job: "Programmer",
  };
  return (
    <>
      <h2>Olá {name}, tudo bem?</h2>
      <ul>
        <li>Idade: {person.age} </li>
        <li>Profissão: {person.job}</li>
      </ul>
    </>
  );
};

export default TemplateExpression;
