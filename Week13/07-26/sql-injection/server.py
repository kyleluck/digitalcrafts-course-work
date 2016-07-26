from flask import Flask, request, render_template, redirect, session

import pg

db = pg.DB(dbname='github')

app = Flask('MyApp')

@app.route('/')
def projects():
    if 'name' in session:
        query = db.query('''
        select
            project.name,
            project.stars
        from
            project
        inner join
            project_membership on project.id = project_membership.project_id
        inner join
            coder on coder.id = project_membership.user_id
        where
            coder.name = '%s'
        ''' % session['name'])
        projects = query.namedresult()
        return render_template('projects.html',
            title='Your projects', projects=projects)
    else:
        return redirect('/signin')

@app.route('/signin')
def signin():
    return render_template('signin.html')

@app.route('/signin_submit', methods=['POST'])
def signin_submit():
    name = request.form['name']
    query = db.query("select * from coder where name = '%s'" % name)
    result = query.namedresult()
    if len(result) > 0:
        session['name'] = name
    return redirect('/')

app.secret_key = 'NTOEU0948375980CTH9EO893'

if __name__ == '__main__':
    app.run(debug=True)
