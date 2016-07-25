# the Flask class from the flask module
from flask import Flask, render_template
import pg

# connect to github database
db = pg.DB(dbname='github')

# Creates a flash app object
app = Flask('MyApp')

# Sets up a URL handler for the root URL: /
@app.route('/')
def display_tech_user_knows():
    tech_known = db.query('''
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
          user_table.fullname = 'Kyle Luck';
        ''')
    html = "<ul>"
    for tech in tech_known.namedresult():
        html += "<li>%s knows %s</li>" % (tech.fullname, tech.name)
    html += "</ul>"
    return html

# Start the server if this file is run as a script on the command line
if __name__ == '__main__':
    # run the server in debug mode, which will automatically
    # restart the server for you on save
    app.run(debug=True)
