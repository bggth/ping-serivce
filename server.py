from flask import Flask, request, jsonify
from flask_json import FlaskJSON

app = Flask(__name__)

@app.route('/api/ping/', methods = ['POST'])
def ping_post():
    content = request.json
    print(request)
    return jsonify({'ok':'ok'})

@app.route('/')
def index():
    return 'hello world!'

if __name__=='__main__':
    app.run(debug=True)