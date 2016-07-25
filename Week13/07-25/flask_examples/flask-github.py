from flask import Flask, render_template, request, redirect, session
import pg

db = pg.DB(dbname='github')

app = Flask('MyApp')

@app.route('/')
def display_form():
    # only display if user is logged in
    if 'name' in session:
        # get possible user names from db for dropdown
        users = db.query("select id, fullname from user_table order by username asc")

        # get projects for user logged in:
        username = session['name']
        useridquery = db.query("select id from user_table where username = '%s' limit 1" % username)
        user = useridquery.namedresult()

        projects = db.query("select name from repo where user_id = '%s' order by name asc" % user[0].id)

        return render_template('github-insert-form.html',
                title="GitHub",
                users = users.namedresult(),
                projects = projects.namedresult())
    else:
        return redirect('/login')

@app.route('/login')
def login_form():
    # remove session variable name if exists. user is logging out
    if 'name' in session:
        del session['name']

    return render_template('github-login.html')

@app.route('/submit-login', methods=['POST'])
def handle_login():
    username = request.form['username']
    # check to see if username is in db
    check = db.query("select * from user_table where username = '%s' LIMIT 1" % username)
    if check.namedresult():
        session['name'] = username
        return redirect('/')
    else:
        return redirect('/login')

@app.route('/save', methods=['POST'])
def save_project():
    project = request.form['project']
    user = request.form['user']
    db.insert('repo', name=project, user_id=user)
    return redirect('/')

@app.route('/know', methods=['POST'])
def find_user_knows():
    user = int(request.form['userknow'])
    find_query = '''
        select
          distinct on (tech.name, repo.user_id) user_table.fullname, tech.name
        from
          repo
        inner join
          tech_in_repo on repo.id = tech_in_repo.repo_id
        inner join
          tech on tech_in_repo.tech_id = tech.id
        inner join
          user_table on repo.user_id = user_table.id
        where
          user_table.id = %d
      ''' % user
    result = db.query(find_query)
    return render_template('user-knows.html',
        techs = result.namedresult())

# Secret key for session
app.secret_key = 'CSF686CCF85C6FRTCHQDBJDXHBHC1G478C86GCFTDCR'

if __name__ == "__main__":
    app.run(debug=True)
