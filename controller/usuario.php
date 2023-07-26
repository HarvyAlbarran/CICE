<?php
    require_once("../config/conexion.php");
    require_once("../models/Usuario.php");
    $usuario = new Usuario();

    switch($_GET["op"]){

        case "insert":
            $datos = $usuario->insert_usuario(
                $_POST["usu_nom"],
                $_POST["usu_ape"],
                $_POST["usu_correo"],
                $_POST["usu_pass"]
            );
        break;

        case "listar":
            $datos=$usuario->list_usuario();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = 'USU-'.$row["usu_id"];
                $sub_array[] = $row["usu_nom"];
                $sub_array[] = $row["usu_ape"];
                $sub_array[] = $row["usu_correo"];
                $sub_array[] = $row["usu_pass"];
                $sub_array[] = '<button type="button" class="edit btn btn-outline-success btn-icon"><div><i class="fa fa-pencil"></i></div></button> <button type="button" class="delete btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';
                $sub_array[] = $row["usu_id"];
                
                $data[] = $sub_array;
            }
        
            $results = array(
                "sEcho"=>1,
                "iTotalRecords"=>count($data),
                "iTotalDisplayRecords"=>count($data),
                "aaData"=>$data);
            echo json_encode($results);
        break;

        case "guardar":
            $datos = $usuario->get_correo_usuario($_POST["usu_correo"]);
            if($_POST["usu_pass1"] == $_POST["usu_pass2"]){
                if(is_array($datos)==true and count($datos)==0){
                    $usuario->insert_usuario($_POST["usu_nom"],$_POST["usu_ape"],$_POST["usu_correo"],$_POST["usu_pass1"]);
                }else{
                    echo "correo";
                } 
            }else{
                echo "pass";
            }
        break;

        case "correo":
            $datos = $usuario->get_correo_usuario($_POST["usu_correo"]);
            echo json_encode( $datos);
        break;

        case 'update':
            $usuario->update_usuarios(
                $_POST["usu_id"],
                $_POST["usu_nom"],
                $_POST["usu_ape"],
                $_POST["usu_correo"],
                $_POST["usu_pass"],
            );
        break;

        case 'delete':
            $usuario->delete_usuarios(
                $_POST["usu_id"],
                $_POST["est"],
            );
        break;

    }

?>