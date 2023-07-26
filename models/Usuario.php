<?php
    class Usuario extends Conectar {
        
        public function login(){
			$conectar=parent::Conexion();
			parent::set_names();
			if(isset($_POST["enviar"])){
				
				$password = $_POST["password"];
				$correo = $_POST["correo"];

				if(empty($correo) and empty($password)){
					header("Location:".Conectar::ruta()."index.php?m=2");
					exit();
				}
			else {
				$sql= "select * from tm_usuario where usu_correo=? and usu_pass=? and est=1";
				$sql=$conectar->prepare($sql);
				$sql->bindValue(1, $correo);
				$sql->bindValue(2, $password);
				$sql->execute();
				$resultado = $sql->fetch();
					if(is_array($resultado) and count($resultado)>0){
						$_SESSION["usu_id"] = $resultado["usu_id"];
                        $_SESSION["usu_nom"] = $resultado["usu_nom"];
                        $_SESSION["usu_ape"] = $resultado["usu_ape"];
						$_SESSION["usu_correo"] = $resultado["usu_correo"];
						header("Location:".Conectar::ruta()."view/Home/");
						exit(); 
					} else {
						header("Location:".Conectar::ruta()."index.php?m=1");
						exit();
					} 
				}
			}
		}

		public function insert_usuario($usu_nom,$usu_ape,$usu_correo,$usu_pass){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="INSERT INTO tm_usuario values (NULL,?,?,?,?, now(), NULL, NULL, '1');";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1,$usu_nom);
            $sql->bindValue(2,$usu_ape);
			$sql->bindValue(3,$usu_correo);
			$sql->bindValue(4,$usu_pass);
            $sql->execute();
		}

		public function list_usuario(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_usuario WHERE est=1;";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchall(pdo::FETCH_ASSOC);
        }
		
		public function get_correo_usuario($usu_correo){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM tm_usuario WHERE usu_correo=? AND est=1;";
            $sql=$conectar->prepare($sql);
			$sql->bindValue(1,$usu_correo);
			$sql->execute();
			return $resultado=$sql->fetchAll();
        }

		public function update_usuarios(
            $usu_id,
            $usu_nom,
			$usu_ape,
			$usu_correo,
			$usu_pass,
            
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_usuario set
					usu_nom=?,
					usu_ape=?,
					usu_correo=?,
					usu_pass=?,
                    est=1
                where
					usu_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $usu_nom);
			$sql2->bindvalue(2, $usu_ape);
			$sql2->bindvalue(3, $usu_correo);
			$sql2->bindvalue(4, $usu_pass);
            $sql2->bindvalue(5, $usu_id);
            $sql2->execute();
        }

		public function delete_usuarios(
            $usu_id,
            $est
        ){
            $conectar=parent::conexion();
            parent::set_names();
            $sql2="update tm_usuario set
                    est=?
                where
					usu_id=?;";
            $sql2=$conectar->prepare($sql2);
            $sql2->bindvalue(1, $est);
            $sql2->bindvalue(2, $usu_id);
            $sql2->execute();

        }

    }
?>