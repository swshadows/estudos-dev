<?php
// Para dizer quais sites tem acesso a API
header('Access-Control-Allow-Origin: *');
// Para dizer quais métodos de requisição são permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Para dizer o tipo de retorno
header("Content-Type: application/json");

echo json_encode($array);
exit;
