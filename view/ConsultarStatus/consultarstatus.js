var usu_id = $("#useridx").val();

function init(){

}

var tabla;

$(document).ready(function(){
    tabla= $('#partes_data').DataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: 'Bfrtip',//Definimos los elementos del control de tabla
        "ajax":{
        url:"../../controller/partes.php?op=listar",
        type : "post",
        data:{usu_id:usu_id},						
            error: function(e){
                console.log(e.responseText);
            },
        },
        "bDestroy": true,
        "responsive": true,
        "bInfo":true,
        "iDisplayLength": 10,
        "order": [[ 0, "desc" ]],
        "language": {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {          
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
    });
});

function ver(part_id){
    llenartabla(part_id);
    $("#modaldetalle").modal("show");
}

function llenartabla(part_id){
    tabla= $('#detalle_data').DataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: 'Bfrtip',//Definimos los elementos del control de tabla
        "ajax":{
        url:"../../controller/partes.php?op=listardetalle_consulta",
        type : "post",
        data:{part_id:part_id},						
            error: function(e){
                console.log(e.responseText);
            },
        },
        "bDestroy": true,
        "responsive": true,
        "bInfo":true,
        "iDisplayLength": 10,
        "order": [[ 0, "desc" ]],
        "language": {
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {          
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
    });
}

$('#partes_data').on('click', '.edit', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    $("#modaleditpartes").modal('show');

    document.getElementById('part_id_edit').value = data[11];

    document.getElementById('part_asun_edit').value = data[1];
    document.getElementById('part_presu_edit').value = data[2];
    document.getElementById('part_desc_edit').value = data[3];
    document.getElementById('emp_id_edit').value = data[4];
    document.getElementById('est_id_edit').value = data[5];

    document.getElementById('proc_id_edit').value = data[7];
    document.getElementById('tip_id_edit').value = data[8];
    document.getElementById('fech_inicio_edit').value = data[9];
    document.getElementById('fech_fin_edit').value = data[10];

})

$('#partes_data').on('click', '.delete', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    Swal.fire({
        title: '¿Desea eliminar la licitación?',
        text: "Está seguro de eliminar la licitación!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {

        Eliminar_licitacion(data[11]);
    })

})

function Actualizar_partes() {

    var part_id = document.getElementById('part_id_edit').value;

    var part_asun = document.getElementById('part_asun_edit').value;
    var part_presu = document.getElementById('part_presu_edit').value;
    var part_desc = document.getElementById('part_desc_edit').value;
    var emp_id = document.getElementById('emp_id_edit').value;
    var est_id = document.getElementById('est_id_edit').value;

    var proc_id = document.getElementById('proc_id_edit').value;
    var tip_id = document.getElementById('tip_id_edit').value;
    var fech_inicio = document.getElementById('fech_inicio_edit').value;
    var fech_fin = document.getElementById('fech_fin_edit').value;

    $.post("../../controller/partes.php?op=update", {
        part_id: part_id,
        part_asun: part_asun,
        part_presu: part_presu,
        part_desc: part_desc,
        emp_id: emp_id,
        est_id: est_id,
        proc_id: proc_id,
        tip_id: tip_id,
        fech_inicio: fech_inicio,
        fech_fin: fech_fin

    }, function (data) {
        let timerInterval;
        Swal.fire({
            title: 'Consultoría CICE',
            html: 'Actualizando Registro...Espere..<b></b>.',
            timer: 1000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getContent();
                    if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                location.reload();
            }
        });
    });
}

function Eliminar_licitacion(part_id) {

    $.post("../../controller/partes.php?op=deletedetalle", {
        part_id: part_id,
        est:2

    }, function(resp){
        console.log("ELIMINO DETALLE")
    });

    $.post("../../controller/partes.php?op=delete", {
        part_id: part_id,
        est:2

    }, function(resp){
        let timerInterval;
        Swal.fire({
            title: 'Consultoría CICE',
            html: 'Eliminando Registro...Espere..<b></b>.',
            timer: 900,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getContent();
                    if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                location.reload();
            }
        });

    });
}

init();