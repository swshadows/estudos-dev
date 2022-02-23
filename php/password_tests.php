<?php
require 'imports/link_header.php';
?>

<h1>Testes com senhas</h1>
<?php
$senha = '1234'; // Nunca salvar assim

$hash = password_hash($senha, PASSWORD_DEFAULT);
echo "Senha original: " . $senha . "<br/>";
echo "Senha encriptada (password_hash): " . $hash . "<br/>";

// Verificação de senha com PASSWORD_DEFAULT ou BCRYPT
if (password_verify($senha, $hash)) {
    echo 'Senha igual ao password_hash';
} else {
    echo 'Senha errada';
}
echo "<br/>";

// Utilizando md5
// !Não mais utilizado pois há possibilidade de duas strings resultarem no mesmo hash md5
$hash = md5($senha);
echo "Senha original: " . $senha . "<br/>";
echo "Senha encriptada (md5): " . $hash . "<br/>";

// Verificação de senha com md5
if (md5($senha) == $hash) {
    echo 'Senha igual ao md5 hash';
} else {
    echo 'Senha errada';
}
echo "<br/>";
