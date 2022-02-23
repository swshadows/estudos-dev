import React from "react";
import "./App.css";

// class App extends React.Component {
//   render() {
//     return <h1>Testando 1, 2, 3...</h1>;
//   }
// }

function formatName(user) {
  return `${user.name} ${user.surname}`;
}

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

  return (
    <>
      <h1>
        Meu nome é {formatName(user)} e eu tenho {age} anos
      </h1>
      <img src={googleImg} />
      <BemVindo name="José" age="300" />
      <BemVindo name="Maria" age="45" />
      <Avatar user={user} />
    </>
  );
}

// let App = ()=>{
//   return <h1>Testando 7,8,9...</h1>
// }

export default App;
