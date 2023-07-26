var usu_id = $("#useridx").val();

function init(){

}


$(document).on("click","#btnguardarEstado", function(){

    var est_nom = $('#est_nom').val();
    

    if(est_nom==''){
        Swal.fire(
            'Consultoría CICE',
            'Campos Vacios',
            'error'
        );
    }else{
        $.post("../../controller/estado.php?op=insert",{est_nom:est_nom},
            
            function(data){

            let timerInterval;
            Swal.fire({
            title: 'Consultoría CICE',
            html: 'Guardado Registro...Espere..<b></b>.',
            timer: 2000,
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
});


var tabla;

$(document).ready(function(){
    tabla= $('#listado_estado').DataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: 'Bfrtip',//Definimos los elementos del control de tabla
        "ajax":{
        url:"../../controller/estado.php?op=listar",
        type : "post",				
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

$('#listado_estado').on('click', '.edit', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    $("#modaleditestado").modal('show');

    document.getElementById('est_id_edit').value = data[3];
    document.getElementById('est_nom_edit').value = data[1];

})

$('#listado_estado').on('click', '.delete', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    Swal.fire({
        title: '¿Desea eliminar el estado?',
        text: "Está seguro de eliminar el estado!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {

        Eliminar_estado(data[3]);
    })

})

function Actualizar_estado() {

    var est_id = document.getElementById('est_id_edit').value;
    var est_nom = document.getElementById('est_nom_edit').value;

    $.post("../../controller/estado.php?op=update", {
        est_id: est_id,
        est_nom: est_nom,

    }, function (data) {
        let timerInterval;
        Swal.fire({
            title: 'Consultoría CICE',
            html: 'Actualizando Registro...Espere..<b></b>.',
            timer: 1200,
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

function Eliminar_estado(est_id) {

    $.post("../../controller/estado.php?op=delete", {
        est_id: est_id,
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