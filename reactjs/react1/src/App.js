import React, { useState, useEffect } from "react";
// Importando CSS
import "./App.css";
// Importando styled-components
import styled from "styled-components";

// Estilizando component
const GreenDiv = styled.div`
  background-color: green;
`;

const Title = styled.h1`
  color: #ff00ff;
  font-size: 50px;
`;

// Estilizando component baseado em props
const Button = styled.button`
  background-color: ${(props) => props.color};
  font-size: 15px;
  padding: 20px;
`;

// Estilizando component baseado em props usando condições
const Button1 = styled.button`
  background-color: ${(props) => (props.active == true ? "#e1e1e1" : "#ccc")};
  color: ${(props) => (props.active == true ? "#000" : "#f1f1f1")};
`;

// Herdando Button
const SmallButton = styled(Button)`
  font-size: 14px;
  padding: 10px;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #000;
`;

// class App extends React.Component {
//   render() {
//     return <h1>Testando 1, 2, 3...</h1>;
//   }
// }

function formatName(user) {
  return `${user.name} ${user.surname}`;
}

// Definindo componentes
function BemVindo(props) {
  return (
    <>
      <h1>
        Olá, {props.name}! Você tem {props.age} anos de idade!
      </h1>
    </>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.user.avatarURL} alt={props.user.name} />
      <br />
      <span style={{ backgroundColor: "#ff00ff", padding: "0 10px" }}>{props.user.name}</span>
    </div>
  );
}

function App() {
  let user = {
    name: "Joelson",
    surname: "Lima",
    avatarURL: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  };
  let age = 21;
  let googleImg = "https://www.google.com.br/google.jpg";

  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleMailInput = (e) => {
    setMail(e.target.value);
  };

  const handlePassInput = (e) => {
    setPassword(e.target.value);
  };

  const loginShow = () => {
    alert(`${mail} - ${password}`);
  };

  return (
    <>
      {/* Usando props */}
      <h1>
        Meu nome é {formatName(user)} e eu tenho {age} anos
      </h1>
      <img src={googleImg} />
      {/* Usando componentes */}
      <BemVindo name="José" age="300" />
      <BemVindo name="Maria" age="45" />
      <Avatar user={user} />
      <GreenDiv>
        <Title>Titulo bem legal</Title>
        <Button color="#ff0000">Clique aqui</Button>
        <Button color="#ff00ff">Clique aqui</Button>
        <SmallButton>Clique aqui</SmallButton>
      </GreenDiv>
      <Button1 active={true}>Botão ativo</Button1>
      <Button1 active={false}>Botão inativo</Button1>

      {/* useState */}
      <div>{counter} vezes</div>
      <button style={{ marginBottom: "100px", display: "block" }} onClick={addCounter}>
        Clique para aumentar
      </button>

      {/* useState em login */}
      <Input type="email" value={mail} onChange={handleMailInput} placeholder="Digite um email" />
      <Input type="password" value={password} onChange={handlePassInput} placeholder="Digite sua senha" />
      <button onClick={loginShow}>Mostrar</button>

      {/* Condicional de exibição */}
      {mail.length > 0 && (
        <p>
          {mail.length} caractere{mail.length == 1 ? "" : "s"}
        </p>
      )}
      {isLogged ? <button>Sair</button> : <button>Fazer login</button>}
    </>
  );
}

// let App = ()=>{
//   return <h1>Testando 7,8,9...</h1>
// }

export default App;
