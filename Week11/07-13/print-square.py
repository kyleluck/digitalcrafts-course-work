## Print a Square
#
# Print an nxn square of * characters. You will prompt the user to enter the number n. For n = 5, it should look like:
#
# ```
# *****
# *****
# *****
# *****
# *****
# ```

print "Enter a number to print a square:"
n = int(raw_input("> "))

for x in range(1, n):
    print '*' * 5
