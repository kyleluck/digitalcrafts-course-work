# -*- coding: utf-8 -*-









# ██████╗ ███████╗ ██████╗██╗   ██╗██████╗ ███████╗██╗ ██████╗ ███╗   ██╗
# ██╔══██╗██╔════╝██╔════╝██║   ██║██╔══██╗██╔════╝██║██╔═══██╗████╗  ██║
# ██████╔╝█████╗  ██║     ██║   ██║██████╔╝███████╗██║██║   ██║██╔██╗ ██║
# ██╔══██╗██╔══╝  ██║     ██║   ██║██╔══██╗╚════██║██║██║   ██║██║╚██╗██║
# ██║  ██║███████╗╚██████╗╚██████╔╝██║  ██║███████║██║╚██████╔╝██║ ╚████║
# ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
#














# Recursion is a bit like loops, they can go on indefinitely.

def go():
    go()

#go()

# Actually, you'll get this:
#
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
#   File "recursion.py", line 32, in go
#     go()
# RuntimeError: maximum recursion depth exceeded











# ╔═╗┌┬┐┌─┐┌─┐┌─┐┬┌┐┌┌─┐  ╔═╗┌─┐┌┐┌┌┬┐┬┌┬┐┬┌─┐┌┐┌
# ╚═╗ │ │ │├─┘├─┘│││││ ┬  ║  │ ││││ │││ │ ││ ││││
# ╚═╝ ┴ └─┘┴  ┴  ┴┘└┘└─┘  ╚═╝└─┘┘└┘─┴┘┴ ┴ ┴└─┘┘└┘


def go_n_times(times):
    if times > 0:
        go_n_times(times - 1)



















def hello_n_times(times):
    print "Hello"
    if times > 1:
        hello_n_times(times - 1)















#
# ╔═╗┬┌┐ ┌─┐┌┐┌┌─┐┌─┐┌─┐┬
# ╠╣ │├┴┐│ ││││├─┤│  │  │
# ╚  ┴└─┘└─┘┘└┘┴ ┴└─┘└─┘┴

# Here is an example of the fibinacci sequence

def fib(n):
    return fib(n - 1) + fib(n - 2)

# except it will run into an infinite loop













# We need a stopping condition, or we get a SO

def fib(n):
    if n == 0 or n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)














# Loop through a list using recursion instead of a loop

def print_items(lst, i = 0):
    if i < len(lst):
        print "print_items %r" % lst[i]
        print_items(lst, i + 1)

print_items([1, 2, 3])















class LLNode(object):
    def __init__(self, data):
        self.data = data
        self.next = None














one = LLNode(1)
two = LLNode(2)
one.next = two
three = LLNode(3)
two.next = three
four = LLNode(4)
three.next = four








def ll_print_items_loop(llnode):
    curr_node = llnode
    while curr_node:
        print "ll_print_items_loop %r" % curr_node.data
        curr_node = curr_node.next

ll_print_items_loop(one)











def ll_print_items(llnode):
    if llnode:
        print "ll_print_items %r" % llnode.data
        ll_print_items(llnode.next)

ll_print_items(one)















class BTreeNode(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None













two = BTreeNode(2)
one = BTreeNode(1)
three = BTreeNode(3)
two.left = one
two.right = three
















def bt_print_items(node):
    if node:
        print "bt_print_items %r" % node.data
        bt_print_items(node.left)
        bt_print_items(node.right)

bt_print_items(two)
