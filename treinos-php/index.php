<h1>Estudando PHP</h1>
<p>Código <a target="_blank" href="https://github.com/swshadows/estudos-webdev/tree/master/2%20treinos-php">no Github</a></p>

<?php
$num = 100;
echo $num + 200;
echo "<br/>";
$num = 90; // Inteiro
$vazia = null; // Null
$booleana = true; // Boolean

// Concatenações
$nome = "Joe<br/>";
echo "Meu nome é " . $nome;

// Arrays
$arrayNomes = ['José', 'Maria', 'Natalia', 'Diego'];

echo $arrayNomes[2] . '<br/>';

$arraySpread = [...$arrayNomes, 'Katia'];
echo $arraySpread[4] . '<br/>';

// Exercicio
// Consertar o array quebrado
$lista1 = [
    'nome' => 'Joelson',
    'idade' => 21,
    'atributos' => [
        'forca' => 90,
        'agilidade' => 30,
        'destreza' => 70
    ],
    'vida' => 1000,
    'mana' => 290
];

echo 'Nome: ' . $lista1['nome'] . '<br/>';
echo 'Idade: ' . $lista1['idade'] . '<br/>';
echo 'Força: ' . $lista1['atributos']['forca'] . '<br/>';
echo 'Mana: ' . $lista1['mana'] . '<br/>';

// Condicional IF
$idade  = 10;
if ($idade >= 18) {
    echo 'Maior que 18 anos <br/>';
} else {
    echo 'Menor que 18 anos <br/>';
}

//Condicional ternário
$idade2 = 90;
echo ($idade2 >= 18) ? 'Maior de idade<br/>' : 'Menor de idade<br/>';

// Null CAO
$nome = 'Joelson';

$nomeCompleto = $nome;
$nomeCompleto .= isset($sobrenome) ? $sobrenome . '<br/>' : ' NULL<br/>';
//$nomeCompleto .= $sobrenome ?? 'NULL<br/>';

echo $nomeCompleto;

// Condicional Switch

$tipo = 'FOTO';
switch ($tipo) {
    case 'FOTO':
        echo 'Tipo FOTO<br/>';
        break;
    case 'VIDEO':
        echo 'Tipo VIDEO<br/>';
        break;
    case 'MUSICA':
        echo 'Tipo MUSICA<br/>';
        break;
    default:
        echo 'Error';
}

// Loop While
$num = 0;
while ($num < 10) {
    echo "$num ";
    $num++;
}
echo '<br/>';

// Loop For
for ($num = 0; $num < 10; $num++) {
    echo "$num ";
}
echo '<br/>';

// Loop Foreach
$ingredientes = ['farinha', 'açucar', 'ovos', 'leite', 'fermento'];

foreach ($ingredientes as $key => $value) {
    echo "Item " . $key . ": " . $value . "<br/>";
}
echo '<br/>';

// Exercicio Loops
// Criar 10 linhas e 10 colunas de traços usando loop e somente um caracter

for ($num = 0; $num < 10; $num++) {
    for ($num1 = 0; $num1 < 10; $num1++) {
        echo '-';
    }
    echo '<br/>';
}

// Exercicio Loops 2
// Criar o mesmo do exercicio anterior porém em cascata ao invés de bloco
for ($num = 0; $num < 20; $num++) {
    for ($num1 = 0; $num1 < $num; $num1++) {
        echo '-';
    }
    echo '<br/>';
}

// Funções
function somar(int $n1, int $n2 = 0, int $n3 = 0)
{
    $total = $n1 + $n2 + $n3;
    return $total;
}

$soma = somar(10, 3);
echo 'Total: ' . $soma . '<br/>';

// Parâmetros - Referência
function subtrair($n1, $n2, &$res)
{
    $res = $n1 - $n2;
}

$sub = 0;
subtrair(10, 7, $sub);
echo 'Resultado: ' . $sub . '<br/>';

// Anônima
$porcento = function (int $valor, int $percent) {
    return $valor * ($percent / 100);
};

echo $porcento(20, 10) . "<br/>";

// Arrow function
$porcento1 = fn (int $valor, int $percent) => $valor * ($percent / 100);

echo $porcento1(30, 10) . "<br/>";

// Recursiva
function dividirAteZero(int $valor)
{
    $half = $valor / 2;
    echo $half . ' ';
    if (round($half) > 0) {
        dividirAteZero($half);
    }
}

dividirAteZero(100);

// Matemática
echo abs(-8.4) . '<br/>';
echo pi() . '<br/>';
echo floor(7.77777) . '<br/>';
echo ceil(7.77777) . '<br/>';
echo round(7.77777) . '<br/>';
echo round(12.4312321, 2) . '<br/>';
echo rand(3, 9) . '<br/>';
echo max([1, 2, 3, 4, 5]) . '<br/>';
echo min([1, 2, 3, 4, 5]) . '<br/>';

// Funções de string
$nome = '         Joelson              ';
$nomelimpo = trim($nome); // Remove espacos desnecessários
echo $nomelimpo . strlen($nomelimpo) . 'caracteres' . '<br/>'; // Conta os caracteres
echo $nome . strlen($nome) . 'caracteres' . '<br/>';

$nome = 'JOELSON';
$nome2 = 'joelson';
echo strtolower($nome) . '<br/>'; // Lowercase
echo strtoupper($nome2) . '<br/>'; // Uppercase

$palavra = 'Pão de alho';
$palavraAlterada = str_replace('alho', 'leite', $palavra); // Substitui algo na string

echo $palavraAlterada . "<br/>";

$palavra = 'Bolo de cenoura';
$palavraAlterada = substr($palavra, 0, 4); // Cria uma nova string baseado em posições

echo $palavraAlterada . '<br/>';
$palavraAlterada = substr($palavra, -7, 7);

echo $palavraAlterada . '<br/>';

$posicao = strpos($palavra, 'ce'); // Vê a posição inicial do argumento na string
echo $posicao . "<br/>";

$nome = 'josé augusto araujo';
echo ucfirst($nome) . '<br/>'; // Capitaliza a primeira letra da string
echo ucwords($nome) . '<br/>'; // Capitaliza as primeiras letras de todas as palavras na string
$nomes = explode(' ', $nome); // Separa as strings e coloca em array baseado no separador por argumento
print_r($nomes);
echo '<br/>';

$numero = 218903.291;
echo 'R$' . number_format($numero, 2, ',', '.') . '<br/>'; // Formata numeros em uma série de regras

// Funções de Array
$lista = ['arroz', 'feijão', 'macarrão', 'frango', 'salada'];
echo 'Total de itens na lista: ' . count($lista) . '<br/>'; // Conta os itens do array

$lista_total = ['joelson', 'josé', 'paulo', 'francisca', 'mateus', 'pedro'];
$aprovados = ['joelson', 'josé', 'pedro'];

$reprovados = array_diff($lista_total, $aprovados); // Cria uma nova lista com a diferença entre as duas listas
echo 'Alunos reprovados: ';
print_r($reprovados);
echo '<br/>';

$lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

$filtrados = array_filter($lista, function ($item) {
    if ($item <= 5) {
        return true;
    } else {
        return false;
    }
}); // Filtra o array baseado em uma função anonima

print_r($filtrados);
echo '<br/>';

$dobrados = array_map(function ($item) {
    return $item * 2;
}, $lista); // Executa algo baseado em cada item do array com funcao anonima

print_r($dobrados);
echo '<br/>';

array_pop($lista); // Remove o ultimo item do array
array_shift($lista); // Remove o primeiro item do array

print_r($lista);
echo '<br/>';

if (in_array(9, $lista)) {
    $pos = array_search(9, $lista); // Pega a posição no array
    echo 'Existe 9 na lista na posição ' . $pos . '<br/>';
} else {
    echo 'Não existe 9 na lista' . '<br/>';
} // Procura algo no array e retorna true ou false

sort($lista); // Ordena de forma crescente
rsort($lista); // Ordena de forma decrescente
asort($lista); // Ordena de forma crescente porém mantendo a chave
arsort($lista); // Ordena de forma decrescente porém mantendo a chave

$nome = implode(' ', $nomes);
echo $nome . '<br/>'; // Junta todos os itens de um array em uma string, baseado no argumento

// Datas
echo date('d/m/Y H:i:s') . '<br/>'; // Pega a data baseada em regras predefinidas
$date = '2020-03-03'; // Formato internacional de datas
$time = strtotime($date); // Converte string em tempo em milisegundos
echo date('d.m.y', $time) . '<br/>'; // Formatar a data em um padrão normal

// Exercicio
// Fazer uma função que recebe a data em formato internacional e retorna a data formatada em padrão BR com o dia da semana
$time = '2014-12-05';
function convertDate($time)
{
    echo date('d/m/Y', strtotime($time)) . ' - ';
    switch (date('l', strtotime($time))) {
        case 'Sunday':
            echo 'Domingo';
            break;
        case 'Monday':
            echo 'Segunda';
            break;
        case 'Tuesday':
            echo 'Terça';
            break;
        case 'Wednesday':
            echo 'Quarta';
            break;
        case 'Thursday':
            echo 'Quinta';
            break;
        case 'Friday':
            echo 'Sexta';
            break;
        case 'Saturday':
            echo 'Sábado';
            break;
        default:
            echo 'Error';
    }
    echo '-feira' . '<br/>';
};

convertDate($time);

// Importando outros arquivos
require('imports/header.php');
require('imports/user.php');
echo '<a href="imports/sobre.php">Link para Sobre.php usando o mesmo header</a> ' . 'Testando imports' . '<br/>';
echo 'User: ' . $username . ' ' . 'Senha: ' . $password . '<br/>';
echo 'Continua na <a href="index2.php">próxima página</a>';
