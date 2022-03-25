<?php
require 'config.php';
require 'models/UsuarioDaoMySql.php';

$usuarioDao = new UsuarioDaoMysql($pdo);

$id = filter_input(INPUT_GET, 'id');
if ($id) {
    $usuarioDao->delete($id);
}

header('Location: ../db_tests.php');
exit;
