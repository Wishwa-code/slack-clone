import os

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

display_name = ''


@app.route("/")
def index():
    if display_name == '':
        return render_template("displayname.html")

@socketio.on("display name")
def vote(data):
    display_name = data["displayname"] 
    emit("configure name", display_name, broadcast=True)
