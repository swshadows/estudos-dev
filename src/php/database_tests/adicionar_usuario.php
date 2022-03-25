<?php
require 'config.php';
require 'models/UsuarioDaoMySql.php';

$usuarioDao = new UsuarioDaoMysql($pdo);

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($name && $email) {

    if ($usuarioDao->findByEmail($email) === false) {
        $newUser = new Usuario();
        $newUser->setNome($name);
        $newUser->setEmail($email);

        $usuarioDao->add($newUser);

        header("Location: ../db_tests.php");
        exit;
    } else {
        header('Location: adicionar.php');
        exit;
    }
} else {
    header('Location: adicionar.php');
    exit;
}
