from flask import request, jsonify, Flask
from flask_cors import CORS, cross_origin
from random import random
import json

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
  return "<h1>Server & Redis Works!</h1>\n"

@app.route('/api/v1', methods=['GET'])
def api_save_data():
  values = []
  for z in range(10):
    values.append(random())
  return jsonify({'message': False, 'values': values })

app.run(port = 9999);