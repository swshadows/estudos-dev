// Mostrar os dados da aplicação sem usar css externo, mudar as cores de acordo com o ativo e se o gasto for maior que 10000, mostrar uma mensagem

import React from "react";

const pessoa1 = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const pessoa2 = {
  cliente: "Marcos",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const ExercOne = () => {
  const dados = pessoa2;
  const total = dados.compras.map((item) => Number(item.preco.replace("R$ ", ""))).reduce((a, b) => a + b);

  return (
    <div>
      <p>{dados.cliente}</p>
      <p>{dados.idade}</p>
      <p>
        Situação: <span style={{ color: dados.ativa ? "green" : "red" }}>{dados.ativa ? "Ativa" : "Inativa"}</span>
      </p>
      <p>Total gasto: {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};

export default ExercOne;
