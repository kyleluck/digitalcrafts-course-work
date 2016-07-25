import pg

db = pg.DB(dbname="github")

# query for repos
query = db.query("select * from repo")

print query

# Insert into tech table from user prompts
# tech_name = raw_input("What tech would you like to add? ")
#
# db.insert('tech', name=tech_name)

# show updated data
tech_query = db.query("select * from tech order by id asc")

print tech_query

# update a record based on user input
# record_id = raw_input("What id of the tech table would you like to update? ")
# new_tech_name = raw_input("What name would you like to change it to? ")
#
# db.update('tech', {'id': record_id, 'name': new_tech_name})

tech_query = db.query("select * from tech order by id asc")

for tech in tech_query.namedresult():
    print "Technology %s has an id of %d" % (tech.name, tech.id)

tech_del = raw_input("What id would you like to delete? ")
db.delete('tech', {'id': tech_del})

tech_query = db.query("select * from tech order by id asc")
print tech_query
