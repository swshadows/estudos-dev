<h1>Cabeçalho de teste</h1>
<?php
if (isset($_COOKIE['cookieNome'])) {
    $nome = $_COOKIE['cookieNome'];
    echo 'Cookie: ' . $nome . '<br/>';
}
?>
<hr>