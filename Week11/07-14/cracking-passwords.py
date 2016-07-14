## Bonus: Exercise 4 - Cracking Passwords

# You hacked into a high-security system and found a database of user accounts. The only problem is the passwords have been encrypted. You know that md5 is a popular but weak hashing scheme that is used by many companies to encrypt user passwords. If you are lucky, you can use a rainbow table attack using common english words from a dictionary to recover the plain-text passwords.
#
# You have access to a list of the most common words common_words.txt, and the user accounts: accounts.json. Read up on how to use md5:
#
# https://docs.python.org/2/library/md5.html
#
# Here's an example of how someone might use md5 to generate an encrypted password:

import md5
import json

def get_hash(word):
    plaintext_password = word
    m = md5.new()
    m.update(plaintext_password)
    encrypted_password = m.hexdigest()
    return encrypted_password

# import common words into a dictionary
common_file = open('common_words.txt', 'r')
common_words = common_file.read().split('\n')

# import user accounts
account_file = open('accounts.json', 'r')
accounts = json.loads(account_file.read())

# loop through list of accounts
for account in accounts:
    # loop through account dictionaries
    username = account['username']
    password = account['password']
    # for each account, loop through common words
    for word in common_words:
        if get_hash(word) == password:
            print "Cracked %s's password! It's %s" % (username, word)


common_file.close()
account_file.close()
