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
                $sub_array[] = 'EST-'.$row["est_id"];
                $sub_array[] = $row["est_nom"];
                $sub_array[] = '<button type="button" class="edit btn btn-outline-success btn-icon"><div><i class="fa fa-pencil"></i></div></button> <button type="button" class="delete btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';
                $sub_array[] = $row["est_id"];

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
            $estados->update_estados(
                $_POST["est_id"],
                $_POST["est_nom"],
            );
        break;

        case 'delete':
            $estados->delete_estados(
                $_POST["est_id"],
                $_POST["est"],
            );
        break;

    }

?>