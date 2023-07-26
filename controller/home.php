<?php
    require_once("../config/conexion.php");
    require("../models/Home.php");

    $home = new Home();

    switch($_GET["op"]){

        // case 'report':
        //     $datos=$home->TraerDatosWidget1();
        //     $data= Array();
        //     $contador = 0;

        //     foreach( $datos as $row){
        //         $sub_array = array();
                
        //         $sub_array[] = $row["part_presu"];
                
        //         $data[] = $sub_array;
        //         $contador++;
        //     }

        //     echo json_encode($contador);

        //     $datos=$home->TraerDatosWidget2();
        //     $data= Array();
        //     $contador2 = 0;

        //     foreach( $datos as $row){
        //         $sub_array = array();
                
        //         $sub_array[] = $row["part_presu"];
                
        //         $data[] = $sub_array;
        //         $contador2++;
        //     }

        //     echo json_encode($contador2);

        //     $datos=$home->TraerDatosWidget2();
        //     $data= Array();
        //     $contador3 = 0;

        //     foreach( $datos as $row){
        //         $sub_array = array();
                
        //         $sub_array[] = $row["part_presu"];
                
        //         $data[] = $sub_array;
        //         $contador3++;
        //     }

        //     echo json_encode($contador3);

        //     $datos=$home->TraerDatosWidget2();
        //     $data= Array();
        //     $contador4 = 0;

        //     foreach( $datos as $row){
        //         $sub_array = array();
                
        //         $sub_array[] = $row["part_presu"];
                
        //         $data[] = $sub_array;
        //         $contador4++;
        //     }

        //     echo json_encode($contador4);
        // break;

        case 'report1':
            $datos=$home->TraerDatosWidget1();
            $data= Array();
            $contador = 0;

            foreach( $datos as $row){
                $sub_array = array();
                
                $sub_array[] = $row["part_presu"];
                
                $data[] = $sub_array;
                $contador++;
            }

            echo json_encode($contador);
        break;

        case 'report2':
            $datos=$home->TraerDatosWidget2();
            $data= Array();
            $contador2 = 0;

            foreach( $datos as $row){
                $sub_array = array();
                
                $sub_array[] = $row["part_presu"];
                
                $data[] = $sub_array;
                $contador2++;
            }

            echo json_encode($contador2);
        break;

        case 'report3':
            $datos=$home->TraerDatosWidget3();
            $data= Array();
            $contador3 = 0;

            foreach( $datos as $row){
                $sub_array = array();
                
                $sub_array[] = $row["part_presu"];
                
                $data[] = $sub_array;
                $contador3++;
            }

            echo json_encode($contador3);
        break;

        case 'report4':
            $datos=$home->TraerDatosWidget4();
            $data= Array();
            $contador4 = 0;

            foreach( $datos as $row){
                $sub_array = array();
                
                $sub_array[] = $row["part_presu"];
                
                $data[] = $sub_array;
                $contador4++;
            }

            echo json_encode($contador4);
        break;
    }

    

?>