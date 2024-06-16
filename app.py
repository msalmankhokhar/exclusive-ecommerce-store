from flask import Flask, render_template, redirect, session, request
from random import choice
from os import listdir
from urllib.parse import urljoin

app = Flask(__name__)
app.secret_key = 'HSNDYD63822'
PRODUCTS = listdir('static/img/products')

@app.route('/theme', methods=['GET'])
def theme():
    darkTheme = request.args.get('value')
    if darkTheme == 'true':
        session.update({ 'theme' : True })
        return { 'theme' : True }
    else:
        session.pop('theme')
        return { 'theme' : False }

@app.route('/')
def index():
    prevImg = urljoin(request.host_url, '/static/img/mockups/screely/index/light.png')
    return render_template('index.html', choice=choice, products = PRODUCTS, prevImg=prevImg)

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)