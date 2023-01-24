from flask import Flask, request, jsonify
from flask_json import FlaskJSON
from flask_cors import CORS
from ping3 import ping, verbose_ping
import json

app = Flask(__name__)
CORS(app)

def do_ping(host):
	res = ping(host)
	print(res)
	return res

@app.route('/api/ping/', methods = ['POST'])
def ping_post():
	content = request.json
	#args = json.loads(content)
	result = do_ping(content['host'])
	print(request)
	return jsonify({'ok':result})

@app.route('/')
def index():
	return 'hello world!'

if __name__=='__main__':
	app.run(debug=True)