<?php

$types = ['image/png', 'image/jpg', 'image/jpeg'];
if (in_array($_FILES['arquivo']['type'], $types)) {
    $nome = md5(time() . rand(0, 1000)) . getArchiveType($_FILES['arquivo']['name']);
    move_uploaded_file($_FILES['arquivo']['tmp_name'], '../arquivo/' . $nome);
    echo 'Arquivo enviado com sucesso';
} else {
    echo 'Arquivo não enviado';
}

function getArchiveType($arg) {
    $argArray = explode('.', $arg);
    return '.' . $argArray[count($argArray) - 1];
}
