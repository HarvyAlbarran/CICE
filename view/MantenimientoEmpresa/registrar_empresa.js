var usu_id = $("#useridx").val();

function init() {

}


$(document).on("click", "#btnguardarEmpresa", function () {

    var emp_nombre = $('#emp_nombre').val();
    var emp_ruc = $('#emp_ruc').val();
    var emp_correo = $('#emp_correo').val();
    var emp_descripcion = $('#emp_descripcion').val();
    var emp_direccion = $('#emp_direccion').val();
    var emp_representante = $('#emp_representante').val();

    if (emp_nombre == '' || emp_ruc == '' || emp_correo == '' || emp_direccion == '' || emp_representante == '' || emp_descripcion == '') {
        Swal.fire(
            'Consultoría CICE',
            'Campos Vacios',
            'error'
        );
    } else {
        $.post("../../controller/empresa.php?op=insert", {
            emp_nombre: emp_nombre, emp_ruc: emp_ruc, emp_correo: emp_correo,
            emp_descripcion: emp_descripcion, emp_direccion: emp_direccion, emp_representante: emp_representante
        },


            function (data) {

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

$(document).ready(function () {
    tabla = $('#detalle_data').DataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        dom: 'Bfrtip',//Definimos los elementos del control de tabla
        "ajax": {
            url: "../../controller/empresa.php?op=listar",
            type: "post",
            error: function (e) {
                console.log(e.responseText);
            },
        },
        "bDestroy": true,
        "responsive": true,
        "bInfo": true,
        "iDisplayLength": 10,
        "order": [[0, "desc"]],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
    });
});

$('#detalle_data').on('click', '.edit', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    $("#modaledit").modal('show');

    document.getElementById('emp_id_edit').value = data[8];
    document.getElementById('emp_nombre_edit').value = data[1];
    document.getElementById('emp_ruc_edit').value = data[2];
    document.getElementById('emp_correo_edit').value = data[3];
    document.getElementById('emp_descripcion_edit').value = data[4];
    document.getElementById('emp_direccion_edit').value = data[5];
    document.getElementById('emp_representante_edit').value = data[6];

})

$('#detalle_data').on('click', '.delete', function () {

    var data = tabla.row($(this).parents('tr')).data();
    if (tabla.row(this).child.isShown()) {
        var data = tabla.row(this).data();
    }

    Swal.fire({
        title: '¿Desea eliminar la empresa?',
        text: "Está seguro de eliminar a la empresa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {

        Eliminar_empresa(data[8]);
    })

})

function Actualizar_empresa() {

    var emp_id = document.getElementById('emp_id_edit').value;
    var emp_nombre = document.getElementById('emp_nombre_edit').value;
    var emp_ruc = document.getElementById('emp_ruc_edit').value;
    var emp_correo = document.getElementById('emp_correo_edit').value;
    var emp_descripcion = document.getElementById('emp_descripcion_edit').value;
    var emp_direccion = document.getElementById('emp_direccion_edit').value;
    var emp_representante = document.getElementById('emp_representante_edit').value;

    $.post("../../controller/empresa.php?op=update", {
        emp_id: emp_id,
        emp_nombre: emp_nombre,
        emp_ruc: emp_ruc,
        emp_correo: emp_correo,
        emp_descripcion: emp_descripcion,
        emp_direccion: emp_direccion,
        emp_representante: emp_representante,

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

function Eliminar_empresa(emp_id) {

    $.post("../../controller/empresa.php?op=delete", {
        emp_id: emp_id,
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