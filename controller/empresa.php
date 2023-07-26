<?php
    require_once("../config/conexion.php");
    require_once("../models/Empresas.php");
    $empresas = new Empresas();

    switch($_GET["op"]){

        
        case "insert":
            $datos = $empresas->insert_empresas(
                $_POST["emp_nombre"],
                $_POST["emp_ruc"],
                $_POST["emp_correo"],
                $_POST["emp_descripcion"],
                $_POST["emp_direccion"],
                $_POST["emp_representante"]
            );
            
        break;

        case "listar":
            $datos=$empresas->list_empresas();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = 'EMP-'.$row["emp_id"];
                $sub_array[] = $row["emp_nombre"];
                $sub_array[] = $row["emp_ruc"];
                $sub_array[] = $row["emp_correo"];
                $sub_array[] = $row["emp_descripcion"];
                $sub_array[] = $row["emp_direccion"];
                $sub_array[] = $row["emp_representante"];
                $sub_array[] = '<button type="button" class="edit btn btn-outline-success btn-icon"><div><i class="fa fa-pencil"></i></div></button> <button type="button" class="delete btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';
                $sub_array[] = $row["emp_id"];
                
                
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
            $empresas->update_empresas(
                $_POST["emp_id"],
                $_POST["emp_nombre"],
                $_POST["emp_ruc"],
                $_POST["emp_correo"],
                $_POST["emp_descripcion"],
                $_POST["emp_direccion"],
                $_POST["emp_representante"],
            );
        break;

        case 'delete':
            $empresas->delete_empresas(
                $_POST["emp_id"],
                $_POST["est"],
            );
        break;

    }

?>