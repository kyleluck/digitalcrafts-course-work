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
import sys

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

# create dictionary of encrypted encrypted
encrypted_passwords = {}
for common_word in common_words:
    encrypted_word = get_hash(common_word)
    encrypted_passwords[encrypted_word] = common_word


cracked_passwords = 0
uncracked_passwords = 0
times_run = 0
total_accounts = len(accounts)
point = total_accounts / 100
increment = total_accounts / 20

# loop through list of accounts
for account in accounts:

    # progress bar indicator
    times_run += 1
    if(times_run % (point) == 0):
        sys.stdout.write("\r[" + "=" * (times_run / increment) +  " " * ((total_accounts - times_run) / increment) + "]" +  str(times_run / point) + "%")
        sys.stdout.flush()

    username = account['username']
    password = account['password']

    if password in encrypted_passwords:
        #CRACKED!
        cracked_passwords += 1
    else:
        uncracked_passwords += 1


print "\nCracked %d passwords" % cracked_passwords
print "Couldn't crack %d passwords" % uncracked_passwords
success_rate = 100 * float(cracked_passwords) / float(total_accounts)
print "Success rate:", str(success_rate) + '%'


common_file.close()
account_file.close()
