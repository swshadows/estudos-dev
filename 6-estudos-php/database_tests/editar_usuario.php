<?php
require 'config.php';
require 'models/UsuarioDaoMySql.php';

$usuarioDao = new UsuarioDaoMysql($pdo);

$id = filter_input(INPUT_POST, 'id');
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($id && $name && $email) {
    $usuario = new Usuario();
    $usuario->setId($id);
    $usuario->setNome($name);
    $usuario->setEmail($email);
    $usuarioDao->update($usuario);

    header('Location: ../db_tests.php');
    exit;
} else {
    header('Location: editar.php?id=' . $id);
    exit;
}
