<?php
$dbName = 'test';
$dbHost = 'localhost';
$dbUser = 'root';
$dbPassword = '1973';

$pdo = new PDO("mysql:dbname=$dbName;host=$dbHost", $dbUser, $dbPassword); // Cria um PDO, para manipular o DB
