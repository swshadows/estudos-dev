<?php
require '../config.php';

$method = strtolower($_SERVER['REQUEST_METHOD']);
if ($method === 'get') {

    $id = filter_input(INPUT_GET, 'id');

    if ($id) {
        $sql = $pdo->prepare("SELECT * from notes WHERE id = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();
        if ($sql->rowCount() > 0) {
            $data = $sql->fetch(PDO::FETCH_ASSOC);
            $array['results'][] = $data;
        } else {
            $array['error'] = 'ID não encontrado';
        }
    } else {
        $array['error'] = 'ID não enviado';
    }
} else {
    $array['error'] = 'Método não permitido, somente GET';
}
require '../return.php';
