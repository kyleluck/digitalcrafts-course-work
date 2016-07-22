# 2. Write a function say_hello(names) that takes a list of names and says hello to each name in the list (prints them out using print statement).

def say_hello(names, i = 0):
    if i < len(names):
        print names[i]
        i = i + 1
        say_hello(names, i)

say_hello(["Kyle", "Tim", "Cody", "Matt", "Regan"])
