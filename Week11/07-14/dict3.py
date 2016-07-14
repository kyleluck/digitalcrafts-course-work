## Exercise 3:

# You are the parent of 3 teenage children, and you have no idea what they are saying in their texts. You decided to write a program to translate the abbreviations they use in their texts to plain english. You will write a program that prompts the user to enter a text message, translate the text message to plain english, and print out the results. Example usage:
#
# ```
# $ python txt_xlator.py
# What is the text?
# > jk lol
# Just kidding Laughing out loud
# ```
#
# You have access to a dictionary of abbreviations. Use the built-in json module to read in the abbv.json file. Like so:


import json
file = open('abbv.json', 'r')
abbreviations = json.loads(file.read())
result = []

text = raw_input('What txt would you like to translate? > ')
text = text.replace('.', '').replace(',', '').replace('?', '').replace('!', '') # remove some punctation
words = text.split(' ')

for word in words:
    translation = abbreviations.get(word, 'N/A')

    #if translation wasn't found, try with uppercase
    if translation == 'N/A':
        translation = abbreviations.get(word.upper(), 'N/A')

    result.append(translation)

translation = ' '.join(result)
print translation
file.close()
