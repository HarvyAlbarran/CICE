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
                $sub_array[] = 'TIP-'.$row["tip_id"];
                $sub_array[] = $row["tip_nom"];
                $sub_array[] = '<button type="button" class="edit btn btn-outline-success btn-icon"><div><i class="fa fa-pencil"></i></div></button> <button type="button" class="delete btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';
                $sub_array[] = $row["tip_id"];

                $data[] = $sub_array;
            }
        
            $results = array(
                "sEcho"=>1,
                "iTotalRecords"=>count($data),
                "iTotalDisplayRecords"=>count($data),
                "aaData"=>$data);
            echo json_encode($results);
        break;

        case 'update':
            $tipos->update_tipos(
                $_POST["tip_id"],
                $_POST["tip_nom"],
            );
        break;

        case 'delete':
            $tipos->delete_tipos(
                $_POST["tip_id"],
                $_POST["est"],
            );
        break;

    }

?>