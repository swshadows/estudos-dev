const EventTest = () => {
  const renderSomething = (val) => {
    if (val) return <h1>Retornando val true</h1>;
    else return <h1>Retornando val false</h1>;
  };

  const handleClick = (e) => {
    console.log(e);
    alert("Botão clicado");
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      {renderSomething(true)}
      {renderSomething(false)}
    </>
  );
};

export default EventTest;
