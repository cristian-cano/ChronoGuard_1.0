/* 


CREATE DATABASE ChronoDB_db;
USE ChronoDB_db;

CREATE TABLE Roles(
ID_Rol INT AUTO_INCREMENT PRIMARY KEY,
tipo ENUM('Admin','Secretaria','Empleado')NOT NULL
);

CREATE TABLE Usuarios (
    ID_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Correo VARCHAR(100) UNIQUE NOT NULL,
    Contraseña VARCHAR(255) NOT NULL, 
    ID_Rol INT NOT NULL,
    FOREIGN KEY (ID_Rol) REFERENCES Roles(ID_Rol) ON DELETE CASCADE
);

CREATE TABLE Permisos (
    ID_Permiso INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT NOT NULL,
    TipoPermiso ENUM('Vacaciones', 'Día libre', 'Trabajo remoto') NOT NULL,  
    Fecha_Solicitud DATE NOT NULL,
    Fecha_Aprobacion DATE NULL,
    Estado ENUM('Pendiente', 'Aprobado', 'Rechazado') NOT NULL,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario) ON DELETE CASCADE
);

CREATE TABLE Alertas (
    ID_Alerta INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT NOT NULL,
    Mensaje VARCHAR(255) NOT NULL,
    FechaEnvio DATE NOT NULL,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario) ON DELETE CASCADE
);

CREATE TABLE Registros (
    ID_Registro INT PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario INT NOT NULL,
    Fecha DATE NOT NULL,
    Hora_Entrada TIME NOT NULL,
    Hora_Salida TIME NULL,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario) ON DELETE CASCADE
);



-- BASE DE DATOS