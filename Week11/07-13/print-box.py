## Print a Box

# Given a height and width, print a box consisting of * characters as its border. You will prompt the user to enter the height and width. For example, given the height of 4 and the width of 6, you should print:
#
# ```
# ******
# *    *
# *    *
# ******
# ```

print "Please enter a height for the box:"
height = int(raw_input('> '))

print "Please enter a width for the box:"
width = int(raw_input('> '))

for x in range(1, height + 1):
    if x == 1 or x == height:
        print '*' * width
    else:
        spaces = ' ' * (width - 2)
        print '*' + spaces + '*'
