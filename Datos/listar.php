<?php
include 'conexion.php';

$conexion = new mysqli($host, $user, $password, $dbname);

    $conexion->set_charset("utf8");
    $statement = $conexion->prepare("SELECT * FROM productos");
    $statement->execute();
    $resultados = $statement->get_result();

    $respuesta = [];

    while($fila = $resultados->fetch_assoc()){
        $usuario = [
            'IdProducto' => $fila['IdProducto'],
            'Nombre'     => $fila['Nombre'],
            'Proveedor' => $fila['Proveedor'],
        ];
        array_push($respuesta, $usuario);
    }


 echo json_encode($respuesta);


?>