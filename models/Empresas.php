<?php
    class Empresas extends Conectar {
        
        public function insert_empresas($emp_nombre,$emp_ruc,$emp_correo, $emp_descripcion, 
        $emp_direccion, $emp_representante){

            $conectar=parent::conexion();
            parent::set_names();
            $sql2="insert into tm_empresas values (null, ?, ?,?,?,?,?, now(),null,null,1);";

            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $emp_nombre);
            $sql2->bindvalue(2, $emp_ruc);
            $sql2->bindvalue(3, $emp_correo);
            $sql2->bindvalue(4, $emp_descripcion);
            $sql2->bindvalue(5, $emp_direccion);
            $sql2->bindvalue(6, $emp_representante);
            $sql2->execute();


        }

        public function list_empresas(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_empresas WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }

    }
?>