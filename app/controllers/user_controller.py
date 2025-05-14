from flask import Blueprint, request, redirect, render_template, current_app, url_for, jsonify
from datetime import date

user_bp = Blueprint('user', __name__, url_prefix='/usuarios')

@user_bp.route('/crear', methods=['POST'])
def crear_empleado():
    data = request.get_json()  # Recibimos los datos como JSON
    
    nombre = data.get('nombre')
    departamento = data.get('departamento')
    
    if not nombre or not departamento:
        return jsonify({"error": "Faltan datos"}), 400
    
    # Conexión a la base de datos
    conn = current_app.connection
    try:
        with conn.cursor() as cursor:
            cursor.execute("SELECT ID_Rol FROM Roles WHERE tipo = %s", (departamento,))
            id_rol = cursor.fetchone()
            if id_rol:
                cursor.execute("""
                    INSERT INTO Usuarios (Nombre, Correo, Contraseña, ID_Rol)
                    VALUES (%s, %s, %s, %s)
                """, (nombre, f"{nombre.lower()}@correo.com", 'temporal123', id_rol[0]))
                conn.commit()
                return jsonify({"success": "Empleado creado exitosamente"}), 201
            else:
                return jsonify({"error": "Departamento no válido"}), 400
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500

@user_bp.route('/editar-empleado/<int:id_usuario>', methods=['POST'])
def editar_empleado(id_usuario):
    data = request.get_json()  # Recibimos los datos como JSON
    
    nombre = data.get('nombre')
    departamento = data.get('departamento')
    
    if not nombre or not departamento:
        return jsonify({"error": "Faltan datos"}), 400

    conn = current_app.connection
    try:
        with conn.cursor() as cursor:
            cursor.execute("SELECT ID_Rol FROM Roles WHERE tipo = %s", (departamento,))
            id_rol = cursor.fetchone()
            if id_rol:
                cursor.execute("""
                    UPDATE Usuarios 
                    SET Nombre = %s, ID_Rol = %s 
                    WHERE ID_Usuario = %s
                """, (nombre, id_rol[0], id_usuario))
                conn.commit()
                return jsonify({"success": "Empleado actualizado exitosamente"}), 200
            else:
                return jsonify({"error": "Departamento no válido"}), 400
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500

@user_bp.route('/eliminar/<int:id_usuario>', methods=['POST'])
def eliminar_empleado(id_usuario):
    conn = current_app.connection
    try:
        with conn.cursor() as cursor:
            cursor.execute("DELETE FROM Usuarios WHERE ID_Usuario = %s", (id_usuario,))
            conn.commit()
            return jsonify({"success": "Empleado eliminado exitosamente"}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500

@user_bp.route('/solicitar-permiso', methods=['POST'])
def solicitar_permiso():
    data = request.get_json()

    tipo = data.get('tipo')
    id_usuario = data.get('id_usuario')
    fecha_solicitud = date.today()
    estado = "Pendiente"

    if not tipo or not id_usuario:
        return jsonify({"error": "Faltan datos"}), 400

    conn = current_app.connection
    try:
        with conn.cursor() as cursor:
            cursor.execute("""
                INSERT INTO Permisos (ID_Usuario, TipoPermiso, Fecha_Solicitud, Fecha_Aprobacion, Estado)
                VALUES (%s, %s, %s, NULL, %s)
            """, (id_usuario, tipo, fecha_solicitud, estado))
            conn.commit()
            return jsonify({"success": "Permiso registrado correctamente"}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
