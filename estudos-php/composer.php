<?php
require 'imports/link_header.php';
?>
<h1>Composer</h1>
<p>Cheque o código fonte, pois essa página não renderiza nada, mas cria um arquivo 'teste.log'</p>
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
<a href="index.html">Voltar para o indice</a>