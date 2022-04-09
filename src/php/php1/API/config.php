<?php

$dbName = 'devsnotes';
$dbHost = 'localhost';
$dbUser = 'root';
$dbPassword = '';

$pdo = new PDO("mysql:dbname=$dbName;host=$dbHost", $dbUser, $dbPassword);

$array = [
    'error' => '',
    'results' => [],
];
