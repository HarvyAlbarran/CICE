function verificar_Usuario(){
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    if (usuario.length==0 || password.length==0) {
        return Swal.fire("Mensaje de advertencia", "Llenar los campos vacíos", "warning");
    }

    $.ajax({

        url: '../controller/usuario/controlador_verificar_usuario.php',
        type:'POST',
        data:{
            u:usuario,
            p:password
        }

    }).done(function(resp){

        var data  = JSON.parse(resp);

        if (resp == 0) {
            Swal.fire("Mensaje de advertencia", "Usuario y/o contraseña incorrecta", "warning");
        }else{
            if (data[0][4] === null) {
                $.ajax({
                    url: '../controller/usuario/controlador_crear_session.php',
                    type: 'POST' ,
                    data: {
                        idusuarios:data[0][0],
                        nombreUsuario: data[0][1],
                    }
                }).done(function(resp){
                    let timerInterval
                    Swal.fire({
                    title: 'Bienvenido al sistema',
                    html: 'Será redireccionado en <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        location.reload();
                    }
                    })
                })
            }else{
                Swal.fire("Mensaje de advertencia", "El usuario se encuentra inactivo, comuníquese con el administrador", "warning");
            }
        }

    })
}

