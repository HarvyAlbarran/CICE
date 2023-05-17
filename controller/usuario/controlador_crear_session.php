<?php
    $IDUSUARIO = $_POST['idusuarios'];
    $USUARIO = $_POST['nombreUsuario'];
    
    session_start();
    $_SESSION['S_IDUSUARIO'] = $IDUSUARIO;
    $_SESSION['S_USUARIO'] = $USUARIO;

?>