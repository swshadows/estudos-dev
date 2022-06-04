<?php
require '../config.php';

$method = strtolower($_SERVER['REQUEST_METHOD']);
if ($method === 'get') {
    $sql = $pdo->query('SELECT * from notes');
    if ($sql->rowCount() > 0) {
        $data = $sql->fetchAll(PDO::FETCH_ASSOC);

        foreach ($data as $item) {
            $array['results'][] = [
                'id' => $item['id'],
                'title' => $item['title'],
                'body' => $item['body'],
            ];
        }
    }
} else {
    $array['error'] = 'Método não permitido, somente GET';
}

require '../return.php';
