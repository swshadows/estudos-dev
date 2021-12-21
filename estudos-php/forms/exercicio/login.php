<?php
session_start();

if (isset($_SESSION['login_ex'])) {
    header('Location: logged.php');
    exit;
}
?>


<h1>Exercicio</h1>
<p>Fazer um sistema de login básico</p>
<form method="GET" action="login_request.php">
    <?php
    if (isset($_SESSION['login_warning'])) {
        echo $_SESSION['login_warning'];
        $_SESSION['login_warning'] = '';
    }
    ?>
    <br>
    <input type="text" name="login_ex" placeholder="Digite seu nome">
    <input type="submit">
</form>