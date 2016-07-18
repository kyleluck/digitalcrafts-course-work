# BigO Notation
in order of speed
O(1)
O(logn)
O(n)
O(nlogn) # binary search algorithm
O(n^2)
O(2^n)
O(n!)

# Binary search
precondition: array is already sorted!
[2, 3, 5, 6, 7, 9]
## looking for 7
1. 7 > 5, go to the right
2. 7 == 7, found
## worst case scenario
## looking for 11
1. 11 > 5, go to the right
2. 11 > 7, go to the right
3. 11 > 9, not found
## for any n, # of loops is log2(n) - log base 2 of n
