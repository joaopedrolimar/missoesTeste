<?php

//incluindo conexão com o banco de dados
include_once './conexao.php';


//QUERY para recuperar os eventos
$query_eventos = "SELECT id, motivacao, color, start, end, participantes, funcao  FROM  eventos";


//Prera a Query
$result_eventos = $conn -> prepare($query_eventos);


// Executa a query 
$result_eventos -> execute();

//Cria o array qu recebe os eventos
$eventos = [];


//percorre a lista de registros e=do band=co de dados
while($row_eventos = $result_eventos ->fetch(PDO::FETCH_ASSOC)){

    // Extrair o array 
    extract($row_eents);

    $eventos[] = [
        'id' => $id,
        'motivacao' =>  $motivacao,
        'color' => $color,
        'start' => $start,
        'end' => $end,
        'participantes' => $participantes,
        'funcao' => $funcao,
    ];
}

echo json_encode($eventos);