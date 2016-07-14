## Exercise 2: Navigating nested dictionaries

# Given this "user" dictionary which stores information about a user:
#
# aditi = {
#   'name': 'Aditi',
#   'email': 'aditi@gmail.com',
#   'interests': ['movies', 'tennis'],
#   'friends': [
#     {
#       'name': 'Jasmine',
#       'email': 'jasmine@yahoo.com',
#       'interests': ['photography', 'tennis']
#     },
#     {
#       'name': 'Jan',
#       'email': 'jan@hotmail.com',
#       'interests': ['movies', 'tv']
#     }
#   ]
# }
#
# 1. Write a python expression that gets the email address of Aditi.
# 2. Write a python expression that gets the first of Aditi's interests.
# 3. Write a python expression that gets the email address of Jasmine.
# 4. Write a python expression that gets the second of Jan's two interests.

aditi = {
  'name': 'Aditi',
  'email': 'aditi@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ]
}

#1
print "Aditi's email address is", aditi['email']

#2
print "Aditi's first interest is", aditi['interests'][0]

#3
print "Jasmine's email address is", aditi['friends'][0]['email']

#4
print "Aditi's second interest is", aditi['interests'][1]
