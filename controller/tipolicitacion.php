<?php
    require_once("../config/conexion.php");
    require_once("../models/TipoLicitacion.php");
    $tipos = new Tipos();

    switch($_GET["op"]){

        
        case "insert":
            $datos = $tipos->insert_tipos(
                $_POST["tip_nom"]
            );
            
        break;

        case "listar":
            $datos=$tipos->list_tipos();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["tip_nom"];
                
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