<?php
$nome = filter_input(INPUT_GET, 'nome_cad', FILTER_SANITIZE_SPECIAL_CHARS);

if ($nome) {
    $texto = file_get_contents('../arquivo/nomes.txt');
    $texto .= "\n" . $nome;
    file_put_contents('../arquivo/nomes.txt', $texto);
}
header('Location: ../index2.php');
exit;
