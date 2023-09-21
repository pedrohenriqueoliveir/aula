<?php

$nomes = ["Alice", "Bob", "Carol", "David", "Eva", "Frank", "Grace", "Henry", "Isabel", "Jack"];
$sobrenomes = ["Smith", "Johnson", "Brown", "Lee", "Garcia", "Martinez", "Jones", "Davis", "Rodriguez", "Wilson"];

$nomeAleatorio = $nomes[array_rand($nomes)];
$sobrenomeAleatorio = $sobrenomes[array_rand($sobrenomes)];

$nomeCompleto = $nomeAleatorio . " " . $sobrenomeAleatorio;
echo "Nome Aleatório: " . $nomeCompleto;

?>






