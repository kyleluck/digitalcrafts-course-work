# Dictionary










>>> allen = {
    'name': 'Allen',
    'website': 'allenthompson.com'
}











>>> allen['website']
'allenthompson.com'












# Empty Dictionary
>>> phone_book = {}

















# Adding entries
>>> phone_book['Alice'] = '913-493-9283'
>>> phone_book['Cowardly Lion'] = '12345-32345'










# Getting an entry
>>> phone_book['Alice']
'913-493-9283'












# What if key doesn't exist?
>>> phone_book['Tin Man']
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Tin Man'













# You can check with the in operator
>>> 'Alice' in phone_book
True
>>> 'Tin Man' in phone_book
False







# Python's null is called None




# Get without failing with the get method, returns None if key doesn't exist
>>> phone_book.get('Tin Man')
# Or provide your own default value
>>> phone_book.get('Tin Man', 'n/a')
'n/a'




#     __            _       _                                _
#  /\ \ \___     __| | ___ | |_    ___  _ __   ___ _ __ __ _| |_ ___  _ __
# /  \/ / _ \   / _` |/ _ \| __|  / _ \| '_ \ / _ \ '__/ _` | __/ _ \| '__|
#/ /\  / (_) | | (_| | (_) | |_  | (_) | |_) |  __/ | | (_| | || (_) | |
#\_\ \/ \___/   \__,_|\___/ \__|  \___/| .__/ \___|_|  \__,_|\__\___/|_|
#                                      |_|

# This doesn't work
>>> phone_book.Alice
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'dict' object has no attribute 'Alice'












# Delete an entry
>>> del phone_book['Alice']















# Looping through a dictionary
for name, phone_number in phone_book.items():
    print "%s's phone number is %s" % (name, phone_number)


>>> phone_book.keys()   # gives you a list of just the keys
>>> phone_book.values() # gives you a list of just the values
