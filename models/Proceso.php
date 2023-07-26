<?php
    class Procesos extends Conectar {
        
        public function insert_procesos($proc_nom){

            $conectar=parent::conexion();
            parent::set_names();
            $sql2="insert into tm_proceso values (null, ?, now(),null,null,1);";

            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $proc_nom);

            $sql2->execute();

        }

        public function list_procesos(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_proceso WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function list_combo_proceso(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT proc_id, proc_nom FROM tm_proceso WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

        public function update_procesos(
            $proc_id,
            $proc_nom,
            
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_proceso set
                    proc_nom=?,
                    est=1
                where
                    proc_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $proc_nom);
            $sql2->bindvalue(2, $proc_id);
            $sql2->execute();
        }

        public function delete_procesos(
            $proc_id,
            $est
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_proceso set
                    est=?
                where
                    proc_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $est);
            $sql2->bindvalue(2, $proc_id);
            $sql2->execute();

        }

    }
?>