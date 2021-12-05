<?php
session_start();
if (isset($_SESSION['login_ex'])) {
    $name = $_SESSION['login_ex'];
    echo 'Bem vindo, ' . $name;
} else {
    header('Location: login.php');
    exit;
}
?>

<form method="GET" action="logout_request.php">
    <input type="submit" value="Sair">
</form>