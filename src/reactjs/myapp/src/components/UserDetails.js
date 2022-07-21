// Criar um array de objetos que representam pessoas, com nome, idade e profissão, pelo menos 3 itens
// No componente UserDetails, as informações devem ser exibidas com condicional se o usuário pode tirar carteira de habilitação ou não

const UserDetails = () => {
  const pessoas = [
    { id: 1, name: "Hugo", age: 13, job: "Estudante" },
    { id: 2, name: "Marcela", age: 18, job: "Advogada" },
    { id: 3, name: "Gustavo", age: 21, job: "Arquiteto" },
    { id: 4, name: "Janaina", age: 16, job: "Estagiária" },
  ];

  return (
    <>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            {pessoa.name} - {pessoa.age} - {pessoa.job}
            {pessoa.age >= 18 && " - Pode tirar a carteira de motorista"}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserDetails;
