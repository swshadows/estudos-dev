<?php
require 'config.php';
require 'models/UsuarioDaoMySql.php';

$usuarioDao = new UsuarioDaoMysql($pdo);

$id = filter_input(INPUT_GET, 'id');
if ($id) {
    $usuario = $usuarioDao->findById($id);
}

if ($usuario === false) {
    header('Location: ../db_tests.php');
    exit;
}
?>

<h3>Editar usuário</h3>
<form action="editar_usuario.php" method="POST">
    <input type="hidden" name="id" value="<?= $usuario->getId(); ?>">
    <label>
        Nome<br>
        <input type="text" name="name" value="<?= $usuario->getNome(); ?>">
    </label>
    <br>
    <label>
        Email<br>
        <input type="email" name="email" value="<?= $usuario->getEmail(); ?>">
    </label>
    <br>
    <input type="submit" value="Salvar">
</form>