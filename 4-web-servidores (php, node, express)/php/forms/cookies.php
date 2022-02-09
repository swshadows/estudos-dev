<?php
session_start();

$name = filter_input(INPUT_GET, 'nome_cookie');

if ($name) {
    $expiration_date = time() + (86400 * 30); // 30 dias a partir da execução

    setcookie('cookieNome', $name, $expiration_date, '/');
    echo 'Cookie inserido com sucesso: ' . $name;
} else {
    $_SESSION['cookies'] = 'Preencha o campo cookies corretamente';
    header('Location: ../index2.php');
    exit;
}
