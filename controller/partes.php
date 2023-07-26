<?php
    require_once("../config/conexion.php");
    require_once("../models/Partes.php");
    require_once("../models/TipoLicitacion.php");
    require_once("../models/Empresas.php");
    require_once("../models/Proceso.php");
    require_once("../models/Estado.php");

    $partes = new Partes();
    $tipos = new Tipos();
    $empresas = new Empresas();
    $procesos = new Procesos();
    $estados = new Estados();

    switch($_GET["op"]){

        case "insert":
            $datos = $partes->insert_partes($_POST["usu_id"]);
            if(is_array($datos)==true and count($datos)>0){
                foreach($datos as $row)
                {
                    $output["part_id"] = $row["part_id"];
                }
                echo json_encode($output);
            }
        break;

        case "update":
            $partes->update_partes(
                $_POST["part_id"],
                $_POST["part_asun"],
                $_POST["part_presu"],
                $_POST["part_desc"],
                $_POST["tip_id"],
                $_POST["emp_id"],
                $_POST["proc_id"],
                $_POST["est_id"],
                $_POST["fech_inicio"],
                $_POST["fech_fin"],
            );
        break;

        case "insertdetalle":
            $partes->insert_partesdetalle($_POST["part_id"],$_POST["partd_obs"],$_POST["partd_file"]);
        break;

        case "deletedetalle":
            $partes->delete_partesdetalle(
                $_POST["part_id"],
                $_POST["est"]
            );
        break;

        case "listardetalle":
            $datos=$partes->list_partesdetalle($_POST["part_id"]);
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["partd_obs"];
                $sub_array[] = '<a href="../../public/src/'.$row["partd_file"].'" target="_blank">'.$row["partd_file"].'</a>';
                $sub_array[] = '<button type="button" onClick="eliminar('.$row["partd_id"].');"  id="'.$row["partd_id"].'" class="btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';
                $data[] = $sub_array;
            }
        
            $results = array(
                "sEcho"=>1,
                "iTotalRecords"=>count($data),
                "iTotalDisplayRecords"=>count($data),
                "aaData"=>$data);
            echo json_encode($results);
        break;

        case "listardetalle_consulta":
            $datos=$partes->list_partesdetalle($_POST["part_id"]);
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["partd_obs"];
                $sub_array[] = '<a href="../../public/src/'.$row["partd_file"].'" target="_blank">'.$row["partd_file"].'</a>';
                $data[] = $sub_array;
            }
        
            $results = array(
                "sEcho"=>1,
                "iTotalRecords"=>count($data),
                "iTotalDisplayRecords"=>count($data),
                "aaData"=>$data);
            echo json_encode($results);
        break;

        case "listar":
            $datos=$partes->list_partes($_POST["usu_id"]);
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = "MDP-".$row["part_id"];
                $sub_array[] = $row["part_asun"];
                $sub_array[] = $row["part_presu"];
                $sub_array[] = $row["part_desc"];
                $sub_array[] = $row["emp_id"];
                $sub_array[] = $row["est_id"];
                
                $sub_array[] = '<button type="button" onClick="ver('.$row["part_id"].');"  id="'.$row["part_id"].'" class="btn btn-outline-info btn-icon"><div><i class="fa fa-database"></i></div></button> <button type="button" class="edit btn btn-outline-success btn-icon"><div><i class="fa fa-pencil"></i></div></button> <button type="button" class="delete btn btn-outline-danger btn-icon"><div><i class="fa fa-trash"></i></div></button>';

                $sub_array[] = $row["proc_id"];
                $sub_array[] = $row["tip_id"];
                $sub_array[] = date("d-m-Y", strtotime($row["fech_inicio"]));
                $sub_array[] = date("d-m-Y", strtotime($row["fech_fin"]));
                $sub_array[] = $row["part_id"];

                $data[] = $sub_array;
            }
        
            $results = array(
                "sEcho"=>1,
                "iTotalRecords"=>count($data),
                "iTotalDisplayRecords"=>count($data),
                "aaData"=>$data);
            echo json_encode($results);
        break;

        case "list_combo_tipo":
            $datos=$tipos->list_combo_tipo();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["tip_id"];
                $sub_array[] = $row["tip_nom"];
                
                $data[] = $sub_array;
            }

            echo json_encode($data);
        break;

        case "list_combo_empresa":
            $datos=$empresas->list_combo_empresa();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["emp_id"];
                $sub_array[] = $row["emp_nombre"];
                
                $data[] = $sub_array;
            }

            echo json_encode($data);
        break;

        case "list_combo_proceso":
            $datos=$procesos->list_combo_proceso();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["proc_id"];
                $sub_array[] = $row["proc_nom"];
                
                $data[] = $sub_array;
            }

            echo json_encode($data);
        break;

        case "list_combo_estado":
            $datos=$estados->list_combo_estado();
            $data= Array();
            foreach($datos as $row){
                $sub_array = array();
                $sub_array[] = $row["est_id"];
                $sub_array[] = $row["est_nom"];
                
                $data[] = $sub_array;
            }

            echo json_encode($data);
        break;

        case 'delete':
            $partes->delete_licitacion(
                $_POST["part_id"],
                $_POST["est"],
            );
        break;

    }

?>