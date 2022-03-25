<?php
require 'imports/link_header.php';
session_start();
require('imports/header.php');
?>

<h2>Exercicio</h2>
<a href="forms/exercicio/login.php">Ir para página de exercicio</a>

<h2>Teste com forms</h2>
<!-- <form method="GET" action="forms/requisicao.php">
    <h4>Formulário GET</h4>
    <input type="text" name="nome_get" placeholder="Seu nome">
    <input type="text" name="idade" placeholder="Sua idade">
    <input type="text" name="email" placeholder="Seu email">
    <input type="submit" value="Enviar">
</form> -->
<form method="POST" action="forms/requisicao.php">
    <h4>Formulário POST</h4>
    <?php
    if (isset($_SESSION['aviso'])) {
        echo $_SESSION['aviso'] . '<br/>';
        $_SESSION['aviso'] = '';
    }
    ?>
    <input type="text" name="nome_post" placeholder="Seu nome">
    <input type="text" name="idade" placeholder="Sua idade">
    <input type="text" name="email" placeholder="Seu email">
    <input type="password" name="senha" placeholder="Sua senha">
    <input type="submit" value="Enviar">
</form>

<h2>Teste com cookies</h2>
<form method="GET" action="forms/cookies.php">
    <?php
    if (isset($_SESSION['cookies'])) {
        echo $_SESSION['cookies'] . '<br/>';
        $_SESSION['cookies'] = '';
    }
    ?>
    <a href="forms/del_cookie.php">Apagar cookie</a>
    <br>
    <input type="text" name="nome_cookie" placeholder="Digite o valor do cookie">
    <input type="submit">
</form>

<?php
// Lendo arquivos
$file = file_get_contents('arquivo/read.txt');

echo $file . '<br/>';

// Escrevendo em arquivos
$texto = 'Meu nome é swshadows, estou aprendendo PHP';
file_put_contents('arquivo/write.txt', $texto);
echo 'Arquivo criado com sucesso' . '<br/>';
?>

<!-- Exercicio
Criar sistema de cadastro de nomes usando arquivo -->
<h1>Exercicio</h1>
<form method="GET" action="arquivo/request.php">
    <input type="text" name="nome_cad" placeholder="Digite um nome">
    <input type="submit">
</form>
<a href="arquivo/nomes.txt">Ver arquivo</a>
<ul>
    <h3>Lista de nomes</h3>
    <?php
    $nomes = file_get_contents('arquivo/nomes.txt');
    $nomes = explode("\n", $nomes);
    foreach ($nomes as $key => $value) {
        echo "<li>$nomes[$key]</li>";
    }
    ?>
</ul>

<?php
// Excluindo arquivos
unlink('arquivo/exclude.txt');
echo 'Arquivo excluido com sucesso' . '<br/>';

// Renomeando e movendo arquivos
rename('arquivo/move_rename/teste.txt', 'arquivo/move_rename/teste2.txt'); // Sintaxe para renome
rename('arquivo/move_rename/move.txt', 'arquivo/move.txt'); // Sintaxe para mover

// Copiando arquivos
copy('arquivo/move.txt', 'arquivo/move_rename/move.txt');

// Upload de arquivos
?>

<form method="POST" action="arquivo/upload.php" enctype="multipart/form-data">
    <input type="file" name="arquivo">
    <input type="submit" value="Enviar arquivo">
</form>