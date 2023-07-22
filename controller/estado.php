<?php
    require_once("../config/conexion.php");
    require_once("../models/Estado.php");
    $estados = new Estados();

    switch($_GET["op"]){

        
        case "insert":
            $datos = $estados->insert_estados(
                $_POST["est_nom"]
            );
            
        break;

        case "listar":
            $datos=$estados->list_estados();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["est_nom"];
                
                $data[] = $sub_array;
            }
        
            $results = array(
                "sEcho"=>1,
                "iTotalRecords"=>count($data),
                "iTotalDisplayRecords"=>count($data),
                "aaData"=>$data);
            echo json_encode($results);
        break;

    }

?>