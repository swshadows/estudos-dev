<?php
session_start();

// Formulários GET
// $nome = filter_input(INPUT_GET, 'nome_get');
// $idade = filter_input(INPUT_GET, 'idade', FILTER_SANITIZE_NUMBER_INT);
// $email = filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL);

// if ($nome && $idade && $email) {
//     echo "Nome colocado: " . $nome . '<br/>';
//     echo "Idade colocada: " . $idade . '<br/>';
//     echo "Email colocado: " . $email;
// } else {
//     header('Location: ../index2.php');
//     exit;
// }

// Formulários POST
$nome = filter_input(INPUT_POST, 'nome_post', FILTER_SANITIZE_SPECIAL_CHARS);
$idade = filter_input(INPUT_POST, 'idade', FILTER_SANITIZE_NUMBER_INT);
$senha = filter_input(INPUT_POST, 'senha');
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($nome && $senha && $email && $idade) {
    echo "Nome colocado: " . $nome . '<br/>';
    echo "Idade colocada: " . $idade . '<br/>';
    echo "Email colocado: " . $email . '<br/>';
    echo "Senha colocada: " . $senha;
} else {
    $_SESSION['aviso'] = 'Preencha corretamente os campos necessários';
    header('Location: ../index2.php');
    exit;
}
