<?php
    class Partes extends Conectar {
        
        public function insert_partes($usu_id){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="insert into tm_partes values (null, ?, null,null,null,null,null,null,null,null,null,now(),null,null,2);";
            $sql=$conectar->prepare($sql);
            $sql->bindvalue(1, $usu_id);
            $sql->execute();

            $sql1="select last_insert_id() as 'part_id';";
            $sql1=$conectar->prepare($sql1);
            $sql1->execute();
            return $resultado=$sql1->fetchall(pdo::FETCH_ASSOC);
        }

        public function update_partes(
            $part_id,
            $part_asun,
            $part_presu,
            $part_desc,
            $tip_id,
            $emp_id,
            $proc_id,
            $est_id,
            $fech_inicio,
            $fech_fin,
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_partes set
                    part_asun=?,
                    part_presu=?,
                    part_desc=?,
                    emp_id=?,
                    est_id=?,
                    proc_id=?,
                    tip_id=?,
                    fech_inicio=?,
                    fech_fin=?,
                    est=1
                where
                    part_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $part_asun);
            $sql2->bindvalue(2, $part_presu);
            $sql2->bindvalue(3, $part_desc);
            $sql2->bindvalue(4, $emp_id);
            $sql2->bindvalue(5, $est_id);
            $sql2->bindvalue(6, $proc_id);
            $sql2->bindvalue(7, $tip_id);
            $sql2->bindvalue(8, $fech_inicio);
            $sql2->bindvalue(9, $fech_fin);
            $sql2->bindvalue(10, $part_id);
            $sql2->execute();
        }

        public function insert_partesdetalle($part_id,$partd_obs,$partd_file){
            $conectar=parent::conexion();
            parent::set_names();

            require_once("Partes.php");
            $partx = new Partes();
            $partd_file = '';
            if($_FILES["partd_file"]["name"] != '')
            {
                $partd_file = $partx->upload_file();
            }else{
                $partd_file = $_POST["hidden_file_imagen"];
            }

            $sql="insert into tm_detallepartes values (null, ?, ?,?,now(),1);";
            $sql=$conectar->prepare($sql);
            $sql->bindvalue(1, $part_id);
            $sql->bindvalue(2, $partd_obs);
            $sql->bindvalue(3, $partd_file);
            $sql->execute();
        }

        public function upload_file(){
            if(isset($_FILES["partd_file"]))
            {
              $extension = explode('.', $_FILES['partd_file']['name']);
              $new_name = rand() . '.' . $extension[1];
              $destination = '../public/src/' . $new_name;
              move_uploaded_file($_FILES['partd_file']['tmp_name'], $destination);
              return $new_name;
            }
        }

        public function list_partesdetalle($part_id){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_detallepartes WHERE part_id=? and est=1;";
            $sql=$conectar->prepare($sql);
            $sql->bindvalue(1, $part_id);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function delete_partesdetalle($part_id, $est){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="update tm_detallepartes set
                    est=?
                where
                    part_id=?;";
            $sql=$conectar->prepare($sql);
            $sql->bindvalue(1, $est);
            $sql->bindvalue(2, $part_id);
            $sql->execute();
        }  

        public function list_partes($usu_id){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_partes WHERE usu_id=? and est=1;";
            $sql=$conectar->prepare($sql);
            $sql->bindvalue(1, $usu_id);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function delete_licitacion(
            $part_id,
            $est
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_partes set
                    est=?
                where
                 part_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $est);
            $sql2->bindvalue(2, $part_id);
            $sql2->execute();

        }

    }
?>