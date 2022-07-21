// Criar um componente Challenge que imprime dois valores numéricos
// e um botão que imprime a soma desses valores quando clicado

const Challenge = () => {
  const val1 = 15;
  const val2 = 20;
  const handleSoma = () => {
    alert(val1 + val2);
  };
  return (
    <>
      <p>Valor 1: {val1}</p>
      <p>Valor 2: {val2}</p>
      <button onClick={handleSoma}>Somar valores</button>
    </>
  );
};

export default Challenge;
