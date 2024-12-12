document.addEventListener('DOMContentLoaded', function () {
    // 1. Registro de Asistencia
    document.getElementById('registro-form')?.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el envío del formulario por defecto
        const accion = document.getElementById('accion').value;

        if (!accion) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, selecciona una acción válida para registrar tu asistencia.',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Registro Exitoso!',
                text: `Has marcado: ${accion}.`,
            }).then(() => {
                this.submit(); // Envía el formulario si todo está bien
            });
        }
    });

    // 2. Consulta de Horarios
    document.getElementById('consulta-horarios')?.addEventListener('click', function () {
        Swal.fire({
            icon: 'info',
            title: 'Consulta de Horarios',
            html: '<p>Turno: Lunes a Viernes</p><p>Hora: 8:00 AM - 5:00 PM</p><p>Día libre: Sábado y Domingo</p>',
        });
    });

    // 3. Solicitudes (Permisos, Vacaciones, Cambios de Turno)
    document.getElementById('solicitudes-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        Swal.fire({
            title: '¿Enviar Solicitud?',
            text: 'Tu solicitud será enviada al área de Recursos Humanos para su revisión.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Solicitud Enviada!',
                    text: 'Tu solicitud está en revisión.',
                }).then(() => {
                    this.submit();
                });
            }
        });
    });

    // 4. Notificaciones y Alertas
    document.getElementById('notificaciones')?.addEventListener('click', function () {
        Swal.fire({
            icon: 'info',
            title: 'Notificaciones',
            html: `
                <ul>
                    <li><strong>Solicitud Aprobada:</strong> Permiso del 15 al 17 de diciembre.</li>
                    <li><strong>Recordatorio:</strong> Cambio de turno el próximo lunes.</li>
                </ul>
            `,
        });
    });

    // 5. Historial Personal
    document.getElementById('historial-personal')?.addEventListener('click', function () {
        Swal.fire({
            icon: 'info',
            title: 'Historial de Asistencia',
            html: '<p><strong>Última Semana:</strong></p><ul><li>Lunes: Entrada 8:05 AM, Salida 5:00 PM</li><li>Martes: Entrada 8:00 AM, Salida 5:02 PM</li></ul>',
        });
    });

    // 6. Actualización de Datos Personales
    document.getElementById('actualizar-datos')?.addEventListener('submit', function (e) {
        e.preventDefault();
        Swal.fire({
            title: '¿Guardar Cambios?',
            text: '¿Estás seguro de que deseas actualizar tus datos personales?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Datos Actualizados!',
                    text: 'Tu información personal ha sido actualizada correctamente.',
                }).then(() => {
                    this.submit();
                });
            }
        });
    });

    // 7. Autenticación Segura
    document.getElementById('login-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;

        if (!usuario || !contraseña) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingresa tu usuario y contraseña.',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Inicio de Sesión Exitoso!',
                text: `Bienvenido, ${usuario}.`,
            }).then(() => {
                this.submit();
            });
        }
    });

    // 8. Soporte y Comunicación
    document.getElementById('soporte')?.addEventListener('click', function () {
        Swal.fire({
            icon: 'info',
            title: 'Soporte Técnico',
            html: '<p>Si tienes problemas técnicos, contacta al área de TI: <strong>soporte@empresa.com</strong></p>',
        });
    });
});
