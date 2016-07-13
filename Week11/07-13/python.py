





# Math

>>> 2 + 3
5
>>> 3 * 4
12
>>> 10 % 3
1
>>> pow(2, 2)
4

















# Boolean values

>>> True
True
>>> False
False













# Strings

>>> "abc"
'abc'
>>> 'abc'
'abc'
>>> 'abc'.index('b')
1
>>> 'abc'[1]
'b'
>>> 'a' > 'b'
False
>>> 'a' < 'b'
True
>>> subject = 'world'
>>> 'hello, ' + subject
'hello, world'
>>> 'hello, %s' % subject
'hello, world'
>>> 'abc,def,ghi'.split(',')
['abc', 'def', 'ghi']
>>> 'abcdefghijklmnopqrstuvwxyz'[5:8]
'fgh'

# Variables
>>> n = 4;
>>> name = "Aditi"

# If statements
if n > 3:
    print 'n is greater than 3'
else:
    print 'n is less or equal to 3'

# Functions
>>> def say_hello():
...    print 'Hello, world!'


>>> def add(x, y):
...    return x + y
>>> add(3, 4)

>>> add(1)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: add() takes exactly 2 arguments (1 given)
>>> add()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: add() takes exactly 2 arguments (0 given)

# return statements that return nothing
>>> def open_seseme(password):
...    if password != 'secret':
...        return
...    print 'Open'

# Arguments by name

>>> add(x = 1, y = 2)
3
>>> add(y = 2, x = 1)
3

# Spread: apply a list as argument list
>>> args = [1, 2]
>>> add(*args)
3
>>> max(*args)
2

# Variable length argument list

>>> def add_all(*vargs):
...     sum = 0
...     for num in vargs:
...             sum = sum + num
...     return sum
...
>>> add_all(1, 2, 4, 5)
12
>>> args = [3, 9, 4]
>>> add_all(*args)
16


# Lists
>>> [1, 2, 3, 4]
[1, 2, 3, 4]
>>> num_list = [1, 2, 3, 4]
>>> len(num_list)
4
>>> num_list[0]
1
>>> num_list[1]
2
>>> num_list.index(3)
2
>>> num_list[1:3]
[2, 3]
>>> num_list.append(5)
>>> num_list
[1, 2, 3, 4, 5]
>>> del num_list[2]
>>> num_list
[1, 2, 4, 5]

>>> num_list = [4, 2, 10]
>>> num_list.sort()
>>> num_list
[2, 4, 10]

# Unpacking
>>> four, two, ten = num_list
>>> four
4
>>> two
2
>>> ten
10

# Looping over lists

>>> for num in num_list:
...     print num
...
4
2
10


# While loops
>>> counter = 0
>>> while counter < 5:
...     print counter
...     counter = counter + 1
...
0
1
2
3
4
