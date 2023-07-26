var usu_id = $("#useridx").val();

function init(){

}


$(document).on("click","#btnguardarTipo", function(){

    var tip_nom = $('#tip_nom').val();
    

    if(tip_nom==''){
        Swal.fire(
            'Consultoría CICE',
            'Campos Vacios',
            'error'
        );
    }else{
        $.post("../../controller/tipolicitacion.php?op=insert",{tip_nom:tip_nom},
            
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
    tabla= $('#listado_tipo').DataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: 'Bfrtip',//Definimos los elementos del control de tabla
        "ajax":{
        url:"../../controller/tipolicitacion.php?op=listar",
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

$('#listado_tipo').on('click', '.edit', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    $("#modaledittipo").modal('show');

    document.getElementById('tip_id_edit').value = data[3];
    document.getElementById('tip_nom_edit').value = data[1];

})

$('#listado_tipo').on('click', '.delete', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    Swal.fire({
        title: '¿Desea eliminar el tipo de licitación?',
        text: "Está seguro de eliminar el tipo de licitación!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {

        Eliminar_tipo(data[3]);
    })

})

function Actualizar_tipo() {

    var tip_id = document.getElementById('tip_id_edit').value;
    var tip_nom = document.getElementById('tip_nom_edit').value;

    $.post("../../controller/tipolicitacion.php?op=update", {
        tip_id: tip_id,
        tip_nom: tip_nom,

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

function Eliminar_tipo(tip_id) {

    $.post("../../controller/tipolicitacion.php?op=delete", {
        tip_id: tip_id,
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