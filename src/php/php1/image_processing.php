<?php
require 'imports/link_header.php';

// Criando imagem com código
$imagem = imagecreatetruecolor(300, 300); // Cria um canvas no servidor com os tamanhos X e Y
$cor = imagecolorallocate($imagem, 255, 0, 0); // Seta uma cor, baseada na imagem com R,G,B

imagefill($imagem, 0, 0, $cor); // Da fill na imagem, na posição X e Y, com a variavel cor

// header('Content-Type: image/jpeg'); // Transforma a página na imagem criada

imagejpeg($imagem, 'images/newImg.jpg', 100); // Pega a imagem, salva ou exibe e setta a qualidade; Para exibir, usar header acima comentado e colocar o lugar salvamento como null, o conteudo da página deve estar completamente vazio;
imagepng($imagem, 'images/newImg.png'); //Gera em png, não existe qualidade em png

// Manipulando imagens
$arquivo = 'images/paisagem.jpg';
$maxWidth = 200;
$maxHeight = 200;

list($originalW, $originalH) = getimagesize($arquivo); // Salva largura e altura nas variaveis
// echo '<pre>';
// print_r($info);

$ratio = $originalW / $originalH; // Pegando o ratio original
$ratioDest = $maxWidth / $maxHeight; // Pegando o ratio maximo

$finalW = 0;
$finalH = 0;
$finalX = 0;
$finalY = 0;

// Ratio da imagem
if ($ratioDest > $ratio) {
    $finalW = $maxHeight * $ratio;
    $finalH = $maxHeight;
} else {
    $finalH = $maxWidth / $ratio;
    $finalW = $maxWidth;
}

// Crop da imagem
if ($finalW < $maxWidth) {
    $finalW = $maxWidth;
    $finalH = $maxWidth / $ratio;

    $finalY = - (($finalH - $maxHeight) / 2);
} else {
    $finalH = $maxHeight;
    $finalW = $maxHeight * $ratio;

    $finalX = - (($finalW - $maxWidth) / 2);
}

echo 'Tamanho final: ' . $finalW . ' x ' . $finalH . "<br/>";

$imagem = imagecreatetruecolor($finalW, $finalH);
$originalImg = imagecreatefromjpeg($arquivo); // Pegando imagem original

imagecopyresampled(
    $imagem, //Imagem final
    $originalImg, // Imagem original
    $finalX, // X inicial da imagem guia
    $finalY, // Y inicial da imagem guia
    0, // X inicial da imagem canvas
    0, // Y inicial da imagem canvas
    $finalW, // Width final
    $finalH, // Height final
    $originalW, // Width original
    $originalH // Height original
);

// header("Content-Type: image/jpeg");
imagejpeg($imagem, 'images/paisagem_resized.jpg', 100);

echo "Imagens criadas e processadas com sucesso! Cheque a pasta raiz";
