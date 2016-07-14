## Print a Square

Print an nxn square of * characters. You will prompt the user to enter the number n. For n = 5, it should look like:

```
*****
*****
*****
*****
*****
```

## Print a Box

Given a height and width, print a box consisting of * characters as its border. You will prompt the user to enter the height and width. For example, given the height of 4 and the width of 6, you should print:

```
******
*    *
*    *
******
```

## String split

Implement the string split function: split(string, delimiter). Examples;

split('abc,defg,hijk', ',') => ['abc', 'defg', 'hijk']
split('JavaScript', 'a') => ['J', 'v', 'Script']
split('JaaScript', 'a') => ['J', '', 'Script']
split('JaaaScript', 'aa') => ['J', 'aScript']

## Is it a straight?

Implement a function to determine if a list of 7 cards is a straight. The cards will be represented as numbers representing the point values of the cards. is_straight(cards). Example:

is_straight([1, 2, 3, 4, 5, 6, 7]) => True
is_straight([4, 2, 1, 8, 3, 5]) => True
is_straight([1, 2, 3, 3, 3, 4, 5]) => True
is_straight([4, 4, 2, 1, 9, 10, 11]) => False

## Bonus: Todo List

Make a command-line-based todo list app that stores your tasks in a text file called tasks.txt. The app has the following commands:

1. list - lists the tasks
2. add - add a task
3. remove - remove a task
4. move - move a task up or down

### List the tasks

Assuming your tasks.txt contains the tasks, one on a line, like so:

```
Water the plants
Do homework
Watch TV
```

Running `python todo.py list` will get the following output:

```
$ python todo.py list
01 - Water the plans
02 - Do homework
03 - Watch TV
```

### Adding a task

Running `python todo.py add "Eat the sandwich"`, you get:

```
$ python todo.py add "Eat the sandwich"
Added "Eat the sandwich" to tasks.txt
$ python todo.py list
01 - Water the plans
02 - Do homework
03 - Watch TV
04 - Eat the sandwich
```

### Remove a task

```
$ python todo.py list
01 - Water the plans
02 - Do homework
03 - Watch TV
04 - Eat the sandwich
$ python todo.py remove 2
Removed "Do homework" from tasks.txt
```

### Move a task

```
$ python todo.py list
01 - Water the plans
02 - Do homework
03 - Watch TV
04 - Eat the sandwich
$ python todo.py move 2 1
Moved "Do homework" to position 1
$ python todo.py list
01 - Do homework
02 - Water the plans
03 - Watch TV
04 - Eat the sandwich
```
