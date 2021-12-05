<?php
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