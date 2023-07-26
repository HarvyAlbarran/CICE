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
                $sub_array[] = 'PRO-'.$row["proc_id"];
                $sub_array[] = $row["proc_nom"];
                $sub_array[] = '<button type="button" class="edit btn btn-outline-success btn-icon"><div><i class="fa fa-pencil"></i></div></button> <button type="button" class="delete btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';
                $sub_array[] = $row["proc_id"];
                
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
            $procesos->update_procesos(
                $_POST["proc_id"],
                $_POST["proc_nom"],
            );
        break;

        case 'delete':
            $procesos->delete_procesos(
                $_POST["proc_id"],
                $_POST["est"],
            );
        break;

    }

?>