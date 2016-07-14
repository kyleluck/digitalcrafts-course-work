# Dictionary

## Exercise 1

Do http://learnpythonthehardway.org/book/ex39.html

## Exercise 2: Navigating nested dictionaries

Given this "user" dictionary which stores information about a user:

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

1. Write a python expression that gets the email address of Aditi.
2. Write a python expression that gets the first of Aditi's interests.
3. Write a python expression that gets the email address of Jasmine.
4. Write a python expression that gets the second of Jan's two interests.

## Exercise 2: Word Summary

You will write a program to read in a .txt file full of text and report the word summary of that program. The program will prompt the user to enter the name of the file. Your program will list the top 10 most frequently used words in that file and the count of how many times they were used.

Hint: you can use string's replace method to get rid of punctuation before you split up the string into words. Example:

content = content.replace(',', '').replace('.', '').replace('!', '')

The above removes all occurrences of commas, periods and exclamation marks from the content.

Detailed steps:

1. Prompt the user for file name
2. Read the contents of the file
3. Strip the content of punctation
4. Split the content into a list of words
5. create a dictionary to use to tally the words. We will call the dictionary tally
6. Loop through the words, for each word
  1. use the dictionarie's .get(word) method to return the current count for that word, defaulting to 0. For example: tally.get(word, 0) will get you the current value of `word` in the dictionary, but will return 0 if the word doesn't exist yet
  2. add 1 to the current count for that word and store it back to the dictionary for that word's entry

## Exercise 3:

You are the parent of 3 teenage children, and you have no idea what they are saying in their texts. You decided to write a program to translate the abbreviations they use in their texts to plain english. You will write a program that prompts the user to enter a text message, translate the text message to plain english, and print out the results. Example usage:

```
$ python txt_xlator.py
What is the text?
> jk lol
Just kidding Laughing out loud
```

You have access to a dictionary of abbreviations. Use the built-in json module to read in the abbv.json file. Like so:

import json
file = open('abbv.json', 'r')
abbreviations = json.loads(file.read())
print abbreviations
file.close()

## Bonus: Exercise 4 - Cracking Passwords

You hacked into a high-security system and found a database of user accounts. The only problem is the passwords have been encrypted. You know that md5 is a popular but weak hashing scheme that is used by many companies to encrypt user passwords. If you are lucky, you can use a rainbow table attack using common english words from a dictionary to recover the plain-text passwords.

You have access to a list of the most common words common_words.txt, and the user accounts: accounts.json. Read up on how to use md5:

https://docs.python.org/2/library/md5.html

Here's an example of how someone might use md5 to generate an encrypted password:

import md5
plaintext_password = 'opensesame'
m = md5.new()
m.update(plaintext_password)
encrypted_password = m.hexdigest()

Go to work!
