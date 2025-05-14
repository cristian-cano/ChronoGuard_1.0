document.querySelector('.btn-ingresar').addEventListener('click', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        return Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, completa todos los campos antes de continuar.',
            confirmButtonText: 'Aceptar',
        });
    }

    if (email === 'admin@g.com' && password === '12345') {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: 'Bienvenido Administrador.',
            confirmButtonText: 'Ingresar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirijo a la ruta que sí existe en Flask
                window.location.href = '/admin/dashboard';
            }
        });

    } else if (email === 'secre@g.com' && password === '1234') {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenida Secretaria.',
            confirmButtonText: 'Ingresar',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/secretaria';  // ajusta a tu ruta real
            }
        });

    } else if (email === 'user@g.com' && password === '123') {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido Empleado.',
            confirmButtonText: 'Ingresar',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/empleados';  // ajusta a tu ruta real
            }
        });

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
            text: 'El correo o la contraseña no son válidos. Inténtalo nuevamente.',
            confirmButtonText: 'Reintentar',
        });
    }
});
