from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def IndexChronoGuard():
    return render_template('IndexChronoGuard.html')