<?php
    require_once("../config/conexion.php");
    require_once("../models/Proceso.php");
    $procesos = new Procesos();

    switch($_GET["op"]){

        
        case "insert":
            $datos = $procesos->insert_procesos(
                $_POST["proc_nom"]
            );
            
        break;

        case "listar":
            $datos=$procesos->list_procesos();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["proc_nom"];
                
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