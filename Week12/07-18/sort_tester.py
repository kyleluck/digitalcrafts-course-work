
# Dave's bubble sort
def bubbleSort(my_array):
   for pass_number in range(len(my_array)-1,0,-1):
       for i in range(pass_number):
           if my_array[i]>my_array[i+1]:
               temp = my_array[i]
               my_array[i] = my_array[i+1]
               my_array[i+1] = temp
               # or
               # my_array[i], my_array[i+1] = my_array[i+1], my_array[i]

def selection_sort(arr):
    for i in xrange(0, len(arr)):
        min_idx = i
        for j in xrange(i, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]


import time
import random

# Toby's test code
def random_numbers(n):
    return map(lambda x: random.randint(0, 100000), xrange(n))

def test(sort_fun, name):
    numbers = random_numbers(10000)
    start = time.time()
    result = sort_fun(numbers)
    end = time.time()
    print "%s takes %r" % (name, end - start)

def merge_sort(arr):
    if len(arr) == 1:
        return
    # cut the array in the middle
    cut_idx = len(arr) / 2
    left_arr = [None] * cut_idx
    right_arr = [None] * (len(arr) - cut_idx)

    # copy the values over
    for i in xrange(0, cut_idx):
        left_arr[i] = arr[i]
    for i in xrange(cut_idx, len(arr)):
        right_arr[i - cut_idx] = arr[i]

    # sort the left and the right arrays
    merge_sort(left_arr)
    merge_sort(right_arr)

    # merge
    left_idx = 0
    right_idx = 0
    org_idx = 0
    while org_idx < len(arr):
        if org_idx == len(arr):
            break
        go_left = (
            right_idx == len(right_arr) or
            (
                left_idx < len(left_arr) and
                left_arr[left_idx] < right_arr[right_idx]
            )
        )
        if go_left:
            arr[org_idx] = left_arr[left_idx]
            left_idx += 1
        else:
            arr[org_idx] = right_arr[right_idx]
            right_idx += 1
        org_idx += 1

def native_sort(arr):
    arr.sort()

# arr = [5, 2, 9, 1, 6]
# bubbleSort(arr)
# print arr

test(bubbleSort, 'Bubble Sort')
test(selection_sort, 'Selection Sort')
test(merge_sort, 'Merge Sort')
test(native_sort, 'Native Sort')
