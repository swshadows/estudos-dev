// Criar um componente com estilos scoped com detalhes de 3 carros

import styles from "./ChallengeCSS.module.css";

const ChallengeCSS = ({ nome, ano, km }) => {
  return (
    <div className={styles.card}>
      <ul>
        <li>Nome: {nome}</li>
        <li>Ano: {ano}</li>
        <li>Quilometragem: {km}</li>
      </ul>
    </div>
  );
};

export default ChallengeCSS;
