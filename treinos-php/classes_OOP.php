<?php
require 'imports/link_header.php';
?>
<h1>Objetos</h1>

<?php
// Class
class SocialPost {
    public int $id;
    public int $likes = 0;
    public string $author = '';

    // Construtor
    public function __construct($qtLikes = 0, $authorName = '') {
        $this->likes = $qtLikes;
        $this->author = $authorName;
        echo 'Objeto criado' . '<br/>';
    }

    // Métodos
    public function increaseLike() {
        $this->likes++;
    }

    // Getters e Setters; Encapsulamento
    public function setId($n) {
        $this->id =  $n;
    }

    public function getId() {
        return $this->id;
    }

    public function setLikes($n) {
        $this->likes =  $n;
    }

    public function getLikes() {
        return $this->likes;
    }

    public function setAuthor($name) {
        $this->author = $name;
    }

    public function getAuthor() {
        return $this->author;
    }
}

// Objeto
$post1 = new SocialPost();
$post1->likes = 3;
$post1->author = 'Jonas';
$post1->increaseLike();

echo 'Likes: ' . $post1->likes . '<br/>';
echo 'Autor da postagem: ' . $post1->author . '<br/>';

// Criando com construtor
$post2 = new SocialPost(300, 'Jonathan');
echo 'Likes: ' . $post2->likes . '<br/>';
echo 'Autor da postagem: ' . $post2->author . '<br/>';

// Utilizando setters e getters
$post3 = new SocialPost();
$post3->setLikes(27);
$post3->setAuthor('Juliano');

echo 'Likes: ' . $post3->getLikes() . '<br/>';
echo 'Autor da postagem: ' . $post3->getAuthor() . '<br/>';

class Matematica {
    // Propriedades estáticas
    public static string $nome = 'Matemática';

    public static function soma($x = 0, $y = 0) {
        return $x + $y;
    }
}

// Usando função estática; Não há necessidade de criar objeto
echo 'Nome: ' . Matematica::$nome . '<br/>';
echo 'Soma: ' . Matematica::soma(20, 3) . '<br/>';

// Exercicio
// Criar uma calculadora funcional
echo '<h1>Exercicio</h1>';

class Calculadora {
    public float $number = 0;

    public function add($n) {
        $this->number += $n;
    }

    public function sub($n) {
        $this->number -= $n;
    }

    public function mult($n) {
        $this->number *= $n;
    }

    public function div($n) {
        $this->number /= $n;
    }

    public function total() {
        return $this->number;
    }

    public function clear() {
        $this->number = 0;
    }
}

$calc = new Calculadora();
$calc->add(12);
$calc->add(2);
$calc->sub(1);
$calc->mult(3);
$calc->div(2);
$calc->add(0.5);

echo "TOTAL: " . $calc->total() . '<br/>';

$calc->clear();
echo '<hr/>';

// Herança
class Foto extends SocialPost {
    private string $url;

    public function __construct($likes, $url = '') {
        $this->setLikes($likes);
        $this->url = $url;
    }

    public function setUrl($u) {
        $this->url = $u;
    }

    public function getUrl() {
        return $this->url;
    }
}

$foto = new Foto(20, 'https://facebook.com/photo0.png');
$foto->setId(0);

echo "FOTO #" . $foto->getId() . " - " . $foto->getLikes() . " Likes - Acessível em: " . $foto->getUrl() . "<br/>";

// Interface
// Utilizada para organização
interface Database {
    public function listProducts();
    public function addProduct();
    public function removeProduct();
}

class MySQL implements Database {
    public function listProducts() {
    }
    public function addProduct() {
    }
    public function removeProduct() {
    }
}

class MongoDB implements Database {
    public function listProducts() {
    }
    public function addProduct() {
    }
    public function removeProduct() {
    }
}

// Polimorfismo
interface Forma {
    public function getType();
    public function getArea();
}
class Quadrado {
    private $medidaLado;

    public function __construct($l) {
        $this->medidaLado = $l;
    }

    public function getTipo() {
        return 'Quadrado';
    }

    public function getArea() {
        return $this->medidaLado * 2;
    }
}
class Circulo {
    private $raio;

    public function __construct($r) {
        $this->raio = $r;
    }

    public function getTipo() {
        return 'Circulo';
    }
    public function getArea() {
        return pi() * (pow($this->raio, 2));
    }
}

$quadrado = new Quadrado(5);
$circulo = new Circulo(7);

$objetos = [$quadrado, $circulo];

foreach ($objetos as $obj) {
    $tipo = $obj->getTipo();
    $area = $obj->getArea();

    echo "Área: " . $tipo . " : " . $area . "<br/>";
}

// Namespace
require('classes/classe1.php');
require('classes/classe2.php');

$class1 = new class2\MinhaClasse();
echo $class1->testar() . "<br/>";

// Injeção de dependência
class BasicSum {
    public function sum($x, $y) {
        return $x + $y;
    }
}

class ComplicatedSum {
    public function sum($x, $y) {
        $result = $x;

        for ($i = 0; $i < $y; $i++) {
            $result++;
        }
        return $result;
    }
}

class Soma {
    private $method;

    public function __construct($t) {
        $this->method = $t;
    }

    public function sum($x, $y) {
        return $this->method->sum($x, $y);
    }
}

$mat = new Soma(new ComplicatedSum());
echo $mat->sum(10, 20) . "<br/>";

// Autoload
spl_autoload_register(function ($class) {
    $baseDir = __DIR__ . '\classes\\';
    $file = $baseDir . $class . '.php';
    if (file_exists($file)) {
        require $file;
    }
});

use matematica\MatematicaImport as MatematicaImport;

$m = new MatematicaImport();
echo "Resultado: " . $m->somar(10, 20) . "<br/>";
?>

<a href="index.html">Voltar para o indice</a>