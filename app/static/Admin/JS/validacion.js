document.querySelector('.btn-ingresar').addEventListener('click', function (event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validaciones básicas
    if (email === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, completa todos los campos antes de continuar.',
            confirmButtonText: 'Aceptar',
        });
        return;
    }

    // Validar un correo específico y contraseña
    if (email === 'admin@g.com' && password === '12345') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenido Administrador.',
            confirmButtonText: 'Ingresar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Solo redirigir si el usuario confirma la alerta
                window.location.href = '/app/templates/Admin/admin1.html'; 
            }
        });
    } else if (email === 'secre@g.com' && password === '123') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenida Secretaria.',
            confirmButtonText: 'Ingresar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Solo redirigir si el usuario confirma la alerta
                window.location.href = '/app/templates/Secret/secretaria.html'; 
            }
        });
    } else if (email === 'user@g.com' && password === '123') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenido Empleado.',
            confirmButtonText: 'Ingresar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Solo redirigir si el usuario confirma la alerta
                window.location.href = '/app/templates/Empleados/ConsultarHorarios.html'; 
            }
        });
    } 
    
    else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
            text: 'El correo o la contraseña no son válidos. Inténtalo nuevamente.',
            confirmButtonText: 'Reintentar',
        });
    }
});

