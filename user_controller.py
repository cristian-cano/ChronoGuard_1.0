from flask import Blueprint, render_template, request, redirect, url_for, session, current_app

user_bp = Blueprint('user_bp', __name__)

# Listar todos los usuarios
@user_bp.route('/usuarios')
def listar_usuarios():
    if not session.get('user_id'):
        return redirect(url_for('user_bp.login'))

    connection = current_app.connection
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT id, name, email, rol FROM usuarios")
            usuarios = cursor.fetchall()
    except Exception as e:
        return str(e)

    return render_template('usuarios/lista.html', usuarios=usuarios)

# Mostrar formulario para crear usuario
@user_bp.route('/usuarios/nuevo')
def nuevo_usuario():
    if not session.get('user_id'):
        return redirect(url_for('user_bp.login'))

    return render_template('usuarios/nuevo.html')

# Guardar usuario nuevo
@user_bp.route('/usuarios/crear', methods=['POST'])
def crear_usuario():
    if not session.get('user_id'):
        return redirect(url_for('user_bp.login'))

    nombre = request.form['name']
    email = request.form['email']
    password = request.form['password']  # En producción: encriptar
    rol = request.form['rol']

    connection = current_app.connection
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                "INSERT INTO usuarios (name, email, password, rol) VALUES (%s, %s, %s, %s)",
                (nombre, email, password, rol)
            )
            connection.commit()
    except Exception as e:
        return str(e)

    return redirect(url_for('user_bp.listar_usuarios'))

# Editar usuario (mostrar formulario)
@user_bp.route('/usuarios/editar/<int:id>')
def editar_usuario(id):
    if not session.get('user_id'):
        return redirect(url_for('user_bp.login'))

    connection = current_app.connection
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM usuarios WHERE id = %s", (id,))
            usuario = cursor.fetchone()
            if not usuario:
                return "Usuario no encontrado"
    except Exception as e:
        return str(e)

    return render_template('usuarios/editar.html', usuario=usuario)

# Actualizar usuario
@user_bp.route('/usuarios/actualizar/<int:id>', methods=['POST'])
def actualizar_usuario(id):
    if not session.get('user_id'):
        return redirect(url_for('user_bp.login'))

    nombre = request.form['name']
    email = request.form['email']
    rol = request.form['rol']

    connection = current_app.connection
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                "UPDATE usuarios SET name=%s, email=%s, rol=%s WHERE id=%s",
                (nombre, email, rol, id)
            )
            connection.commit()
    except Exception as e:
        return str(e)

    return redirect(url_for('user_bp.listar_usuarios'))

# Eliminar usuario
@user_bp.route('/usuarios/eliminar/<int:id>')
def eliminar_usuario(id):
    if not session.get('user_id'):
        return redirect(url_for('user_bp.login'))

    connection = current_app.connection
    try:
        with connection.cursor() as cursor:
            cursor.execute("DELETE FROM usuarios WHERE id=%s", (id,))
            connection.commit()
    except Exception as e:
        return str(e)

    return redirect(url_for('user_bp.listar_usuarios'))
