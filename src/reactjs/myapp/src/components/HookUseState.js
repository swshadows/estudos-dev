import { useState } from "react";

const HookUseState = () => {
  let [value, setValue] = useState(0);
  return (
    <>
      <p>Valor: {value}</p>
      <button onClick={() => setValue(value + 1)}>Adicionar 1</button>
    </>
  );
};

export default HookUseState;
