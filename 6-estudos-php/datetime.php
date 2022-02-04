<?php

require 'imports/link_header.php';

$format = 'd/m/Y H:i:s';

$date = new DateTime('2020-01-01 15:35:00');
echo "Data original:<br/>" . $date->format($format) . "<br/>";

// Setta a timezone
$date->setTimezone(new DateTimeZone('America/Manaus'));

echo "Data com timezone de Manaus:<br/>" . $date->format($format) . "<br/>";

// Adiciona mais 4 dias, 17 minutos e 40 segundos a data fornecida
$date->add(DateInterval::createFromDateString('4 days 17 minutes 40 seconds'));
echo "Data com 4 dias, 17 minutos e 40 segundos adicionados:<br/>" . $date->format($format) . "<br/>";

// Remove 8 dias, 34 minutos e 80 segundos a data fornecida
$date->sub(DateInterval::createFromDateString('8 days 34 minutes 80 seconds'));
echo "Data com 4 dias, 17 minutos e 40 segundos subtraidos:<br/>" . $date->format($format) . "<br/>";

// Checa se determinada data é maior que outra
$date1 = new DateTime('2019-01-20 15:35:00');
$date2 = new DateTime('2019-01-21 15:35:00');
if ($date1 > $date2) {
    echo "DATE1 é maior que DATE2 <br/>";
} else {
    echo "DATE1 não é maior que DATE2 <br/>";
}

// Checa a diferença entre duas datas
$diff = $date1->diff($date2);
echo $diff->format("%a dias de diferença entre DATE1 e DATE2") . "<br/>";

// Exercicio
// Dizer quantos dias faltam para o ano novo
$today = new DateTime();
$newYear = new DateTime('2021-12-31 23:59:59');

$diff = $today->diff($newYear);
echo $diff->format("Faltam %a dias, %h horas, %i minutos e %s segundos para o Ano Novo de 2021") . "<br/>";
