// Para ver os feitos nos módulos, comente e descomente as tags JSX
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ExercicioUm from "./ExercicioUm";
import { Form } from "./Form";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ExercicioUm /> */}
    <Form />
  </React.StrictMode>,
  document.getElementById("root")
);
