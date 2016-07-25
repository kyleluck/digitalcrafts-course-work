from flask import Flask, render_template, request, redirect
import pg

db = pg.DB(dbname='github')

app = Flask('MyApp')

@app.route('/')
def display_form():
    # get possible user names from db for dropdown
    users = db.query("select username, fullname from user_table order by username asc")
    return render_template('github-insert-form.html',
            title="GitHub",
            users = users.namedresult())

@app.route('/save', methods=['POST'])
def save_project():
    project = request.form['project']
    return "<h1>%s</h1>" % project

if __name__ == "__main__":
    app.run(debug=True)
