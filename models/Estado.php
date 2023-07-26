<?php
    class Estados extends Conectar {
        
        public function insert_estados($est_nom){

            $conectar=parent::conexion();
            parent::set_names();
            $sql2="insert into tm_estado values (null, ?, now(),null,null,1);";

            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $est_nom);

            $sql2->execute();

        }

        public function list_estados(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_estado WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function list_combo_estado(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT est_id , est_nom FROM tm_estado WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function update_estados(
            $est_id,
            $est_nom,
            
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_estado set
                    est_nom=?,
                    est=1
                where
                    est_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $est_nom);
            $sql2->bindvalue(2, $est_id);
            $sql2->execute();
        }

        public function delete_estados(
            $est_id,
            $est
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_estado set
                    est=?
                where
                    est_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $est);
            $sql2->bindvalue(2, $est_id);
            $sql2->execute();

        }

    }
?>