<?php
require_once("../../config/conexion.php");
if (isset($_SESSION["usu_id"])) {
?>
    <!doctype html>
    <html lang="en" class="no-focus">

    <head>
        <?php require_once("../MainHead/MainHead.php"); ?>
        <title>Registro Tipo Licitación| Consultoría CICE</title>
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
                            <h3 class="block-title">Nuevo Registro <small>Tipo de licitación</small></h3>
                        </div>
                        <div class="block-content block-content-full">
                            <form method="post" id="empresa_form">
                                <div class="form-group row">
                                    <div class="col-md-4">
                                        
                                    </div>
                                    <div class="col-md-4">
                                        <label for="tip_nom">Tipo de licitación</label>
                                        <input type="text" class="form-control" id="tip_nom" name="tip_nom" placeholder="Ingrese el tipo de licitación">
                                    </div>
                                    <div class="col-md-4">
                                    
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-4">
                                        
                                    </div>
                                    <div class="col-md-4">
                                        
                                    </div>
                                    <div class="col-md-4">
                                    
                                    </div>
                                </div>


                                <div class="col-md-7 text-right">
                                    <button type="button" class="btn btn-alt-primary" id="btnguardarTipo">
                                        Guardar <i class="fa fa-save mr-5"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="block">
                        <div class="block-header block-header-default">
                            <h3 class="block-title">Listado de Información de Tipos de licitaciones</h3>
                        </div>
                        <div class="block-content block-content-full">
                            <table id="listado_tipo" class="table table-bordered table-striped table-vcenter js-dataTable-full">
                                <thead>
                                    <tr>
                                        <th class="text-center">Tipo de Licitacion</th>
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
        <script type="text/javascript" src="registrar_tipo.js"></script>
    </body>

    </html>
<?php
} else {
    header("Location:" . Conectar::ruta() . "index.php");
}
?>