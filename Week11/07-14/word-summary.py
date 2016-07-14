## Exercise 2: Word Summary

# You will write a program to read in a .txt file full of text and report the word summary of that program. The program will prompt the user to enter the name of the file. Your program will list the top 10 most frequently used words in that file and the count of how many times they were used.
#
# Hint: you can use string's replace method to get rid of punctuation before you split up the string into words. Example:
#
# content = content.replace(',', '').replace('.', '').replace('!', '')
#
# The above removes all occurrences of commas, periods and exclamation marks from the content.
#
# Detailed steps:
#
# 1. Prompt the user for file name
# 2. Read the contents of the file
# 3. Strip the content of punctation
# 4. Split the content into a list of words
# 5. create a dictionary to use to tally the words. We will call the dictionary tally
# 6. Loop through the words, for each word
#   1. use the dictionarie's .get(word) method to return the current count for that word, defaulting to 0. For example: tally.get(word, 0) will get you the current value of `word` in the dictionary, but will return 0 if the word doesn't exist yet
#   2. add 1 to the current count for that word and store it back to the dictionary for that word's entry

file_name = raw_input("Enter a file name > ")

the_file = open(file_name, 'r')
content = the_file.read()

content = content.replace(',', '').replace('.', '').replace('!', '').replace('?', '').replace('\n', '')
words = content.split(' ')

tally = {}

for word in words:
    current_tally = tally.get(word, 0)
    current_tally += 1
    tally[word] = current_tally

print tally
the_file.close()
