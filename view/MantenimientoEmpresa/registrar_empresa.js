function init(){
    $("#empresa_form").on("submit",function(e){
        guardaryeditar(e);	
    });
}

function guardaryeditar(e){
    e.preventDefault();
    var formData = new FormData($("#empresa_form")[0]);

    $.ajax({
        url: "../controller/empresa.php?op=guardar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos){
            if (datos=="pass"){
                Swal.fire(
                    'Consultoría CICE',
                    'Error Contraseñas no Coinciden',
                    'error'
                );
            }else if (datos=="correo"){
                Swal.fire(
                    'Consultoría CICE',
                    'La cuenta de correo electronico ya existe, intente recuperar su contraseña',
                    'error'
                );
            }else{
                Swal.fire(
                    'Consultoría CICE',
                    'Se registro Correctamente',
                    'success'
                );
    
                var usu_correo = $('#usu_correo').val();
                $.post("../controller/email.php?op=send_nuevo", { usu_correo : usu_correo}, function(data){
                
                });

            }
            $('#usuario_form')[0].reset();
        }
    }); 
    
}

init();