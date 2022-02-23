<?php
session_start();

$nome = filter_input(INPUT_GET, 'login_ex', FILTER_SANITIZE_SPECIAL_CHARS);

if ($nome) {
    $_SESSION['login_ex'] = $nome;
    header('Location: login.php');
    exit;
} else {
    $_SESSION['login_warning'] = 'Preencha os dados corretamente';
    header('Location: login.php');
    exit;
}
