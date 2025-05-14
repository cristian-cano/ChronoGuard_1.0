from flask import Flask
import pymysql.cursors
from config import Config


def create_app():
    app = Flask(__name__, template_folder='templates',    static_folder='static')
    app.config.from_object(Config)
    
    # Conexión a la base de datos
    connection = pymysql.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB'],
        cursorclass=pymysql.cursors.DictCursor
    )
    
    # Agregar la conexión como atributo de la app
    app.connection = connection

    # Importar y registrar los blueprints
    from app.controllers.main_controller import main_bp
    from app.controllers.user_controller import user_bp
    from app.controllers.admin_controller import admin_bp
    from app.controllers.user_management import user_management_bp

    app.register_blueprint(main_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(user_management_bp)

    return app
