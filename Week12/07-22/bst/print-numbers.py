# 1. Write a function print_numbers(n) to print the numbers from 1 to n.

def print_numbers(n):
    if n >= 1:
        print n
        print_numbers(n - 1)

print "printing numbers:"
print_numbers(5)
