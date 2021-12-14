<h1>Composer</h1>
<?php
require 'vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('teste.log', Logger::WARNING));

// add records to the log
$log->warning('Foo');
$log->error('Bar');
?>
<a href="db_tests.php">Ir para testes com banco de dados</a>