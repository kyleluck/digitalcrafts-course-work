from sys import argv

# get the script name and filename to be read from the command line arguments
script, filename = argv

# open the file
txt = open(filename)

# print the file name and its contents
print "Here's your file %r:" % filename
print txt.read()

# ask the user to input the filename
print "Type the filename again:"
file_again = raw_input("> ")

# open the file
txt_again = open(file_again)

# print the file
print txt_again.read()
