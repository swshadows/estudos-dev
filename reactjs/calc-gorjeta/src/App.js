import React, { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  let tipPerc = bill * (tip / 100);
  let result = parseFloat(bill) + parseFloat(tipPerc);

  return (
    <div>
      <h1>Calculadora de Gorjeta</h1>
      <p>Quanto deu a conta?</p>
      <input type="number" onChange={(e) => setBill(e.target.value)} />
      <p>Qual a porcentagem de gorjeta?</p>
      <input type="number" onChange={(e) => setTip(e.target.value)} />
      <hr />
      {bill != 0 && (
        <>
          <p>Subtotal: R$ {bill}</p>
          <p>
            Gorjeta ({tip}%): R$ {tipPerc}
          </p>
          <p style={{ fontWeight: "800" }}>Total: R$ {result} </p>
        </>
      )}
    </div>
  );
}

export default App;
