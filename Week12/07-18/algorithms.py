## BigO Notation
# in order of speed
# O(1)
# O(logn)
# O(n)
# O(nlogn) # binary search algorithm
# O(n^2)
# O(2^n)
# O(n!)






# Total: O(n)
def total(numbers):
    sum = 0
    for n in numbers:
        sum += n
    return sum

total([3, 5, 8, 9, 10, 11, 3, 4])





















# first number: O(1)
def first_number(numbers):
    return numbers[0]













# number count: O(1)
def number_count(numbers):
    return len(numbers)












# combos: O(n^2)
def combos(numbers):
    combos = []
    for n1 in numbers:
        for n2 in numbers:
            combos.append((n1, n2))
    return combos
combos([3, 5, 8])
