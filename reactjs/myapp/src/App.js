// Importando React
import React from "react";
// Definindo tag por constante
const titulo = <h1>Sou um título</h1>;
// Definindo função externa
const mostrarNome = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`;
};
// Definindo estilo externo
const styleP = {
  color: "pink",
};

const App = () => {
  const nome = "José";
  const random = Math.random();
  const ativo = false;
  const carro = {
    marca: "Ford",
    modelo: "Caminhonete",
    placa: "YYY-1234",
  };

  return (
    <React.Fragment>
      {titulo}
      <h2 style={styleP}>{mostrarNome("Mateus", "Barroso")}</h2>
      <a className={ativo ? "ativo" : "inativo"} href="www.google.com.br" title="Site do google">
        Google.com
      </a>
      <label htmlFor="nome">Nome: </label>
      <input type="text" id="nome" placeholder="Digite seu nome" />
      <p>
        {nome} - Random: {random * 100}
      </p>
      <p>
        {carro.marca} - {carro.modelo} - {carro.placa}
      </p>
    </React.Fragment>
  );
};

export default App;
