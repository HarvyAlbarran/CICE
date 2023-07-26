var usu_id = $("#useridx").val();

function init(){

}


$(document).on("click","#btnguardarUsuario", function(){

    var usu_nom = $('#usu_nom').val();
    var usu_ape = $('#usu_ape').val();
    var usu_correo = $('#usu_correo').val();
    var usu_pass = $('#usu_pass').val();
    

    if(usu_nom=='' || usu_ape=='' || usu_correo=='' ||usu_pass==''){
        Swal.fire(
            'Consultoría CICE',
            'Campos Vacios',
            'error'
        );
    }else{
        $.post("../../controller/usuario.php?op=insert",{usu_nom:usu_nom, usu_ape:usu_ape, usu_correo:usu_correo, usu_pass:usu_pass},
            
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
    tabla= $('#listado_usuario').DataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: 'Bfrtip',//Definimos los elementos del control de tabla
        "ajax":{
        url:"../../controller/usuario.php?op=listar",
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

$('#listado_usuario').on('click', '.edit', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    $("#modaleditusuario").modal('show');

    document.getElementById('usu_id_edit').value = data[6];
    document.getElementById('usu_nom_edit').value = data[1];
    document.getElementById('usu_ape_edit').value = data[2];
    document.getElementById('usu_correo_edit').value = data[3];
    document.getElementById('usu_pass_edit').value = data[4];

})

$('#listado_usuario').on('click', '.delete', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    Swal.fire({
        title: '¿Desea eliminar al usuario?',
        text: "Está seguro de eliminar al usuario!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {

        Eliminar_usuario(data[6]);
    })
})

function Actualizar_usuario() {

    var usu_id = document.getElementById('usu_id_edit').value;
    var usu_nom = document.getElementById('usu_nom_edit').value;
    var usu_ape = document.getElementById('usu_ape_edit').value;
    var usu_correo = document.getElementById('usu_correo_edit').value;
    var usu_pass = document.getElementById('usu_pass_edit').value;
    

    $.post("../../controller/usuario.php?op=update", {
        usu_id: usu_id,
        usu_nom: usu_nom,
        usu_ape: usu_ape,
        usu_correo: usu_correo,
        usu_pass: usu_pass,

    }, function (data) {
        let timerInterval;
        Swal.fire({
            title: 'Consultoría CICE',
            html: 'Actualizando Registro...Espere..<b></b>.',
            timer: 1500,
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

function Eliminar_usuario(usu_id) {

    $.post("../../controller/usuario.php?op=delete", {
        usu_id: usu_id,
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