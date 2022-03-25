<?php
require 'imports/link_header.php';

// Banco de dados
require 'database_tests/config.php';
require 'database_tests/models/UsuarioDaoMySql.php';

$usuarioDao = new UsuarioDaoMysql($pdo);
$lista = $usuarioDao->findAll();

// $sql = $pdo->query('SELECT * FROM usuarios'); Atribui o comando a uma variavel
// echo "Total: " . $sql->rowCount() . "<br/>"; Conta todas as rows da tabela
// $dados = $sql->fetchAll(PDO::FETCH_ASSOC); Pega todos os dados em um array

// echo "<pre>";
// print_r($dados); // Mostra os dados
// echo "</pre>";

?>
<style>
    .tablebtn,
    .tablebtn:visited,
    .adduser {
        color: #00ff00;
        background-color: #000;
        border: 1px solid #fff;
        text-decoration: none;
        background: #000;
    }

    .adduser {
        border-radius: 10px;
        padding: 10px;
    }

    table {
        margin: 100px 0;
    }
</style>
<h1>Testes com banco de dados utilizando PhpMyAdmin</h1>
<p>Banco de dados em anexo para importação: <a href="database_tests/test.sql">Clique aqui</a></p>
<a class="adduser" href="database_tests/adicionar.php">Adicionar usuário</a>

<table border="1" width="100%">
    <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Ações</th>
    </tr>
    <?php foreach ($lista as $usuario) : ?>
        <tr>
            <td><?= $usuario->getId(); ?></td>
            <td><?= $usuario->getNome(); ?></td>
            <td><?= $usuario->getEmail(); ?></td>
            <td>
                <a class="tablebtn" href="database_tests/editar.php?id=<?= $usuario->getId() ?>"> [ Editar ] </a>
                <a class="tablebtn" href="database_tests/delete_usuario.php?id=<?= $usuario->getId() ?>" onclick="return confirm('Tem certeza que deseja excluir?')"> [ Excluir ] </a>
            </td>
        </tr>
    <?php endforeach; ?>
</table>