<?php
    class Home extends Conectar {

        public function TraerDatosWidget1(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT part_presu FROM tm_partes WHERE est_id=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function TraerDatosWidget2(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT part_presu FROM tm_partes WHERE est_id=2;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function TraerDatosWidget3(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT part_presu FROM tm_partes WHERE est_id=3;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function TraerDatosWidget4(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT part_presu FROM tm_partes WHERE est_id=4;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

    }
?>
