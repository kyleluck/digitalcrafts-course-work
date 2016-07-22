# 1. Write a function print_numbers(n) to print the numbers from 1 to n.

def print_numbers(n, i = 1):
    if i <= n:
        print i
        i += 1
        print_numbers(n, i)

print "printing numbers:"
print_numbers(5)
