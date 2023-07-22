<?php
require_once("../../config/conexion.php");
if (isset($_SESSION["usu_id"])) {
?>
    <!doctype html>
    <html lang="en" class="no-focus">

    <head>
        <?php require_once("../MainHead/MainHead.php"); ?>
        <title>Registro Usuario| Consultoría CICE</title>
    </head>

    <body>
        <div id="page-container" class="sidebar-o side-scroll page-header-modern main-content-boxed  sidebar-inverse">
            <aside id="side-overlay">
                <div id="side-overlay-scroll">
                    <div class="content-header content-header-fullrow">
                        <div class="content-header-section align-parent">
                            <button type="button" class="btn btn-circle btn-dual-secondary align-v-r" data-toggle="layout" data-action="side_overlay_close">
                                <i class="fa fa-times text-danger"></i>
                            </button>

                            <div class="content-header-item">
                                <a class="img-link mr-5" href="be_pages_generic_profile.html">
                                    <img class="img-avatar img-avatar32" src="../../public/assets/img/avatars/avatar15.jpg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </aside>

            <nav id="sidebar">
                <div id="sidebar-scroll">
                    <div class="sidebar-content">
                        <?php require_once("../MainSidebar/MainSidebar.php"); ?>

                        <?php require_once("../MainMenu/MainMenu.php"); ?>
                    </div>

                </div>
            </nav>

            <?php require_once("../MainHeader/MainHeader.php"); ?>

            <main id="main-container">
                <div class="content">

                    <div class="block">
                        <div class="block-header block-header-default">
                            <h3 class="block-title">Nuevo Registro <small>Usuarios</small></h3>
                        </div>
                        <div class="block-content block-content-full">
                            <form method="post" id="empresa_form">
                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="usu_nom">Nombres</label>
                                        <input type="text" class="form-control" id="usu_nom" name="usu_nom" placeholder="Ingrese el nombre">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="usu_ape">Apellidos</label>
                                        <input type="text" class="form-control" id="usu_ape" name="usu_ape" placeholder="Ingrese el apellido">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-6">
                                        <label for="usu_correo">Correo</label>
                                        <input type="text" class="form-control" id="usu_correo" name="usu_correo" placeholder="Ingrese el correo">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="usu_pass">Contraseña</label>
                                        <input type="password" class="form-control" id="usu_pass" name="usu_pass" placeholder="Ingrese la contraseña">
                                    </div>
                                </div>


                                <div class="col-md-6 text-right">
                                    <button type="button" class="btn btn-alt-primary" id="btnguardarUsuario">
                                        Guardar <i class="fa fa-save ml-6"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="block">
                        <div class="block-header block-header-default">
                            <h3 class="block-title">Listado de Información de Usuarios</h3>
                        </div>
                        <div class="block-content block-content-full">
                            <table id="listado_usuario" class="table table-bordered table-striped table-vcenter js-dataTable-full">
                                <thead>
                                    <tr>
                                        <th class="text-center">Nombre</th>
                                        <th class="text-center">Apellido</th>
                                        <th class="text-center">Correo</th>
                                        <th class="text-center">Contraseña</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            <?php require_once("../MainFooter/MainFooter.php"); ?>

        </div>

        <?php require_once("../MainJs/MainJs.php"); ?>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
        <script type="text/javascript" src="registrar_usuario.js"></script>
    </body>

    </html>
<?php
} else {
    header("Location:" . Conectar::ruta() . "index.php");
}
?>