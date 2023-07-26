<?php
require_once("../../config/conexion.php");
if (isset($_SESSION["usu_id"])) {
?>
    <!doctype html>
    <html lang="en" class="no-focus">

    <head>
        <?php require_once("../MainHead/MainHead.php"); ?>

        <title>Home | Consultoría CICE</title>

    </head>

    <body>
        <div id="page-container" class="sidebar-o side-scroll page-header-modern main-content-boxedv sidebar-inverse">
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
                                <a class="align-middle link-effect text-primary-dark font-w600" href="be_pages_generic_profile.html">John Smith</a>
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

            <!--Contenido -->
            <main id="main-container">
                <div class="content">
                    <div class="row" id="div_widget">
                        <div class="col-lg-3 col-md-6" id="div_widget1">

                        </div>
                        <div class="col-lg-3 col-md-6" id="div_widget2">

                        </div>
                        <div class="col-lg-3 col-md-6" id="div_widget3">

                        </div>
                        <div class="col-lg-3 col-md-6" id="div_widget4">

                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="ibox">
                                <canvas id="myReportGeneral1"></canvas>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ibox">
                                <canvas id="myReportGeneral2"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="ibox">
                                <canvas id="myReportGeneral3"></canvas>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ibox">
                                <canvas id="myReportGeneral4"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



            <?php require_once("../MainFooter/MainFooter.php"); ?>

        </div>

        <?php require_once("../MainJs/MainJs.php"); ?>

        <script src="../plantilla/assets/chart.js/dist/Chart.min.js" type="text/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
        <script type="text/javascript" src="home.js"></script>

    </body>

    </html>
<?php
} else {
    header("Location:" . Conectar::ruta() . "index.php");
}
?>