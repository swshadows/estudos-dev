<?php
require 'imports/link_header.php';
?>

<p>Cheque o código pois essa página não renderiza muita coisa</p>
<?php
//? S - Single-Responsability Principle - Principio da Responsabilidade Unica
// Separar as responsabilidades para classes diferentes

class Usuario {
    // Classe mãe para gerenciar usuário
    private $nome;

    public function getNome() {
        return $this->nome;
    }
    public function setNome($n) {
        $this->nome = $n;
    }
}

class UsuarioDb {
    // Classe para gerenciar o usuário para banco de dados
    public function create($u) {
    }
    public function read($id) {
    }
    public function update(Usuario $u) {
    }
    public function delete($id) {
    }
}

//? O - Open Closed Principle - Principio Aberto e Fechado
// Aberta para extensão e fechado para modificação
interface Remunerado {
    public function remuneracao();
}
class ContratoClt {
    // public function calcularSalario() {}
    public function remuneracao() {
    }
}

class ContratoEstagio {
    // public function calcularBolsa() {}
    public function remuneracao() {
    }
}

class FolhaDePagamento {
    // Essa classe não é modificada quando novos tipos de pagamentos forem inseridos no sistema
    public function calcular(Remunerado $funcionario) {
        return $funcionario->remuneracao();
    }
}

//? L - Liskov Substitution Principle - Principio da Substituição de Liskov
// Os objetos que extendem de outros devem respeitar as funcionalidade herdadas
class A {
    public function getNome() {
        return "Meu nome é A";
    }
}

class B extends A {
    public function getNome() {
        return 'Meu nome é B';
        // Se o objetivo do método mudar, o conceito é quebrado, ex: return 30;
        // Deve se manter intacta a funcionalidade da função original
    }
}

function imprimeNome(A $obj) {
    return $obj->getNome();
}

$objeto1 = new A();
$objeto2 = new B();
echo imprimeNome($objeto1) . "<br/>";
echo imprimeNome($objeto2); // O principio diz que isso deve funcionar, mesmo que imprimeNome tenha sido configurada para A

//? I - Interface Segregation Principle - Principio da Segregação de Interface
// Em uma interface, se DEVE ter somente os métodos essenciais que serão utilizados pelas classes que a implementarão

interface Aves {
    public function setLocation($lat, $lng);
    public function render();
}

interface AvesQueVoam extends Aves {
    public function setAltitude($alt);
}

class Papagaio implements Aves { // Papagaio voa
    public function setLocation($lat, $lng) {
    }

    public function setAltitude($alt) {
    }

    public function render() {
    }
}

class Pinguim implements Aves { // Pinguim não voa, logo ele não necessita de setAltitude
    public function setLocation($lat, $lng) {
    }

    public function render() {
    }
}

//? D - Dependency Inversion Principle - Principio de Inversão de Dependência
// A classe que utiliza uma dependência não deve se importar quem está sendo utilizado pelo sistema

interface DBConnection {
    public function connect();
}

class MySqlConnection implements DBConnection {
    public function connect() {
    }
}

class MongoConnection implements DBConnection {
    public function connect() {
    }
}

class MariaConnection implements DBConnection {
    public function connect() {
    }
}

class UsuarioDAO {
    private $db;

    public function __construct(DBConnection $dbConnection) { // A classe não deve se importar se o DB utilizado é Mongo, MySQL ou outro, mas sim se é uma implementação de DBConnection, sendo assim não necessário a modificação da classe UsuarioDAO
        // $this->db = new MySqlConnection();
        $this->db = $dbConnection;
    }
}

$dbConnection = new MongoConnection(); // Essa será a unica linha que mudará, respoeitando o conceito D
$userDao = new UsuarioDAO($dbConnection);
$userDao2 = new UsuarioDAO($dbConnection);
