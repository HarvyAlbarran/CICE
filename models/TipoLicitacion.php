<?php
    class Tipos extends Conectar {
        
        public function insert_tipos($tip_nom){

            $conectar=parent::conexion();
            parent::set_names();
            $sql2="insert into tm_tipo values (null, ?, now(),null,null,1);";

            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $tip_nom);

            $sql2->execute();

        }

        public function list_tipos(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_tipo WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function list_combo_tipo(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT tip_id, tip_nom FROM tm_tipo WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

    }
?>