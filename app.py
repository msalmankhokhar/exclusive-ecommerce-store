from flask import Flask, render_template,redirect

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/signup')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)