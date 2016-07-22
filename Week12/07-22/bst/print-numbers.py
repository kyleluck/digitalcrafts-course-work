# 1. Write a function print_numbers(n) to print the numbers from 1 to n.

def print_numbers(n, i = 1):
    if i <= n:
        print i
        print_numbers(n, i + 1)

print "printing numbers:"
print_numbers(10)
