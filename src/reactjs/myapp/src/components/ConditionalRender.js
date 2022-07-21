const ConditionalRender = () => {
  const x = false;
  const name = "Jonas";
  return (
    <>
      <h1>Será exibido?</h1>
      {x && <p>O valor de X é true</p>}
      {!x && <p>O valor de X é false</p>}
      {name ? <p>O nome é {name}</p> : <p>Nome não encontrado</p>}
    </>
  );
};

export default ConditionalRender;
