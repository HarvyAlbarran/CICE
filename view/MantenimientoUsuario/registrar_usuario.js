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

init();